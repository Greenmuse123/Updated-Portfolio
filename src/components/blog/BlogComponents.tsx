import Link from 'next/link';
import Image from 'next/image';
import { ReactNode } from 'react';

export interface SchemaBlogPostProps {
  title: string;
  description: string;
  datePublished: string;
  author: string;
  imageUrl: string;
  children: ReactNode;
}

export function SchemaBlogPost({
  title,
  description,
  datePublished,
  author,
  imageUrl,
  children
}: SchemaBlogPostProps) {
  return (
    <article className="blog-content" itemScope itemType="https://schema.org/BlogPosting">
      <meta itemProp="headline" content={title} />
      <meta itemProp="description" content={description} />
      <meta itemProp="author" content={author} />
      <meta itemProp="datePublished" content={datePublished} />
      <meta itemProp="image" content={imageUrl} />
      <span itemProp="publisher" itemScope itemType="https://schema.org/Organization">
        <meta itemProp="name" content="Elias Musleh Web Development" />
        <meta itemProp="logo" itemScope itemType="https://schema.org/ImageObject" />
      </span>
      
      {children}
    </article>
  );
}

export interface BlogHeaderProps {
  title: string;
  subtitle?: string;
  imageUrl?: string;
  imageAlt?: string;
  date?: string;
  readingTime?: number | string; // minutes
}

export function BlogHeader({ title, subtitle, imageUrl, imageAlt, date, readingTime }: BlogHeaderProps) {
  return (
    <header className="mb-8">
      <h1 className="text-4xl md:text-5xl font-bold dark:text-gray-100 mb-4">{title}</h1>
      {subtitle && <p className="text-xl md:text-2xl dark:text-gray-300 mb-2">{subtitle}</p>}
      {(date || readingTime) && (
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
          {date && <span>{new Date(date).toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })}</span>}
          {date && readingTime && <span className="mx-2">•</span>}
          {readingTime && <span>{readingTime} min read</span>}
        </p>
      )}
      {imageUrl && (
        <div className="relative w-full h-[300px] md:h-[400px] mb-6 rounded-xl overflow-hidden">
          <Image 
            src={imageUrl} 
            alt={imageAlt || title} 
            fill 
            className="object-cover" 
            priority 
          />
        </div>
      )}
    </header>
  );
}

export interface BlogSectionProps {
  title: string;
  children: ReactNode;
  id?: string;
}

export function BlogSection({ title, children, id }: BlogSectionProps) {
  return (
    <section className="mb-10" id={id}>
      <h2 className="text-3xl font-bold dark:text-gray-100 mb-4">{title}</h2>
      {children}
    </section>
  );
}

export interface BlogSubsectionProps {
  title: string;
  children: ReactNode;
  id?: string;
}

export function BlogSubsection({ title, children, id }: BlogSubsectionProps) {
  return (
    <div className="mb-6" id={id}>
      <h3 className="text-2xl font-semibold dark:text-gray-200 mb-3">{title}</h3>
      {children}
    </div>
  );
}

import { CTAButton } from './CTAButton';

export function CTASection() {
  return (
    <div className="bg-emerald-50 dark:bg-emerald-900/30 p-6 rounded-xl mb-10 border border-emerald-200 dark:border-emerald-800">
      <h3 className="text-2xl font-bold text-emerald-700 dark:text-emerald-400 mb-3">Need Help Implementing These Solutions?</h3>
      <p className="text-gray-800 dark:text-gray-200 mb-4">
        I specialize in helping Nevada businesses implement custom technology solutions. 
        Let's discuss how I can help your business leverage these strategies for growth.
      </p>
      <CTAButton>Schedule a Free Consultation</CTAButton>
    </div>
  );
}

export interface TableOfContentsProps {
  items: Array<{title: string; id: string; items?: Array<{title: string; id: string}>}>
}

export function TableOfContents({ items }: TableOfContentsProps) {
  return (
    <div className="bg-gray-50 dark:bg-gray-900/60 p-5 rounded-lg mb-8 border border-gray-200 dark:border-gray-800">
      <h3 className="text-lg font-semibold mb-3 text-gray-700 dark:text-gray-200">Table of Contents</h3>
      <ul className="space-y-2">
        {items.map((item) => (
          <li key={item.id}>
            <a 
              href={`#${item.id}`} 
              className="text-emerald-600 dark:text-emerald-400 hover:text-emerald-800 dark:hover:text-emerald-300 transition-colors"
            >
              {item.title}
            </a>
            {item.items && item.items.length > 0 && (
              <ul className="pl-4 mt-1 space-y-1">
                {item.items.map((subitem) => (
                  <li key={subitem.id}>
                    <a 
                      href={`#${subitem.id}`} 
                      className="text-emerald-600 dark:text-emerald-400 hover:text-emerald-800 dark:hover:text-emerald-300 transition-colors text-sm"
                    >
                      {subitem.title}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export interface BlogImageProps {
  src: string;
  alt: string;
  caption?: string;
  width?: number;
  height?: number;
}

export function BlogImage({ src, alt, caption, width = 800, height = 450 }: BlogImageProps) {
  return (
    <figure className="my-6">
      <div className="relative w-full h-auto rounded-lg overflow-hidden">
        <Image 
          src={src} 
          alt={alt} 
          width={width} 
          height={height} 
          className="w-full h-auto" 
        />
      </div>
      {caption && <figcaption className="mt-2 text-sm text-gray-500 dark:text-gray-400 text-center">{caption}</figcaption>}
    </figure>
  );
}

export function BlogList({ children, className, ordered }: { children: ReactNode; className?: string; ordered?: boolean }) {
  return ordered 
    ? <ol className={`list-decimal pl-6 mb-6 space-y-2 ${className || ''}`}>{children}</ol>
    : <ul className={`list-disc pl-6 mb-6 space-y-2 ${className || ''}`}>{children}</ul>;
}

export function BlogListItem({ children }: { children: ReactNode }) {
  return <li className="dark:text-gray-200">{children}</li>;
}

export function BlogParagraph({ children }: { children: ReactNode }) {
  return <p className="dark:text-gray-200 mb-4">{children}</p>;
}

export interface FeaturedQuoteProps {
  text: string;
  author?: string;
}

export function FeaturedQuote({ text, author }: FeaturedQuoteProps) {
  return (
    <blockquote className="border-l-4 border-emerald-400 pl-4 my-6 italic">
      <p className="text-gray-600 dark:text-gray-400">{text}</p>
      {author && <footer className="mt-2 text-sm text-gray-500 dark:text-gray-500">— {author}</footer>}
    </blockquote>
  );
}
