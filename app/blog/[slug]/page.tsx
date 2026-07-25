import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { getArticleBySlug, getAllSlugs, getRelatedArticles } from "@/lib/articles";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return { title: "Article Not Found" };

  return {
    title: article.metaTitle || `${article.title} | SuperSpeed.id`,
    description: article.metaDescription || article.excerpt,
    openGraph: {
      title: article.metaTitle || article.title,
      description: article.metaDescription || article.excerpt,
      type: "article",
      publishedTime: article.datePublished,
      modifiedTime: article.dateModified,
      authors: [article.author],
      tags: article.tags,
      siteName: "SuperSpeed Racing Team",
      locale: "id_ID",
      images: article.featuredImage ? [{ url: article.featuredImage }] : [],
    },
    twitter: {
      card: "summary_large_image",
      title: article.metaTitle || article.title,
      description: article.metaDescription || article.excerpt,
    },
    alternates: {
      canonical: `https://superspeed.id/blog/${slug}`,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  const related = getRelatedArticles(article, 4);

  // JSON-LD Schema
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.excerpt,
    author: {
      "@type": "Organization",
      name: article.author,
      url: "https://superspeed.id",
    },
    publisher: {
      "@type": "Organization",
      name: "SuperSpeed Racing Team",
      url: "https://superspeed.id",
      logo: {
        "@type": "ImageObject",
        url: "https://superspeed.id/logo-superspeed.png",
      },
    },
    datePublished: article.datePublished,
    dateModified: article.dateModified,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://superspeed.id/blog/${slug}`,
    },
    image: article.featuredImage || "https://superspeed.id/images/blog-motorsport.png",
    articleSection: article.category,
    keywords: article.tags.join(", "),
    inLanguage: "id-ID",
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://superspeed.id" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://superspeed.id/blog" },
      { "@type": "ListItem", position: 3, name: article.title, item: `https://superspeed.id/blog/${slug}` },
    ],
  };

  const faqSchema = article.faq?.length
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: article.faq.map((f) => ({
          "@type": "Question",
          name: f.question,
          acceptedAnswer: { "@type": "Answer", text: f.answer },
        })),
      }
    : null;

  const categoryColors: Record<string, string> = {
    "Motor Matic": "bg-blue-500/20 text-blue-400 border-blue-500/30",
    "Superbike & Sport": "bg-red-500/20 text-red-400 border-red-500/30",
    "Motocross & Adventure": "bg-green-500/20 text-green-400 border-green-500/30",
    "Review Part Racing": "bg-[#F5A623]/20 text-[#F5A623] border-[#F5A623]/30",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}

      <article className="min-h-screen bg-[#0A0A0A] pt-28 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs text-gray-500 mb-8">
            <Link href="/" className="hover:text-[#F5A623] transition-colors">Home</Link>
            <span>›</span>
            <Link href="/blog" className="hover:text-[#F5A623] transition-colors">Blog</Link>
            <span>›</span>
            <span className="text-gray-400 truncate">{article.title}</span>
          </nav>

          {/* Header */}
          <header className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className={`px-3 py-1 text-[10px] font-bold uppercase tracking-wider rounded border ${categoryColors[article.category] || "bg-gray-500/20 text-gray-400 border-gray-500/30"}`}>
                {article.category}
              </span>
              <span className="text-xs text-gray-500">{article.readTime}</span>
            </div>
            <h1 className="font-orbitron text-3xl md:text-5xl font-black text-white leading-tight">
              {article.title}
            </h1>
            <p className="text-lg text-gray-400 mt-4 leading-relaxed">{article.excerpt}</p>
            <div className="flex items-center gap-4 mt-6 text-sm text-gray-500">
              <span>Oleh {article.author}</span>
              <span className="w-1 h-1 bg-gray-600 rounded-full" />
              <time dateTime={article.datePublished}>
                {new Date(article.datePublished).toLocaleDateString("id-ID", {
                  day: "numeric", month: "long", year: "numeric",
                })}
              </time>
            </div>
            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-4">
              {article.tags.map((tag) => (
                <span key={tag} className="px-2 py-1 text-[10px] bg-[#1A1A1A] text-gray-400 rounded border border-white/5">
                  #{tag}
                </span>
              ))}
            </div>
          </header>

          {/* Article Content */}
          <div
            className="prose prose-invert prose-lg max-w-none
              prose-headings:font-orbitron prose-headings:text-white
              prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-4
              prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
              prose-p:text-gray-300 prose-p:leading-relaxed
              prose-strong:text-[#F5A623]
              prose-a:text-[#F5A623] prose-a:no-underline hover:prose-a:underline
              prose-li:text-gray-300
              prose-blockquote:border-[#F5A623]/50 prose-blockquote:text-gray-400
              prose-img:rounded-lg
              prose-table:border-[#F5A623]/20
              prose-th:text-[#F5A623] prose-th:border-[#F5A623]/20
              prose-td:border-[#F5A623]/10"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />

          {/* FAQ Section */}
          {article.faq?.length > 0 && (
            <section className="mt-16 bg-[#1A1A1A] carbon-texture rounded-lg p-8 glow-border">
              <h2 className="font-orbitron text-2xl font-bold text-white mb-6">
                FAQ — <span className="text-gradient-orange">Pertanyaan Umum</span>
              </h2>
              <div className="space-y-6">
                {article.faq.map((f, i) => (
                  <div key={i}>
                    <h3 className="font-bold text-white text-lg mb-2">{f.question}</h3>
                    <p className="text-gray-400 leading-relaxed">{f.answer}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Related Articles */}
          {related.length > 0 && (
            <section className="mt-16">
              <h2 className="font-orbitron text-2xl font-bold text-white mb-8">
                ARTIKEL <span className="text-gradient-orange">TERKAIT</span>
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {related.map((r) => (
                  <Link key={r.slug} href={`/blog/${r.slug}`} className="group block">
                    <div className="bg-[#1A1A1A] carbon-texture rounded-lg p-6 glow-border">
                      <div className="h-1 bg-gradient-to-r from-[#F5A623] to-transparent rounded mb-4" />
                      <span className={`px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider rounded border ${categoryColors[r.category] || ""}`}>
                        {r.category}
                      </span>
                      <h3 className="font-bold text-white mt-3 group-hover:text-[#F5A623] transition-colors leading-snug">
                        {r.title}
                      </h3>
                      <p className="text-sm text-gray-400 mt-2 line-clamp-2">{r.excerpt}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          )}

          {/* Back to Blog */}
          <div className="mt-12 pt-8 border-t border-white/5">
            <Link href="/blog" className="text-[#F5A623] text-sm font-bold uppercase tracking-wider flex items-center gap-2 hover:gap-4 transition-all">
              <svg className="w-4 h-4 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
              Kembali ke Blog
            </Link>
          </div>
        </div>
      </article>
    </>
  );
}
