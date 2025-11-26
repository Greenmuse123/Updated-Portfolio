import BlogLayout from '@/components/blog/BlogLayout';
import { BlogHeader, TableOfContents, BlogSection, BlogSubsection, BlogParagraph, BlogList, BlogListItem, SchemaBlogPost } from '@/components/blog/BlogComponents';
import { CTAButton } from '@/components/blog/CTAButton';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getBlogPostBySlug, getAllBlogSlugs } from '@/utils/blog-utils';
import { BlogSectionContent, BlogSubsectionContent } from '@/types/blog';

// Generate metadata dynamically based on the blog post content
export async function generateMetadata({ params }: any): Promise<Metadata> {
  const slug = params?.slug;
  

  if (!slug) {
    return {
      title: 'Blog',
      description: 'Latest articles and insights.',
    };
  }

  const post = await getBlogPostBySlug(slug);

  if (!post) {
    return {
      title: 'Blog Post Not Found',
      description: 'The requested blog post could not be found.',
    };
  }

  return {
    title: post.title,
    description: post.description,
    keywords: post.keywords,
    openGraph: {
      title: post.title,
      description: post.description,
      images: post.imageUrl ? [{ url: post.imageUrl }] : [],
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
      images: post.imageUrl ? [post.imageUrl] : [],
    },
  };
}

// Generate static params for all blog posts
export async function generateStaticParams() {
  const slugs = await getAllBlogSlugs();
  return slugs.map(slug => ({ slug }));
}

export default async function BlogPost({ params }: any) {
  const slug = params?.slug;
  

  if (!slug) {
    notFound();
  }

  const post = await getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  // Function to render blog content based on structure in MDX
  const renderBlogContent = (content: any, toc: any) => {
      // Prefer explicit content field; fallback to toc structure if content missing
  if ((!content || content.length === 0) && toc && toc.length > 0) {
    content = toc; // Use tocItems for rendering
  }
  if (!content) return null;
    return content.map((section: any) => (
      <BlogSection key={section.id} id={section.id} title={section.title}>
        {section.paragraphs && section.paragraphs.map((para: string, index: number) => (
          <BlogParagraph key={index}>{para}</BlogParagraph>
        ))}
        {section.list && section.list.items && (
          <BlogList>
            {section.list.items.map((item: string, index: number) => (
              <BlogListItem key={index}>{item}</BlogListItem>
            ))}
          </BlogList>
        )}
        {section.subsections && section.subsections.map((subsection: any) => (
          <BlogSubsection key={subsection.id} id={subsection.id} title={subsection.title}>
            {subsection.paragraphs && subsection.paragraphs.map((para: string, index: number) => (
              <BlogParagraph key={index}>{para}</BlogParagraph>
            ))}
          </BlogSubsection>
        ))}
      </BlogSection>
    ));
  };

  return (
    <BlogLayout>
      <SchemaBlogPost
        title={post.title}
        description={post.description}
        imageUrl={post.imageUrl || ''}
        datePublished={post.datePublished}
        author={post.author}
      >
        <BlogHeader title={post.title} subtitle={post.subtitle} date={post.datePublished} readingTime={post.readingTime} />
        <TableOfContents items={post.tocItems || []} />
        {renderBlogContent(post.content, post.tocItems)}
      </SchemaBlogPost>
    </BlogLayout>
  );
}
