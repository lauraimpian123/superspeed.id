#!/usr/bin/env python3
"""
SuperSpeed.id Blog Autopilot v3.0
Menulis satu artikel per hari untuk content/articles/.

Perubahan utama dari v2.0 ada pada keragaman. Versi sebelumnya memakai satu
kerangka artikel yang sama untuk setiap topik, sehingga seluruh arsip punya
bentuk identik: lead, empat sampai enam H2, satu tabel, lalu tepat lima FAQ.
Keseragaman antar dokumen itu jauh lebih mudah dikenali sebagai tulisan mesin
daripada gaya kalimat per paragraf.

Versi ini mengacak kerangka, jumlah subjudul, jumlah FAQ, panjang artikel,
gaya pembuka, dan penulis. Keluaran model juga diperiksa ulang terhadap daftar
larangan di content/VOICE.md sebelum disimpan.

Kategori: Motor Matic (30%), Superbike & Sport (25%),
          Motocross & Adventure (20%), Review Part Racing (25%)
"""

import os
import re
import sys
import json
import time
import random
import hashlib
import datetime
import urllib.request
import urllib.error

# ═══════════════════════════════════════════════════════════════
# Configuration
# ═══════════════════════════════════════════════════════════════

SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
PROJECT_DIR = os.path.dirname(SCRIPT_DIR)
ARTICLES_DIR = os.path.join(PROJECT_DIR, "content", "articles")
STATE_FILE = os.path.join(PROJECT_DIR, "content", "state.json")
LOG_FILE = os.path.join(PROJECT_DIR, "content", "autopilot.log")

ANTHROPIC_KEY = os.environ.get("ANTHROPIC_API_KEY", "")
if not ANTHROPIC_KEY:
    creds_file = os.path.expanduser("~/.openclaw/workspace/.secrets/credentials.env")
    if os.path.exists(creds_file):
        with open(creds_file) as f:
            for line in f:
                if line.startswith("ANTHROPIC_API_KEY="):
                    ANTHROPIC_KEY = line.strip().split("=", 1)[1]

CLAUDE_MODEL = "claude-opus-5"

SITE_URL = "https://superspeed.id"

# Penulis bergilir. Nama diambil dari content/FACTS.md; jangan menambah nama di
# sini tanpa menambahkannya lebih dulu ke dokumen itu.
AUTHORS = [
    ("Agus Setiawan", "Head Mechanic"),
    ("Sari Dewi", "Data Analyst"),
    ("Hideki Tanaka", "Chief Engineer"),
    ("Redaksi SuperSpeed.id", "Redaksi"),
]

# Gambar utama per kategori. Satu gambar untuk semua artikel adalah penanda
# arsip yang dihasilkan otomatis.
CATEGORY_IMAGES = {
    "Motor Matic": ["/images/blog-motorsport.png", "/images/speed-shop-banner.png"],
    "Superbike & Sport": ["/images/motogp-action.png", "/images/motogp-straight.png"],
    "Motocross & Adventure": ["/images/mandalika-race.png", "/images/racing-team.png"],
    "Review Part Racing": ["/images/helmet-product.png", "/images/car-closeup.png"],
}

# Category weights (must sum to 100)
CATEGORIES = {
    "Motor Matic": 30,
    "Superbike & Sport": 25,
    "Motocross & Adventure": 20,
    "Review Part Racing": 25,
}

# Content type weights
CONTENT_TYPES = {
    "Review Produk": 25,
    "Panduan & Tutorial": 20,
    "Komparasi": 15,
    "Berita & Update": 15,
    "Listicle": 15,
    "Opini & Analisis": 10,
}

# ═══════════════════════════════════════════════════════════════
# Topic Templates (500+ unique combinations)
# ═══════════════════════════════════════════════════════════════

TOPIC_TEMPLATES = {
    "Motor Matic": {
        "Review Produk": [
            "Review {motor} {tahun}: Spesifikasi, Harga, Kelebihan dan Kekurangan",
            "Test Ride {motor}: Performa Mesin, Handling, dan Kenyamanan",
            "{motor} vs Generasi Sebelumnya: Apa Saja yang Berubah?",
            "Review Jujur {motor} Setelah {jarak} Kilometer Pemakaian",
        ],
        "Panduan & Tutorial": [
            "Panduan Lengkap Perawatan CVT {motor}: Tips Agar Awet Bertahun-tahun",
            "Cara Ganti Roller {motor}: Step by Step untuk Pemula",
            "Tips Hemat BBM {motor}: {jumlah} Trik yang Terbukti Efektif",
            "Panduan Servis Berkala {motor}: Jadwal dan Biaya Lengkap {tahun}",
            "Cara Setting CVT {motor} untuk Tarikan Maksimal",
        ],
        "Komparasi": [
            "{motor1} vs {motor2}: Duel Motor Matic {cc}cc Terbaik {tahun}",
            "Perbandingan {motor1} dan {motor2}: Mana yang Lebih Worth It?",
            "Head to Head: {motor1} vs {motor2} — Performa, Fitur, Harga",
        ],
        "Listicle": [
            "{jumlah} Motor Matic Terbaik untuk {kebutuhan} di {tahun}",
            "Rekomendasi {jumlah} Motor Matic Paling Irit BBM {tahun}",
            "{jumlah} Aksesori Wajib untuk Motor Matic Anda",
            "Top {jumlah} Motor Matic dengan Bagasi Terluas {tahun}",
        ],
    },
    "Superbike & Sport": {
        "Review Produk": [
            "Review {motor} {tahun}: Monster Bertenaga {hp} HP",
            "{motor}: Spesifikasi Lengkap, Harga, dan Impresi Pertama",
            "Test Ride {motor} di Sirkuit: Performa yang Membuat Ketagihan",
        ],
        "Panduan & Tutorial": [
            "Panduan Setup Suspensi {motor} untuk Track Day",
            "Cara Merawat Rantai Motor Sport: Tips Agar Awet dan Optimal",
            "Guide ECU Tuning untuk {motor}: Meningkatkan Performa Aman",
            "Tips Track Day Pertama Anda: {jumlah} Hal yang Wajib Diketahui",
        ],
        "Komparasi": [
            "{motor1} vs {motor2}: Battle Superbike {cc}cc",
            "Sport 250cc: {motor1} vs {motor2} — Mana Raja Jalanan?",
        ],
        "Berita & Update": [
            "{brand} Luncurkan {motor} {tahun} di Indonesia: Harga dan Spesifikasi",
            "WSBK Mandalika {tahun}: Preview, Jadwal, dan Prediksi",
            "MotoGP {tahun}: Update Transfer Rider dan Tim Terbaru",
        ],
    },
    "Motocross & Adventure": {
        "Review Produk": [
            "Review {motor} {tahun}: Motor Trail Terbaik di Kelasnya?",
            "{motor}: Performa Off-Road yang Sesungguhnya",
            "Test Ride {motor} di Medan Berat: Kemampuan Sebenarnya",
        ],
        "Panduan & Tutorial": [
            "Panduan Riding Off-Road untuk Pemula: {jumlah} Tips Dasar",
            "Cara Merawat Motor Trail Setelah Riding di Lumpur",
            "Setup Suspensi Motor Trail untuk Enduro: Guide Lengkap",
            "Panduan Memilih Helm Motocross yang Tepat",
        ],
        "Listicle": [
            "{jumlah} Rute Adventure Riding Terbaik di {lokasi}",
            "Top {jumlah} Motor Trail Terjangkau untuk Pemula {tahun}",
            "{jumlah} Perlengkapan Wajib untuk Motocross",
        ],
    },
    "Review Part Racing": {
        "Review Produk": [
            "Review {part} {brand}: Performa dan Kualitas di Dunia Nyata",
            "{brand} {part}: Apakah Worth It untuk Motor Anda?",
            "Unboxing dan Review {brand} {part}: Detail Lengkap",
        ],
        "Panduan & Tutorial": [
            "Panduan Memilih {part} yang Tepat untuk Motor Anda",
            "Cara Pasang {brand} {part}: Tutorial Step by Step",
            "Tips Merawat {part}: Agar Performa Selalu Optimal",
        ],
        "Komparasi": [
            "{brand1} vs {brand2} {part}: Mana yang Lebih Baik?",
            "Part Original vs Aftermarket: {part} Mana yang Worth It?",
        ],
        "Opini & Analisis": [
            "Tren Part Racing {tahun}: Apa yang Berubah dan Mengapa",
            "Investasi Part Racing: Mana yang Paling Worth It untuk Pemula?",
        ],
    },
}

# Filler data for templates
MOTORS_MATIC = ["Honda Beat", "Honda Vario 160", "Honda PCX 160", "Honda ADV 160", "Honda Scoopy", 
    "Yamaha NMAX", "Yamaha Aerox 155", "Yamaha Lexi LX 155", "Yamaha Fazzio", "Yamaha Mio M3",
    "Yamaha XMAX", "Suzuki Address", "Suzuki Burgman Street", "Vespa Sprint", "Vespa Primavera"]

MOTORS_SPORT = ["Ducati Panigale V4", "Kawasaki ZX-10R", "BMW S1000RR", "Yamaha YZF-R1",
    "Honda CBR1000RR-R", "Aprilia RSV4", "Kawasaki Ninja ZX-6R", "Yamaha YZF-R6",
    "Honda CBR250RR", "Yamaha R25", "Kawasaki Ninja 250", "Suzuki GSX-R150",
    "Honda CBR150R", "Yamaha R15 V4", "KTM RC 200", "Ducati Panigale V2"]

MOTORS_TRAIL = ["Honda CRF150L", "Kawasaki KLX 150", "Yamaha WR155R", "KTM 250 EXC-F",
    "Husqvarna FE 250", "Honda CRF250L", "Kawasaki KLX 250", "Yamaha Tenere 700",
    "Kawasaki Versys-X 250", "Honda CB500X", "Suzuki V-Strom 250", "BMW G310GS"]

PARTS = ["Brake Caliper", "Exhaust System", "Rear Shock", "Front Fork", "Racing Helmet",
    "Riding Suit", "Racing Gloves", "Brake Pad", "Sprocket Kit", "ECU",
    "Air Filter", "Clutch Kit", "Radiator", "Wheel Set", "Racing Ban"]

BRANDS_PART = ["Brembo", "Akrapovič", "Öhlins", "Yoshimura", "Arai", "Shoei", "AGV",
    "Dainese", "Alpinestars", "Galfer", "EBC", "Michelin", "Pirelli", "Dunlop",
    "SC-Project", "Arrow", "R9", "Proliner", "WP", "YSS", "Showa"]

LOKASI = ["Jawa", "Bali", "Lombok", "Sumatera", "Kalimantan", "Sulawesi", "Indonesia"]

# ═══════════════════════════════════════════════════════════════
# Keragaman Struktur
#
# Enam kerangka di bawah dipilih acak setiap kali artikel dibuat. Masing-masing
# punya alur, panjang, dan kebiasaan format yang berbeda, supaya arsip tidak
# terbaca sebagai satu cetakan yang diulang.
# ═══════════════════════════════════════════════════════════════

ARTICLE_BLUEPRINTS = [
    {
        "id": "ulasan-pemakaian",
        "alur": (
            "Ulasan berdasarkan pemakaian nyata. Mulai dari kondisi pengujian "
            "(berapa lama dipakai, di jalan seperti apa, oleh siapa), lalu temuan "
            "yang menonjol, lalu keluhan yang muncul, lalu kesimpulan siapa yang "
            "cocok memakainya. Sebutkan minimal satu kekurangan yang konkret."
        ),
        "h2_range": (3, 5),
        "faq_choices": [0, 3, 4],
        "word_range": (1300, 2000),
        "table": "opsional",
    },
    {
        "id": "panduan-langkah",
        "alur": (
            "Panduan pengerjaan. Sebutkan alat dan bahan, perkiraan waktu, dan "
            "tingkat kesulitan di bagian awal. Lalu langkah pengerjaan berurutan. "
            "Tutup dengan kesalahan yang paling sering terjadi dan cara "
            "memperbaikinya. Nyatakan dengan jelas bagian mana yang sebaiknya "
            "diserahkan ke bengkel."
        ),
        "h2_range": (4, 6),
        "faq_choices": [3, 4, 5],
        "word_range": (1500, 2400),
        "table": "tidak",
    },
    {
        "id": "komparasi-dua",
        "alur": (
            "Perbandingan dua produk atau dua pilihan. Tetapkan kriteria "
            "perbandingan di awal dan jelaskan mengapa kriteria itu yang dipakai. "
            "Bandingkan per kriteria. Tutup dengan rekomendasi bersyarat: siapa "
            "sebaiknya memilih yang mana, dan dalam kondisi apa keduanya sama saja."
        ),
        "h2_range": (3, 5),
        "faq_choices": [0, 3, 4],
        "word_range": (1200, 1900),
        "table": "wajib",
    },
    {
        "id": "catatan-lintasan",
        "alur": (
            "Catatan dari sesi di lintasan atau di gerai, ditulis kronologis. "
            "Apa yang dicoba, apa yang rusak atau gagal, apa yang diubah, hasil "
            "akhirnya bagaimana. Nada laporan, bukan promosi. Boleh diakhiri "
            "tanpa kesimpulan yang rapi kalau memang belum ada kesimpulannya."
        ),
        "h2_range": (3, 4),
        "faq_choices": [0, 0, 3],
        "word_range": (1100, 1700),
        "table": "tidak",
    },
    {
        "id": "tanya-pembeli",
        "alur": (
            "Menjawab pertanyaan yang sering masuk ke gerai. Buka dengan "
            "pertanyaannya apa adanya, lalu jawab bertahap dari yang paling "
            "mendasar. Akui bila sebagian jawabannya bergantung pada kondisi "
            "masing-masing motor dan tidak bisa diseragamkan."
        ),
        "h2_range": (4, 7),
        "faq_choices": [0, 0, 4],
        "word_range": (1400, 2200),
        "table": "opsional",
    },
    {
        "id": "tinjauan-tren",
        "alur": (
            "Tinjauan perkembangan di satu bidang. Bedakan dengan tegas antara "
            "yang sudah terlihat di pasar Indonesia dan yang masih dugaan. "
            "Tanpa satu pun angka pertumbuhan pasar atau kutipan lembaga riset. "
            "Tutup dengan menyebut apa yang belum bisa dipastikan."
        ),
        "h2_range": (3, 5),
        "faq_choices": [0, 3],
        "word_range": (1200, 1800),
        "table": "tidak",
    },
]

OPENING_STYLES = [
    "Langsung ke informasi utama pada kalimat pertama, gaya piramida terbalik.",
    "Mulai dari satu situasi konkret di gerai atau di lintasan, lalu masuk ke topik pada paragraf kedua.",
    "Mulai dari pertanyaan yang benar-benar sering ditanyakan pembeli, lalu jawab.",
    "Mulai dari satu angka atau spesifikasi yang mengejutkan, lalu jelaskan artinya.",
    "Mulai dari kesalahpahaman yang umum, lalu luruskan.",
]

CLOSING_STYLES = [
    "Tutup dengan rekomendasi yang jelas dan bersyarat.",
    "Tutup dengan satu hal yang masih belum pasti dan perlu diuji lebih lanjut.",
    "Tutup dengan ringkasan singkat, maksimal tiga kalimat, tanpa mengulang isi.",
    "Tutup dengan langkah praktis yang bisa langsung dikerjakan pembaca.",
]

# Frasa yang menandai tulisan mesin. Kemunculannya memicu satu kali penulisan
# ulang; lihat validate_draft().
BANNED_PHRASES = [
    "perlu dicatat",
    "yang tak kalah penting",
    "menariknya",
    "di era digital",
    "di era modern",
    "mari kita bahas",
    "dalam dunia yang serba cepat",
    "bukan sekadar",
    "lebih dari sekadar",
    "membawa ke level",
    "solusi menyeluruh",
    "pengalaman tak terlupakan",
    "tak dapat dipungkiri",
    "seiring berjalannya waktu",
    "kesimpulannya, ",
    "secara keseluruhan, ",
]

# Pola yang menandai statistik karangan berlabel lembaga, misalnya
# "Data dari Automotive Aftermarket Association menunjukkan pasar tumbuh 18,7%".
#
# Kata kuncinya dicocokkan tanpa memedulikan huruf besar-kecil, sebab kalimat
# semacam ini sering berada di awal paragraf. Nama lembaganya tetap harus
# diawali huruf kapital, supaya kalimat yang sah seperti "data pengujian kami
# menunjukkan" tidak ikut tertangkap.
FABRICATED_STAT_PATTERN = (
    r"(?i:data|riset|studi|laporan|survei)\s+(?:(?i:dari)\s+)?"
    r"[A-Z][A-Za-z\s]{3,40}\s+(?i:menunjukkan|mencatat|menyebut|melaporkan)"
)

# ═══════════════════════════════════════════════════════════════
# Helper Functions
# ═══════════════════════════════════════════════════════════════

def log(msg):
    ts = datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    line = f"[{ts}] {msg}"
    print(line)
    with open(LOG_FILE, "a") as f:
        f.write(line + "\n")

def load_state():
    if os.path.exists(STATE_FILE):
        with open(STATE_FILE) as f:
            return json.load(f)
    return {
        "total_articles": 0,
        "last_run": None,
        "category_count": {k: 0 for k in CATEGORIES},
        "used_titles": [],
        "last_category": None,
    }

def save_state(state):
    with open(STATE_FILE, "w") as f:
        json.dump(state, f, indent=2, ensure_ascii=False)

def pick_category(state):
    """Pick category based on weights, avoiding repeat of last category."""
    total = sum(CATEGORIES.values())
    counts = state.get("category_count", {})
    total_articles = max(state.get("total_articles", 1), 1)
    
    # Calculate how "behind" each category is vs target
    scores = {}
    for cat, weight in CATEGORIES.items():
        target_pct = weight / total
        actual_pct = counts.get(cat, 0) / total_articles
        gap = target_pct - actual_pct
        # Avoid immediate repeat
        if cat == state.get("last_category"):
            gap -= 0.1
        scores[cat] = gap
    
    # Pick category with largest gap (most underrepresented)
    return max(scores, key=scores.get)

def pick_content_type():
    """Weighted random content type selection."""
    types = list(CONTENT_TYPES.keys())
    weights = list(CONTENT_TYPES.values())
    return random.choices(types, weights=weights, k=1)[0]

def generate_topic(category, content_type, state):
    """Generate a unique topic from templates."""
    templates = TOPIC_TEMPLATES.get(category, {}).get(content_type)
    if not templates:
        # Fallback: try any content type in this category
        for ct, tmpls in TOPIC_TEMPLATES.get(category, {}).items():
            if tmpls:
                templates = tmpls
                content_type = ct
                break
    if not templates:
        return None, content_type

    tahun = random.choice(["2026", "2027"])
    jumlah = random.choice(["5", "7", "8", "10"])
    jarak = random.choice(["5,000", "10,000", "20,000", "50,000"])
    
    for _ in range(50):  # Try up to 50 times to find unique topic
        template = random.choice(templates)
        
        if category == "Motor Matic":
            motors = random.sample(MOTORS_MATIC, min(2, len(MOTORS_MATIC)))
            topic = template.format(
                motor=motors[0], motor1=motors[0], motor2=motors[1] if len(motors) > 1 else motors[0],
                tahun=tahun, jumlah=jumlah, jarak=jarak, cc=random.choice(["110", "125", "150", "160"]),
                kebutuhan=random.choice(["Harian", "Touring", "Wanita", "Mahasiswa", "Keluarga"]),
            )
        elif category == "Superbike & Sport":
            motors = random.sample(MOTORS_SPORT, min(2, len(MOTORS_SPORT)))
            topic = template.format(
                motor=motors[0], motor1=motors[0], motor2=motors[1] if len(motors) > 1 else motors[0],
                tahun=tahun, jumlah=jumlah, hp=random.choice(["155", "200", "214", "231"]),
                cc=random.choice(["150", "250", "600", "1000"]),
                brand=random.choice(["Honda", "Yamaha", "Kawasaki", "Ducati", "BMW", "Suzuki"]),
            )
        elif category == "Motocross & Adventure":
            motors = random.sample(MOTORS_TRAIL, min(2, len(MOTORS_TRAIL)))
            topic = template.format(
                motor=motors[0], tahun=tahun, jumlah=jumlah,
                lokasi=random.choice(LOKASI),
            )
        elif category == "Review Part Racing":
            topic = template.format(
                part=random.choice(PARTS), brand=random.choice(BRANDS_PART),
                brand1=random.choice(BRANDS_PART[:10]), brand2=random.choice(BRANDS_PART[5:]),
                tahun=tahun, jumlah=jumlah,
            )
        else:
            topic = template

        # Check uniqueness
        title_hash = hashlib.md5(topic.lower().encode()).hexdigest()[:12]
        if title_hash not in state.get("used_titles", []):
            return topic, content_type
    
    return None, content_type

def slugify(text):
    """Convert title to URL slug."""
    import re
    text = text.lower().strip()
    text = re.sub(r'[^\w\s-]', '', text)
    text = re.sub(r'[\s_]+', '-', text)
    text = re.sub(r'-+', '-', text)
    text = text.strip('-')
    return text[:80]

def call_claude(system_prompt, user_prompt, max_tokens=24000):
    """Panggil Messages API dan kembalikan teks jawaban.

    Permintaan dikirim sebagai stream. Artikel panjang membutuhkan max_tokens
    besar, dan permintaan non-stream dengan max_tokens di atas sekitar 16.000
    berisiko kena batas waktu HTTP.

    Catatan dua hal yang berubah pada model sekarang:
    - Parameter temperature sudah tidak diterima dan menghasilkan galat 400.
      Keragaman gaya diatur lewat prompt, bukan lewat sampling.
    - Proses berpikir aktif secara bawaan dan ikut memakai jatah max_tokens,
      jadi jatahnya perlu jauh lebih longgar daripada panjang artikel saja.
    """
    body = json.dumps({
        "model": CLAUDE_MODEL,
        "max_tokens": max_tokens,
        "stream": True,
        "system": system_prompt,
        "messages": [{"role": "user", "content": user_prompt}],
    }).encode()

    req = urllib.request.Request(
        "https://api.anthropic.com/v1/messages",
        data=body,
        headers={
            "x-api-key": ANTHROPIC_KEY,
            "anthropic-version": "2023-06-01",
            "Content-Type": "application/json",
        },
    )

    last_error = None
    for attempt in range(4):
        try:
            parts = []
            with urllib.request.urlopen(req, timeout=900) as resp:
                for raw in resp:
                    line = raw.decode("utf-8").strip()
                    if not line.startswith("data:"):
                        continue
                    payload = line[5:].strip()
                    if not payload:
                        continue
                    event = json.loads(payload)
                    etype = event.get("type")
                    if etype == "content_block_delta":
                        delta = event.get("delta", {})
                        if delta.get("type") == "text_delta":
                            parts.append(delta.get("text", ""))
                    elif etype == "error":
                        raise RuntimeError(event.get("error", {}).get("message", "stream error"))
            text = "".join(parts)
            if not text.strip():
                raise RuntimeError("jawaban kosong")
            return text
        except urllib.error.HTTPError as e:
            last_error = e
            # 429 dan 5xx layak dicoba ulang; sisanya tidak akan berubah hasilnya.
            if e.code != 429 and e.code < 500:
                detail = e.read().decode("utf-8", "replace")[:500]
                raise RuntimeError(f"HTTP {e.code}: {detail}") from e
            wait = 2 ** attempt * 5
            log(f"  HTTP {e.code}, mencoba lagi dalam {wait} detik")
            time.sleep(wait)
        except (urllib.error.URLError, RuntimeError, json.JSONDecodeError) as e:
            last_error = e
            wait = 2 ** attempt * 5
            log(f"  Gagal ({e}), mencoba lagi dalam {wait} detik")
            time.sleep(wait)

    raise RuntimeError(f"Gagal setelah 4 percobaan: {last_error}")

# ═══════════════════════════════════════════════════════════════
# Article Generation
# ═══════════════════════════════════════════════════════════════

SYSTEM_PROMPT = """Kamu penulis di redaksi SuperSpeed.id, sebuah toko part racing di Lombok yang juga menjalankan tim balap sendiri. Kamu menulis untuk pembaca yang sudah paham dasar otomotif, bukan untuk pemula total.

BAHASA
- Bahasa Indonesia baku. Sapa pembaca dengan "Anda".
- Istilah teknis yang memang tidak punya padanan lazim boleh tetap Inggris: caliper, quickshifter, fitment, indent, track day.
- Jangan pakai bahasa gaul, emoji, atau simbol dekoratif.

LARANGAN KERAS
1. Dilarang memakai tanda pisah panjang (—) di mana pun. Pakai titik, koma, titik dua, atau tanda kurung.
2. Dilarang menulis tiga kata benda atau tiga frasa berderet. Pakai dua, atau empat, atau susun ulang jadi kalimat. Pola tiga serangkai adalah penanda tulisan mesin yang paling mudah dikenali.
3. Dilarang memakai frasa berikut: "perlu dicatat", "yang tak kalah penting", "menariknya", "di era digital ini", "mari kita bahas", "bukan sekadar", "lebih dari sekadar", "membawa ke level berikutnya", "solusi menyeluruh", "pengalaman tak terlupakan", "tak dapat dipungkiri", "seiring berjalannya waktu".
4. Dilarang mengarang statistik yang dikaitkan dengan lembaga. Jangan pernah menulis kalimat seperti "data dari [nama lembaga] menunjukkan pasar tumbuh 18,7 persen". Kalau kamu tidak tahu angkanya, tulis secara kualitatif tanpa angka. Ini lebih penting daripada terdengar meyakinkan.
5. Dilarang memakai superlatif tanpa bukti: "terbaik", "nomor satu", "kelas dunia", "terlengkap", "revolusioner".
6. Dilarang menutup artikel dengan kalimat generik seperti "Kesimpulannya," atau "Secara keseluruhan,".

YANG MEMBUAT TULISAN TERBACA SEPERTI DITULIS ORANG
- Panjang kalimat harus tidak rata. Selipkan kalimat pendek di antara kalimat panjang. Tulisan mesin menghasilkan kalimat dengan panjang seragam; tulisan orang tidak.
- Sebutkan keterbatasan secara spesifik. Ini pembeda paling kuat. Contoh: part tertentu harus indent tiga minggu, harga belum termasuk pemasangan, hasil pengujian belum konsisten, sebagian pertanyaan tidak bisa dijawab seragam.
- Sebutkan detail kecil yang khas: suhu aspal Mandalika pada siang hari, cuaca Lombok saat musim hujan, ukuran baut, nama kurir, jam tutup gerai.
- Boleh menyatakan ketidakpastian. "Kami belum menguji varian itu" lebih baik daripada menebak.
- Satu gagasan per paragraf, dua sampai empat kalimat.
- Pakai kata kerja aktif.

FORMAT HTML
- Heading <h2>, dan <h3> hanya bila memang perlu.
- Paragraf <p>.
- Daftar <ul><li> atau <ol><li> bila isinya memang berupa daftar.
- <strong> untuk penekanan seperlunya, <em> untuk istilah asing.
- Tautan internal ke <a href="/speed-shop">, <a href="/racing-team">, atau <a href="/blog">. Dua sampai tiga saja, dan hanya bila memang relevan dengan kalimatnya. Jangan memaksakan tautan.
- Tabel hanya bila diminta, dengan struktur lengkap:
  <table><thead><tr><th>Kolom</th></tr></thead><tbody><tr><td>Isi</td></tr></tbody></table>

ANGKA
- Harga dalam format Rp X.XXX.XXX.
- Spesifikasi teknis boleh disebut bila kamu yakin: cc, HP, Nm, kg, km per liter.
- Kalau ragu terhadap sebuah angka, jangan sebut angkanya.

Keluarkan HANYA JSON valid, tanpa blok kode markdown:
{
  "title": "Judul informatif, maksimal 60 karakter",
  "excerpt": "Ringkasan 155 sampai 160 karakter",
  "content": "Artikel lengkap dalam HTML",
  "tags": ["4 sampai 6 tag relevan"],
  "faq": [{"question": "Pertanyaan?", "answer": "Jawaban 2 sampai 3 kalimat."}],
  "metaTitle": "Judul SEO maksimal 60 karakter | SuperSpeed.id",
  "metaDescription": "Meta description 155 sampai 160 karakter"
}"""


def build_article_spec(recent_blueprints=()):
    """Tentukan bentuk artikel secara acak.

    Ini bagian terpenting dari keseluruhan skrip. Detektor teks otomatis jauh
    lebih mudah mengenali keseragaman antar dokumen daripada gaya kalimat.
    Delapan artikel dengan kerangka identik lebih mencurigakan daripada satu
    artikel dengan diksi yang agak kaku.

    recent_blueprints berisi kerangka yang baru saja dipakai. Kerangka itu
    dihindari supaya dua artikel berurutan tidak berbentuk sama.
    """
    pool = [b for b in ARTICLE_BLUEPRINTS if b["id"] not in recent_blueprints]
    bp = random.choice(pool or ARTICLE_BLUEPRINTS)
    return {
        "blueprint": bp,
        "h2_count": random.randint(*bp["h2_range"]),
        "faq_count": random.choice(bp["faq_choices"]),
        "word_target": random.randint(*bp["word_range"]),
        "opening": random.choice(OPENING_STYLES),
        "closing": random.choice(CLOSING_STYLES),
        "use_table": (
            bp["table"] == "wajib"
            or (bp["table"] == "opsional" and random.random() < 0.35)
        ),
        "use_h3": random.random() < 0.5,
        "use_list": random.random() < 0.6,
    }


def validate_draft(data):
    """Kembalikan daftar pelanggaran terhadap content/VOICE.md."""
    blob = " ".join([
        str(data.get("title", "")),
        str(data.get("excerpt", "")),
        str(data.get("content", "")),
        " ".join(f"{f.get('question','')} {f.get('answer','')}" for f in data.get("faq") or []),
    ])
    lower = blob.lower()

    problems = []
    if "—" in blob or "–" in blob:
        problems.append("memakai tanda pisah panjang")
    for phrase in BANNED_PHRASES:
        if phrase in lower:
            problems.append(f"frasa terlarang: {phrase.strip()}")
    if re.search(FABRICATED_STAT_PATTERN, blob):
        problems.append("statistik berlabel lembaga yang tidak bisa diverifikasi")
    return problems


def sanitize(data):
    """Jaring pengaman terakhir bila model tetap melanggar setelah ditulis ulang.

    Hanya menangani tanda pisah panjang, karena itu satu-satunya pelanggaran
    yang bisa diperbaiki secara mekanis tanpa merusak makna kalimat.
    """
    def fix(text):
        if not isinstance(text, str):
            return text
        text = re.sub(r"\s*[—–]\s*", ", ", text)
        return re.sub(r",\s*,", ",", text)

    # Hanya perbaiki kunci yang memang ada. Menulis string kosong untuk kunci
    # yang tidak dikirim model akan mematikan nilai cadangan di generate_article().
    for key in ("title", "excerpt", "content", "metaTitle", "metaDescription"):
        if data.get(key):
            data[key] = fix(data[key])
    for item in data.get("faq") or []:
        item["question"] = fix(item.get("question", ""))
        item["answer"] = fix(item.get("answer", ""))
    return data


def count_words(html):
    return len(re.sub(r"<[^>]+>", " ", html or "").split())


def parse_json_reply(raw):
    """Ambil objek JSON dari jawaban model.

    Model kadang membungkus jawaban dalam pagar kode, dengan atau tanpa baris
    baru setelah pembukanya. Pengupasan pagar dijaga agar tidak pernah
    melempar galat sendiri; bila gagal, pencarian objek JSON di bawah yang
    akan menanganinya.
    """
    text = raw.strip()
    if text.startswith("```"):
        body = text[3:]
        # Buang penanda bahasa seperti ```json bila ada.
        if "\n" in body:
            body = body.split("\n", 1)[1]
        text = body.rsplit("```", 1)[0].strip()

    try:
        return json.loads(text)
    except json.JSONDecodeError:
        match = re.search(r"\{[\s\S]*\}", raw)
        if not match:
            raise
        return json.loads(match.group())


def build_user_prompt(topic, category, content_type, spec, extra_note=""):
    bp = spec["blueprint"]

    lines = [
        f'Tulis satu artikel dengan topik: "{topic}"',
        "",
        f"Kategori: {category}",
        f"Tipe tulisan: {content_type}",
        "",
        "BENTUK ARTIKEL YANG DIMINTA KALI INI",
        f"Alur: {bp['alur']}",
        f"Pembuka: {spec['opening']}",
        f"Penutup: {spec['closing']}",
        f"Jumlah subjudul H2: tepat {spec['h2_count']}.",
        f"Panjang: sekitar {spec['word_target']} kata. Tidak perlu tepat, tapi jangan jauh melebihi.",
    ]

    lines.append(
        "Sertakan satu tabel perbandingan dengan struktur thead dan tbody yang lengkap."
        if spec["use_table"]
        else "Jangan pakai tabel sama sekali pada artikel ini."
    )
    lines.append(
        "Boleh memakai H3 di bawah sebagian H2 bila memang membantu."
        if spec["use_h3"]
        else "Jangan pakai H3. Cukup H2 dan paragraf."
    )
    lines.append(
        "Sertakan satu daftar berbutir bila isinya memang berupa daftar."
        if spec["use_list"]
        else "Jangan pakai daftar berbutir. Tulis dalam bentuk paragraf."
    )

    if spec["faq_count"] == 0:
        lines.append('Tidak perlu bagian FAQ. Kembalikan "faq": [].')
    else:
        lines.append(
            f"Sertakan tepat {spec['faq_count']} pertanyaan pada bagian faq. "
            "Ambil pertanyaan yang memang wajar ditanyakan pembeli, bukan pertanyaan "
            "yang dibuat-buat supaya ada isinya."
        )

    lines += [
        "",
        "PENGINGAT",
        "Tidak ada tanda pisah panjang. Tidak ada pola tiga serangkai. Tidak ada "
        "statistik karangan yang dikaitkan dengan lembaga. Sebutkan minimal satu "
        "keterbatasan yang konkret dan merugikan kami sendiri.",
    ]

    if extra_note:
        lines += ["", extra_note]

    return "\n".join(lines)


def generate_article(topic, category, content_type, recent_blueprints=()):
    """Hasilkan satu artikel lengkap beserta metadatanya."""

    today = datetime.date.today().isoformat()
    spec = build_article_spec(recent_blueprints)

    log(f"  Kerangka: {spec['blueprint']['id']}")
    log(f"  H2: {spec['h2_count']} | FAQ: {spec['faq_count']} | "
        f"target: {spec['word_target']} kata | tabel: {spec['use_table']}")

    raw = call_claude(SYSTEM_PROMPT, build_user_prompt(topic, category, content_type, spec))
    data = parse_json_reply(raw)

    problems = validate_draft(data)
    if problems:
        log(f"  Pelanggaran gaya: {'; '.join(problems[:4])}")
        log("  Menulis ulang satu kali...")
        note = (
            "Draf sebelumnya ditolak karena: "
            + "; ".join(problems)
            + ". Tulis ulang seluruh artikel tanpa pelanggaran tersebut. "
            "Jangan sekadar menambal bagian yang bermasalah."
        )
        raw = call_claude(
            SYSTEM_PROMPT,
            build_user_prompt(topic, category, content_type, spec, extra_note=note),
        )
        data = parse_json_reply(raw)

        remaining = validate_draft(data)
        if remaining:
            log(f"  Masih melanggar: {'; '.join(remaining[:4])}. Membersihkan seadanya.")
            data = sanitize(data)
    
    title = data.get("title", topic)
    words = count_words(data.get("content", ""))
    author_name, author_role = random.choice(AUTHORS)
    images = CATEGORY_IMAGES.get(category, ["/images/blog-motorsport.png"])

    log(f"  Selesai: {words} kata, {len(data.get('faq') or [])} FAQ, penulis {author_name}")

    return {
        "slug": slugify(title),
        "title": title,
        "excerpt": data.get("excerpt", ""),
        "content": data.get("content", ""),
        "category": category,
        "contentType": content_type,
        "blueprint": spec["blueprint"]["id"],
        "tags": data.get("tags", []),
        "author": author_name,
        "authorRole": author_role,
        "datePublished": today,
        "dateModified": today,
        # Dihitung dari jumlah kata sebenarnya, bukan dari klaim model.
        "readTime": f"{max(1, round(words / 200))} menit",
        "wordCount": words,
        "featured": False,
        "featuredImage": random.choice(images),
        "metaTitle": data.get("metaTitle", f"{title} | SuperSpeed.id"),
        "metaDescription": data.get("metaDescription", data.get("excerpt", "")),
        "faq": data.get("faq") or [],
        "relatedSlugs": [],
    }

# ═══════════════════════════════════════════════════════════════
# Main
# ═══════════════════════════════════════════════════════════════

def main():
    log("=" * 60)
    log("SuperSpeed.id Blog Autopilot v3.0")
    log("=" * 60)
    
    if not ANTHROPIC_KEY:
        log("❌ ANTHROPIC_API_KEY not set!")
        sys.exit(1)
    
    os.makedirs(ARTICLES_DIR, exist_ok=True)
    state = load_state()
    
    today = datetime.date.today().isoformat()
    
    # Check if already ran today
    if state.get("last_run") == today:
        log("ℹ️ Already ran today. Skipping.")
        return
    
    # Pick category and content type
    category = pick_category(state)
    content_type = pick_content_type()
    log(f"Category: {category}")
    log(f"Content Type: {content_type}")
    
    # Generate topic
    topic, content_type = generate_topic(category, content_type, state)
    if not topic:
        log("❌ Could not generate unique topic!")
        sys.exit(1)
    log(f"Topic: {topic}")
    
    # Generate article
    recent_blueprints = state.get("recent_blueprints", [])
    try:
        article = generate_article(topic, category, content_type, recent_blueprints)
    except Exception as e:
        log(f"❌ Article generation failed: {e}")
        sys.exit(1)
    
    # Save article
    article_path = os.path.join(ARTICLES_DIR, f"{article['slug']}.json")
    with open(article_path, "w", encoding="utf-8") as f:
        json.dump(article, f, indent=2, ensure_ascii=False)
    log(f"✅ Article saved: {article_path}")
    
    # Update state
    title_hash = hashlib.md5(topic.lower().encode()).hexdigest()[:12]
    state["total_articles"] = state.get("total_articles", 0) + 1
    state["last_run"] = today
    state["last_category"] = category
    state["category_count"] = state.get("category_count", {})
    state["category_count"][category] = state["category_count"].get(category, 0) + 1
    state["used_titles"] = state.get("used_titles", [])
    state["used_titles"].append(title_hash)
    # Keep only last 10000 title hashes
    if len(state["used_titles"]) > 10000:
        state["used_titles"] = state["used_titles"][-10000:]
    # Dua kerangka terakhir dihindari pada artikel berikutnya.
    state["recent_blueprints"] = ([article["blueprint"]] + recent_blueprints)[:2]
    save_state(state)
    
    # Git commit and push
    log("Pushing to GitHub...")
    os.chdir(PROJECT_DIR)
    os.system('git add content/')
    os.system(f'git commit -m "blog: {article["title"]}"')
    os.system('git push')
    
    log(f"✅ DONE! Article #{state['total_articles']}: {article['title']}")
    log(f"   Category: {category} | Type: {content_type}")
    log(f"   Slug: {article['slug']}")
    log("")

if __name__ == "__main__":
    main()
