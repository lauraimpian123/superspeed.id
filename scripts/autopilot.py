#!/usr/bin/env python3
"""
SuperSpeed.id Blog Autopilot v1.0
Generates 1 SEO-optimized article per day about Indonesian motorcycle culture.

Categories: Motor Matic (30%), Superbike & Sport (25%), Motocross & Adventure (20%), Review Part Racing (25%)
Pipeline: GPT-4o-mini (draft) → GPT-4o (polish + SEO)
Output: JSON article files in content/articles/
"""

import os
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

API_KEY = os.environ.get("OPENAI_API_KEY", "")
if not API_KEY:
    # Try loading from credentials
    creds_file = os.path.expanduser("~/.openclaw/workspace/.secrets/credentials.env")
    if os.path.exists(creds_file):
        with open(creds_file) as f:
            for line in f:
                if line.startswith("OPENAI_API_KEY="):
                    API_KEY = line.strip().split("=", 1)[1]

AUTHOR = "SuperSpeed Racing Team"
SITE_URL = "https://superspeed.id"

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

def call_openai(messages, model="gpt-4o-mini", max_tokens=4000):
    """Call OpenAI API."""
    body = json.dumps({
        "model": model,
        "messages": messages,
        "max_tokens": max_tokens,
        "temperature": 0.8,
    }).encode()
    
    req = urllib.request.Request(
        "https://api.openai.com/v1/chat/completions",
        data=body,
        headers={
            "Authorization": f"Bearer {API_KEY}",
            "Content-Type": "application/json",
        },
    )
    
    resp = urllib.request.urlopen(req, timeout=120)
    data = json.loads(resp.read())
    return data["choices"][0]["message"]["content"]

# ═══════════════════════════════════════════════════════════════
# Article Generation
# ═══════════════════════════════════════════════════════════════

def generate_article(topic, category, content_type):
    """2-stage pipeline: GPT-4o-mini draft → GPT-4o polish."""
    
    today = datetime.date.today().isoformat()
    
    # Stage 1: Draft with GPT-4o-mini
    log(f"  Stage 1: Drafting with GPT-4o-mini...")
    draft_prompt = f"""Kamu adalah jurnalis otomotif profesional Indonesia yang menulis untuk SuperSpeed.id — website racing team dan toko part otomotif racing.

Tulis artikel lengkap dengan topik: "{topic}"
Kategori: {category}
Tipe konten: {content_type}

ATURAN PENULISAN:
1. Tulis dalam Bahasa Indonesia yang natural dan engaging
2. Panjang artikel: 2000-3000 kata
3. Gunakan heading H2 dan H3 yang SEO-friendly
4. Setiap paragraf maksimal 3-4 kalimat (scannable)
5. Sertakan data spesifik: harga, spesifikasi, angka
6. Gunakan format HTML (h2, h3, p, ul, li, strong, em, blockquote, table)
7. JANGAN gunakan emoji atau simbol dekoratif di body artikel
8. Sertakan internal link ke halaman SuperSpeed: /speed-shop, /racing-team, /blog
9. Tulis dengan gaya informatif tapi tetap engaging, bukan kaku

STRUKTUR WAJIB:
- Paragraf pembuka (hook + konteks)
- 4-6 section dengan H2
- Sub-section dengan H3 jika perlu
- Tabel spesifikasi (jika review produk)
- Kesimpulan / verdict
- 5 FAQ (pertanyaan + jawaban singkat)

Output dalam format JSON:
{{
  "title": "Judul artikel (max 60 karakter untuk SEO)",
  "excerpt": "Ringkasan 155-160 karakter untuk meta description",
  "content": "Konten HTML lengkap artikel",
  "tags": ["tag1", "tag2", "tag3", "tag4", "tag5"],
  "faq": [
    {{"question": "Pertanyaan?", "answer": "Jawaban singkat."}},
    ...5 FAQ
  ],
  "readTime": "X menit"
}}

PENTING: Output HANYA JSON valid, tanpa markdown code block."""

    draft_raw = call_openai([
        {"role": "system", "content": "Kamu adalah jurnalis otomotif Indonesia profesional. Output HANYA JSON valid."},
        {"role": "user", "content": draft_prompt},
    ], model="gpt-4o-mini", max_tokens=6000)
    
    # Parse JSON from response
    try:
        # Clean potential markdown wrapping
        draft_raw = draft_raw.strip()
        if draft_raw.startswith("```"):
            draft_raw = draft_raw.split("\n", 1)[1].rsplit("```", 1)[0]
        draft = json.loads(draft_raw)
    except json.JSONDecodeError as e:
        log(f"  ❌ JSON parse error in draft: {e}")
        # Try to extract JSON
        import re
        match = re.search(r'\{[\s\S]*\}', draft_raw)
        if match:
            draft = json.loads(match.group())
        else:
            raise

    # Stage 2: Polish with GPT-4o (SEO + quality)
    log(f"  Stage 2: Polishing with GPT-4o...")
    polish_prompt = f"""Review dan polish artikel ini untuk SEO maksimal:

Judul: {draft.get('title', topic)}
Kategori: {category}

Artikel saat ini:
{json.dumps(draft, ensure_ascii=False)[:3000]}

TUGAS:
1. Pastikan meta title ≤ 60 karakter, mengandung keyword utama
2. Pastikan meta description 155-160 karakter, compelling, keyword-rich
3. Pastikan heading H2 mengandung keyword variasi
4. Tambahkan internal link ke /speed-shop atau /racing-team jika relevan (format: <a href="/speed-shop">teks</a>)
5. Pastikan minimal 3 internal link dalam artikel
6. Pastikan artikel mengalir natural, tidak robotic

Output JSON:
{{
  "metaTitle": "Title SEO ≤60 char | SuperSpeed.id",
  "metaDescription": "Description SEO 155-160 char",
  "improvedContent": "Konten HTML yang sudah di-polish (atau null jika sudah bagus)"
}}

Output HANYA JSON valid."""

    polish_raw = call_openai([
        {"role": "system", "content": "Kamu adalah SEO specialist. Output HANYA JSON valid."},
        {"role": "user", "content": polish_prompt},
    ], model="gpt-4o", max_tokens=2000)

    try:
        polish_raw = polish_raw.strip()
        if polish_raw.startswith("```"):
            polish_raw = polish_raw.split("\n", 1)[1].rsplit("```", 1)[0]
        polish = json.loads(polish_raw)
    except:
        polish = {}

    # Assemble final article
    slug = slugify(draft.get("title", topic))
    
    article = {
        "slug": slug,
        "title": draft.get("title", topic),
        "excerpt": draft.get("excerpt", ""),
        "content": polish.get("improvedContent") or draft.get("content", ""),
        "category": category,
        "contentType": content_type,
        "tags": draft.get("tags", []),
        "author": AUTHOR,
        "datePublished": today,
        "dateModified": today,
        "readTime": draft.get("readTime", "8 menit"),
        "featured": False,
        "featuredImage": "/images/blog-motorsport.png",
        "metaTitle": polish.get("metaTitle", f"{draft.get('title', topic)} | SuperSpeed.id"),
        "metaDescription": polish.get("metaDescription", draft.get("excerpt", "")),
        "faq": draft.get("faq", []),
        "relatedSlugs": [],
    }
    
    return article

# ═══════════════════════════════════════════════════════════════
# Main
# ═══════════════════════════════════════════════════════════════

def main():
    log("=" * 60)
    log("SuperSpeed.id Blog Autopilot v1.0")
    log("=" * 60)
    
    if not API_KEY:
        log("❌ OPENAI_API_KEY not set!")
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
    try:
        article = generate_article(topic, category, content_type)
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
