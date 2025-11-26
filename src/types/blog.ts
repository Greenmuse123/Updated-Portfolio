export interface BlogPost {
  // Core metadata
  slug: string;
  title: string;
  description: string;
  keywords: string[]; // Array for easier authoring
  tags?: string[];
  category?: string;
  imageUrl?: string;
  imageAlt?: string;
  datePublished: string;
  canonicalUrl?: string;
  author: string;
  readingTime?: number; // in minutes
  subtitle?: string;
  tocItems?: TocItem[];
  content?: BlogSectionContent[];
  rawContent?: string;
  structuredData?: Record<string, any>;
  draft?: boolean;
}

export interface TocItem {
  id: string;
  title: string;
  items?: TocItem[];
}

export interface BlogSectionContent {
  id: string;
  title: string;
  paragraphs?: string[];
  list?: {
    ordered?: boolean;
    items: string[];
  };
  subsections?: BlogSubsectionContent[];
}

export interface BlogSubsectionContent {
  id: string;
  title: string;
  paragraphs?: string[];
}
