'use client';

import { ReactNode } from 'react';

export function CTAButton({ children }: { children: ReactNode }) {
  const handleClick = (e: React.MouseEvent<HTMLSpanElement>) => {
    e.preventDefault();
    
    // Track the conversion with Google Ads if available
    if (typeof window !== 'undefined') {
      // Track the click event
      if (window.gtag) {
        window.gtag('event', 'blog_cta_click', {
          'event_category': 'engagement',
          'event_label': 'blog_cta_button'
        });
      }
      
      // Report conversion if the function is available
      if (typeof window.gtag_report_conversion === 'function') {
        window.gtag_report_conversion();
      }
    }
    
    // Navigate to homepage with contact anchor
    window.location.href = '/#contact';
  };

  return (
    <span 
      onClick={handleClick}
      className="inline-block bg-emerald-600 hover:bg-emerald-700 text-white py-2 px-6 rounded-lg font-medium transition-colors duration-200 cursor-pointer"
    >
      {children}
    </span>
  );
}
