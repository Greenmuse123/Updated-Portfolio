import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { BlogPost } from '@/types/blog';

const blogPostsDirectory = path.join(process.cwd(), 'src', 'content', 'blog');

// Ensure the blog directory exists
export function ensureBlogDirectory() {
  if (!fs.existsSync(blogPostsDirectory)) {
    fs.mkdirSync(blogPostsDirectory, { recursive: true });
  }
}

// Get all blog post slugs
export async function getAllBlogSlugs(): Promise<string[]> {
  ensureBlogDirectory();
  
  const files = fs.readdirSync(blogPostsDirectory);
  return files
    .filter(file => file.endsWith('.mdx'))
    .map(file => file.replace(/\.mdx$/, ''));
}

// Get a single blog post by slug
export async function getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  ensureBlogDirectory();
  
  const filePath = path.join(blogPostsDirectory, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) {
    return null;
  }

  const fileContents = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContents);

  // Compute reading time if not provided (approx. 200 words/min)
  const words = content.split(/\s+/).length;
  const computedReadingTime = Math.max(1, Math.round(words / 200));

  // Parse the frontmatter data into a structured BlogPost object
  return {
    slug,
    title: data.title || 'Untitled Blog Post',
    description: data.description || '',
    keywords: Array.isArray(data.keywords) ? data.keywords : typeof data.keywords === 'string' ? data.keywords.split(',').map((k: string) => k.trim()) : [],
    imageUrl: data.imageUrl || '',
    imageAlt: data.imageAlt || '',
    datePublished: data.datePublished || new Date().toISOString().split('T')[0],
    canonicalUrl: data.canonicalUrl || '',
    author: data.author || 'Elias Musleh',
    readingTime: typeof data.readingTime === 'number' ? data.readingTime : computedReadingTime,
    subtitle: data.subtitle || '',
    tags: Array.isArray(data.tags) ? data.tags : [],
    category: data.category || '',
    structuredData: data.structuredData || {},
    draft: data.draft === true,
    tocItems: data.tocItems || [],
    content: data.content || [],
    rawContent: content,
  };
}

// Get all blog posts (for index page or sitemap)
export async function getAllBlogPosts(): Promise<BlogPost[]> {
  const slugs = await getAllBlogSlugs();
  const posts = await Promise.all(
    slugs
      .filter(slug => !slug.includes('template')) // Exclude posts with 'template' in the slug
      .map(async (slug) => {
        const post = await getBlogPostBySlug(slug);
        let keywordsArray: string[] = [];
        if (Array.isArray(post?.keywords)) {
          keywordsArray = post.keywords as string[];
        } else if (typeof post?.keywords === 'string') {
          keywordsArray = (post.keywords as string).split(',').map((k: string) => k.trim());
        }
        return {
          slug,
          title: post?.title || '',
          description: post?.description || '',
          datePublished: post?.datePublished || '',
          author: post?.author || '',
          imageUrl: post?.imageUrl || '',
          keywords: keywordsArray,
          tocItems: post?.tocItems || [],
        };
      })
  );
  return posts;
}
