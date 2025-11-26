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
  
  // Create canonical URL
  const canonicalUrl = `https://eliasmusleh.com${slug ? `/${slug}` : ''}`;
  
  // Ensure image URL is absolute
  const absoluteImageUrl = imageUrl.startsWith('http') 
    ? imageUrl 
    : `https://eliasmusleh.com${imageUrl}`;

  return {
    title: fullTitle,
    description,
    keywords: keywords.join(', '),
    openGraph: {
      title: title, // Keep OG title slightly shorter, without site name
      description,
      url: canonicalUrl,
      type: 'article',
      publishedTime: publishedDate,
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
      title: title,
      description,
      images: [absoluteImageUrl]
    },
    alternates: {
      canonical: canonicalUrl
    }
  };
}
