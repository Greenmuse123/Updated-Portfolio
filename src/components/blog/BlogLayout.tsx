import { ReactNode } from 'react';
import Link from 'next/link';
import { CTASection } from './BlogComponents';
import { CTAButton } from './CTAButton';

interface BlogLayoutProps {
  children: ReactNode;
  showTableOfContents?: boolean;
  showCTA?: boolean;
}

export default function BlogLayout({ 
  children, 
  showTableOfContents = true,
  showCTA = true 
}: BlogLayoutProps) {
  return (
    <main className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
      <div className="mb-8">
        <Link 
          href="/blog" 
          className="text-emerald-600 dark:text-emerald-400 hover:text-emerald-800 dark:hover:text-emerald-300 flex items-center gap-2"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
          Back to All Articles
        </Link>
      </div>

      {children}

      {showCTA && <CTASection />}
      
      <div className="mt-12 pt-6 border-t border-gray-200 dark:border-gray-800">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <h4 className="text-lg font-semibold text-emerald-700 dark:text-emerald-400 mb-1">Need expert technology guidance?</h4>
            <p className="text-gray-600 dark:text-gray-300">I help Nevada businesses implement the right tech solutions.</p>
          </div>
          <CTAButton>Contact Me</CTAButton>
        </div>
      </div>
    </main>
  );
}
