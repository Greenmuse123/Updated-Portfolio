'use client';

import Link from 'next/link';
import { useTheme } from '@/context/ThemeContext';

interface Article {
  title: string;
  url: string;
  description: string;
  category?: string;
}

interface RelatedArticlesProps {
  articles: Article[];
  title?: string;
}

export function RelatedArticles({ articles, title = "📚 Related Articles" }: RelatedArticlesProps) {
  const { theme } = useTheme();
  
  return (
    <div className={`my-12 p-8 rounded-xl border-2 ${
      theme === 'dark' 
        ? 'bg-gradient-to-br from-emerald-900/30 to-teal-900/30 border-emerald-700/50' 
        : 'bg-gradient-to-br from-emerald-50 to-teal-50 border-emerald-200'
    }`}>
      <h3 className={`text-2xl font-bold mb-6 flex items-center gap-3 ${
        theme === 'dark' ? 'text-emerald-300' : 'text-emerald-900'
      }`}>
        <span className="text-3xl">📚</span>
        {title}
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {articles.map((article, index) => (
          <Link 
            key={article.url}
            href={article.url}
            className={`group p-5 rounded-lg border transition-all duration-200 hover:shadow-lg ${
              theme === 'dark'
                ? 'bg-gray-800/80 border-gray-700 hover:border-emerald-500 hover:bg-gray-800'
                : 'bg-white border-gray-200 hover:border-emerald-500 hover:shadow-emerald-100'
            }`}
          >
            {article.category && (
              <span className={`inline-block px-3 py-1 text-xs font-semibold rounded-full mb-3 ${
                theme === 'dark'
                  ? 'bg-emerald-900/50 text-emerald-300'
                  : 'bg-emerald-100 text-emerald-700'
              }`}>
                {article.category}
              </span>
            )}
            
            <h4 className={`font-bold text-lg mb-2 group-hover:text-emerald-600 transition-colors ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>
              {article.title}
            </h4>
            
            <p className={`text-sm leading-relaxed ${
              theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
            }`}>
              {article.description}
            </p>
            
            <div className={`mt-3 text-sm font-semibold flex items-center gap-2 ${
              theme === 'dark' ? 'text-emerald-400' : 'text-emerald-600'
            }`}>
              Read More 
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </div>
          </Link>
        ))}
      </div>
      
      <div className={`mt-6 pt-6 border-t ${
        theme === 'dark' ? 'border-gray-700' : 'border-gray-200'
      }`}>
        <p className={`text-sm text-center ${
          theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
        }`}>
          💡 Want to implement AI lead generation for your business?{' '}
          <Link href="tel:+17027738839" className="font-bold text-emerald-600 hover:text-emerald-700 hover:underline">
            Call (702) 773-8839
          </Link>
          {' '}or{' '}
          <Link href="mailto:elias@eliasmusleh.com" className="font-bold text-emerald-600 hover:text-emerald-700 hover:underline">
            email me
          </Link>
        </p>
      </div>
    </div>
  );
}

export default RelatedArticles;
