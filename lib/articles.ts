import fs from "fs";
import path from "path";

export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  contentType: string;
  tags: string[];
  author: string;
  datePublished: string;
  dateModified: string;
  readTime: string;
  featured: boolean;
  featuredImage: string;
  metaTitle: string;
  metaDescription: string;
  faq: { question: string; answer: string }[];
  relatedSlugs: string[];
}

const ARTICLES_DIR = path.join(process.cwd(), "content", "articles");

export function getAllArticles(): Article[] {
  if (!fs.existsSync(ARTICLES_DIR)) return [];

  const files = fs.readdirSync(ARTICLES_DIR).filter((f) => f.endsWith(".json"));
  const articles = files
    .map((file) => {
      try {
        const raw = fs.readFileSync(path.join(ARTICLES_DIR, file), "utf-8");
        return JSON.parse(raw) as Article;
      } catch {
        return null;
      }
    })
    .filter((a): a is Article => a !== null)
    .sort((a, b) => new Date(b.datePublished).getTime() - new Date(a.datePublished).getTime());

  return articles;
}

export function getArticleBySlug(slug: string): Article | null {
  const filePath = path.join(ARTICLES_DIR, `${slug}.json`);
  if (!fs.existsSync(filePath)) return null;

  try {
    const raw = fs.readFileSync(filePath, "utf-8");
    return JSON.parse(raw) as Article;
  } catch {
    return null;
  }
}

export function getArticlesByCategory(category: string): Article[] {
  return getAllArticles().filter((a) => a.category === category);
}

export function getRelatedArticles(article: Article, limit = 5): Article[] {
  const all = getAllArticles();
  return all
    .filter((a) => a.slug !== article.slug && a.category === article.category)
    .slice(0, limit);
}

export function getAllCategories(): string[] {
  const articles = getAllArticles();
  return [...new Set(articles.map((a) => a.category))];
}

export function getAllSlugs(): string[] {
  if (!fs.existsSync(ARTICLES_DIR)) return [];
  return fs
    .readdirSync(ARTICLES_DIR)
    .filter((f) => f.endsWith(".json"))
    .map((f) => f.replace(".json", ""));
}
