# SuperSpeed.id Blog Autopilot — 20-Year Content Strategy

## Overview
- **Target**: 1 artikel/hari = 365/tahun = 7,300 artikel dalam 20 tahun
- **Bahasa**: Bahasa Indonesia (SEO lokal)
- **Model**: GPT-4o-mini (draft) → GPT-4o (polish) — 2-stage pipeline
- **Cost estimate**: ~Rp 15-25K/bulan (sangat murah)

## Content Categories (4 Pilar)

### 1. Motor Matic (30% — ~110 artikel/tahun)
- Review motor matic terbaru (Honda Beat, Vario, Scoopy, PCX, ADV, Yamaha NMAX, Aerox, Lexi, Fazzio, Mio, Suzuki Address, Burgman, dll)
- Tips perawatan CVT, roller, v-belt, oli
- Modifikasi matic (daily, touring, racing)
- Perbandingan head-to-head
- Aksesori & part upgrade matic
- Tips hemat BBM, berkendara aman

### 2. Superbike & Sport (25% — ~91 artikel/tahun)
- Review superbike (Ducati Panigale, Kawasaki ZX-10R, BMW S1000RR, Yamaha R1, Honda CBR1000RR, Aprilia RSV4)
- Review sport 150-250cc (CBR150R, CBR250RR, R15, R25, Ninja 250, GSX-R150)
- WSBK & MotoGP race reports & analysis
- Track day tips & sirkuit Indonesia
- Setup & tuning guide
- Komunitas superbike Indonesia

### 3. Motocross & Adventure (20% — ~73 artikel/tahun)
- Review motor trail (CRF150L, KLX150, WR155R, KTM EXC, Husqvarna)
- Review motor adventure (Tenere, Versys, Tiger, V-Strom)
- Event motocross & enduro Indonesia
- Tips riding off-road & safety
- Gear & proteksi motocross
- Rute adventure riding Indonesia

### 4. Review Part Racing (25% — ~91 artikel/tahun)
- Review brake system (Brembo, Nissin, Galfer, EBC)
- Review exhaust (Akrapovič, Yoshimura, SC-Project, Arrow, R9, Proliner)
- Review suspension (Öhlins, Showa, WP, YSS)
- Review safety gear (Arai, Shoei, AGV, Dainese, Alpinestars)
- Review ban (Michelin, Pirelli, Dunlop, Bridgestone, IRC)
- Installation guide & tips pemasangan
- Perbandingan part original vs aftermarket

## Content Types (Rotasi Otomatis)

| Type | % | Deskripsi |
|------|---|-----------|
| Review Produk | 25% | Review mendalam motor/part dengan specs, pro/cons |
| Panduan & Tutorial | 20% | Step-by-step guide perawatan, modifikasi, tips |
| Komparasi | 15% | Head-to-head perbandingan 2-3 produk |
| Berita & Update | 15% | Motor baru, regulasi, event, race report |
| Listicle | 15% | "Top 10...", "5 Rekomendasi...", "7 Tips..." |
| Opini & Analisis | 10% | Tren industri, prediksi, deep-dive teknologi |

## SEO Architecture (20-Year Proof)

### URL Structure
```
superspeed.id/blog/[slug]
```
- Slug: judul-artikel-lowercase-tanpa-tahun
- Contoh: /blog/review-honda-beat-2027-spesifikasi-harga
- Evergreen URLs (no date in URL for longevity)

### Schema Markup (JSON-LD)
Every article includes:
- Article schema (headline, author, datePublished, dateModified)
- BreadcrumbList schema
- Organization schema
- FAQPage schema (if article has FAQ section)
- Product schema (if reviewing a product)
- Review schema (if reviewing a product with rating)

### Meta Tags
- title: "[Judul Artikel] | SuperSpeed.id"
- description: 155-160 chars, keyword-rich
- og:title, og:description, og:image, og:type
- twitter:card, twitter:title, twitter:description
- canonical URL
- robots: index, follow

### Technical SEO
- Dynamic sitemap.xml (auto-updated)
- robots.txt
- Structured breadcrumbs
- Internal linking (3-5 related articles)
- Image alt tags
- Mobile-first responsive
- Core Web Vitals optimized (Next.js SSG)

## Anti-Duplicate System
- Jaccard similarity check (60% threshold)
- Topic tracking in state.json
- Category rotation enforcement
- Title deduplication
- 500+ unique topic templates per category

## 20-Year Sustainability Plan

### Year 1-2: Foundation (2026-2027)
- Build core library: 730 articles covering all basics
- Establish authority in each category
- Focus on long-tail keywords

### Year 3-5: Growth (2028-2030)
- 1,825 articles total
- Start ranking for competitive keywords
- Expand to new sub-categories (electric motorcycles, etc.)

### Year 6-10: Authority (2031-2035)
- 3,650 articles total
- Become top 3 Indonesian motorcycle resource
- Add comparison databases, spec sheets

### Year 11-20: Dominance (2036-2045)
- 7,300 articles total
- Complete encyclopedia of Indonesian motorsport
- Auto-update old articles with new data
- Expand categories as industry evolves (EV, autonomous, etc.)

### Evergreen Strategy
- 70% evergreen content (always relevant)
- 30% timely content (new releases, race reports)
- Annual refresh cycle for top-performing articles
- Topic expansion based on search trend data
