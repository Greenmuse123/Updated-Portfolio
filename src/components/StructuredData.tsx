import React from 'react';

interface BreadcrumbItem {
  name: string;
  item: string;
}

interface BreadcrumbListProps {
  items: BreadcrumbItem[];
}

export function BreadcrumbStructuredData({ items }: BreadcrumbListProps) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': items.map((item, index) => ({
      '@type': 'ListItem',
      'position': index + 1,
      'name': item.name,
      'item': item.item
    }))
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}

interface WebsiteStructuredDataProps {
  name: string;
  url: string;
  description: string;
  author: {
    name: string;
    url?: string;
  };
}

export function WebsiteStructuredData({ name, url, description, author }: WebsiteStructuredDataProps) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    'name': name,
    'url': url,
    'description': description,
    'author': {
      '@type': 'Person',
      'name': author.name,
      'url': author.url || url
    },
    'potentialAction': {
      '@type': 'SearchAction',
      'target': {
        '@type': 'EntryPoint',
        'urlTemplate': `${url}/blog?q={search_term_string}`
      },
      'query-input': 'required name=search_term_string'
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}

interface ProfilePageStructuredDataProps {
  name: string;
  url: string;
  image: string;
  sameAs: string[];
  jobTitle: string;
  description: string;
}

export function ProfilePageStructuredData({ name, url, image, sameAs, jobTitle, description }: ProfilePageStructuredDataProps) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    'mainEntity': {
      '@type': 'Person',
      'name': name,
      'url': url,
      'image': image,
      'sameAs': sameAs,
      'jobTitle': jobTitle,
      'description': description
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}

interface BlogPostingListStructuredDataProps {
  posts: Array<{
    headline: string;
    url: string;
    datePublished: string;
    author: string;
    description: string;
    image?: string;
  }>;
}

export function BlogPostingListStructuredData({ posts }: BlogPostingListStructuredDataProps) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    'itemListElement': posts.map((post, index) => ({
      '@type': 'ListItem',
      'position': index + 1,
      'item': {
        '@type': 'BlogPosting',
        'headline': post.headline,
        'url': post.url,
        'datePublished': post.datePublished,
        'author': {
          '@type': 'Person',
          'name': post.author
        },
        'description': post.description,
        'image': post.image || 'https://eliasmusleh.com/images/services-hero.svg'
      }
    }))
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
