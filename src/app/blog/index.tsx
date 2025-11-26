import BlogLayout from '@/components/blog/BlogLayout';
import { BlogHeader, BlogSection, BlogParagraph, BlogList, BlogListItem } from '@/components/blog/BlogComponents';
import { CTAButton } from '@/components/blog/CTAButton';
import { Metadata } from 'next';
import { getAllBlogPosts } from '@/utils/blog-utils';

export const metadata: Metadata = {
  title: 'Blog | Elias Musleh',
  description: 'Explore insightful articles on web development, SEO, and technology solutions for businesses in Las Vegas and beyond.',
  keywords: 'web development blog, SEO tips, Las Vegas business tech, GreenMuse blog',
  alternates: {
    canonical: 'https://eliasmusleh.com/blog',
  },
  openGraph: {
    title: 'Blog | Elias Musleh',
    description: 'Explore insightful articles on web development, SEO, and technology solutions for businesses in Las Vegas and beyond.',
    url: 'https://eliasmusleh.com/blog',
    siteName: 'Elias Musleh',
    images: [
      {
        url: 'https://eliasmusleh.com/images/blog-hero.jpg',
        width: 1200,
        height: 630,
        alt: 'GreenMuse Blog',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog | Elias Musleh',
    description: 'Explore insightful articles on web development, SEO, and technology solutions for businesses in Las Vegas and beyond.',
    images: ['https://eliasmusleh.com/images/blog-hero.jpg'],
    site: '@GreenMuseDev',
  },
};

export default async function BlogIndex() {
  const posts = await getAllBlogPosts();

  return (
    <BlogLayout>
      <BlogHeader
        title="Blog | Elias Musleh"
        subtitle="Insights on Web Development, SEO, and Tech Solutions for Las Vegas Businesses"
      />
      <BlogSection id="latest-posts" title="Latest Posts">
        <BlogParagraph>
          Dive into our collection of articles designed to help businesses thrive in the digital landscape. From SEO strategies to tech solutions, we cover it all.
        </BlogParagraph>
        {posts.length > 0 ? (
          <BlogList>
            {posts.map(post => (
              <BlogListItem key={post.slug}>
                <a href={`/blog/${post.slug}`} className="text-blue-600 dark:text-blue-400 hover:underline">
                  {post.title}
                </a> - {post.datePublished}
              </BlogListItem>
            ))}
          </BlogList>
        ) : (
          <BlogParagraph>No blog posts available at the moment. Check back soon for updates!</BlogParagraph>
        )}
      </BlogSection>
      <BlogSection id="contact" title="Have a Topic in Mind?">
        <BlogParagraph>
          Want to suggest a blog topic or discuss a project? <CTAButton>Contact Elias Musleh</CTAButton> for a personalized consultation.
        </BlogParagraph>
      </BlogSection>
    </BlogLayout>
  );
}
