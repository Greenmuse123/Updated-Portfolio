'use client';

import { ReactNode } from 'react';

interface ContactLinkProps {
  children: ReactNode;
}

export function ContactLink({ children }: ContactLinkProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    
    // Track the conversion with Google Ads if available
    if (typeof window !== 'undefined') {
      // Track the click event
      if (window.gtag) {
        window.gtag('event', 'blog_contact_click', {
          'event_category': 'engagement',
          'event_label': 'blog_post_contact_link'
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
    <a href="/" onClick={handleClick}>
      {children}
    </a>
  );
}
