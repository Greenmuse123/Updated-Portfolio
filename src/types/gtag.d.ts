// Type declarations for Google Analytics gtag

declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
    // Google Ads conversion tracking functions
    gtag_report_conversion: (url?: string) => boolean;
    gtag_report_phone_conversion: () => boolean;
    gtag_report_email_conversion: () => boolean;
  }
}

// Make this file a module to ensure it's properly processed
export {};
