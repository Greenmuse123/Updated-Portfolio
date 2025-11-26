import { Metadata } from 'next';

interface BlogMetadataParams {
  title: string; // Main title of the blog post
  description: string; // Full description for SEO
  keywords: string[]; // SEO keywords
  slug: string; // URL slug, e.g., "ai-integration-nevada-business-guide"
  imageUrl?: string; // Path to featured image, defaults to a placeholder
  imageAlt?: string; // Alt text for the featured image
  publishedDate?: string; // ISO date string
}

/**
 * Creates consistent Next.js Metadata for blog posts with proper SEO attributes
 */
export const createBlogMetadata = ({
  title,
  description,
  keywords,
  slug,
  imageUrl = '/images/blog/default-post.jpg',
  imageAlt,
  publishedDate = new Date().toISOString().split('T')[0],
}: BlogMetadataParams): Metadata => {
  // Ensure title ends with site name for consistency
  const fullTitle = title.includes(' | Elias Musleh') 
    ? title 
    : `${title} | Elias Musleh`;
  
  // Create canonical URL with /blog/ prefix for blog posts
  const canonicalUrl = slug.startsWith('blog/') 
    ? `https://eliasmusleh.com/${slug}`
    : `https://eliasmusleh.com/blog/${slug}`;
  
  // Ensure image URL is absolute - fallback to default OG image if not provided
  const absoluteImageUrl = imageUrl.startsWith('http') 
    ? imageUrl 
    : imageUrl
    ? `https://eliasmusleh.com${imageUrl}`
    : 'https://eliasmusleh.com/images/services-hero.svg';

  return {
    title: fullTitle,
    description,
    keywords: keywords.join(', '),
    metadataBase: new URL('https://eliasmusleh.com'),
    openGraph: {
      title: title, // Keep OG title slightly shorter, without site name
      description,
      url: canonicalUrl,
      siteName: 'Elias Musleh | Full Stack Developer',
      type: 'article',
      publishedTime: publishedDate,
      locale: 'en_US',
      images: [
        {
          url: absoluteImageUrl,
          width: 1200,
          height: 630,
          alt: imageAlt || title
        }
      ]
    },
    twitter: {
      card: 'summary_large_image',
      site: '@eliasmusleh',
      creator: '@eliasmusleh',
      title: title,
      description,
      images: [absoluteImageUrl]
    },
    alternates: {
      canonical: canonicalUrl
    },
    authors: [{ name: 'Elias Musleh' }],
    category: 'Technology'
  };
}
