import { ThemeProvider } from '@/context/ThemeContext';
import { siteMetadata } from './metadata';
import './globals.css';
import { Metadata } from 'next';
import { Inter } from "next/font/google";
import Layout from "@/components/Layout";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(siteMetadata.siteUrl),
  title: {
    default: siteMetadata.title,
    template: `%s | ${siteMetadata.title}`,
  },
  description: siteMetadata.description,
  keywords: siteMetadata.keywords,
  authors: [{ name: siteMetadata.author }],
  creator: siteMetadata.author,
  openGraph: {
    ...siteMetadata.openGraph,
    images: [
      {
        url: '/images/profilepic.jpg',
        width: 800,
        height: 600,
        alt: 'Elias Musleh - Full Stack Developer',
      },
    ],
  },
  icons: {
    icon: [
      { url: '/favicon/favicon.ico', sizes: 'any' },
      { url: '/favicon/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon/favicon-96x96.png', sizes: '96x96', type: 'image/png' }
    ],
    shortcut: '/favicon/favicon.ico',
    apple: [
      { url: '/favicon/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }
    ],
    other: [
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '192x192',
        url: '/favicon/web-app-manifest-192x192.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '512x512',
        url: '/favicon/web-app-manifest-512x512.png',
      },
    ],
  },
  twitter: {
    ...siteMetadata.twitter,
    images: ['/images/profilepic.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Google Ads Conversion Tracking Tag */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-17302972924"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-17302972924');
              
              /* Event snippet for Book appointment conversion */
              function gtag_report_conversion(url) {
                var callback = function () {
                  if (typeof(url) != 'undefined') {
                    window.location = url;
                  }
                };
                gtag('event', 'conversion', {
                  'send_to': 'AW-17302972924/QpyACOzRmOoaEPzT8bpA',
                  'event_callback': callback
                });
                return false;
              }
              
              /* Event snippet for Phone Call conversion */
              function gtag_report_phone_conversion() {
                gtag('event', 'conversion', {
                  'send_to': 'AW-17302972924/XXXXXXXXXX'
                });
                return false;
              }
              
              /* Event snippet for Email Click conversion */
              function gtag_report_email_conversion() {
                gtag('event', 'conversion', {
                  'send_to': 'AW-17302972924/XXXXXXXXXX'
                });
                return false;
              }
            `
          }}
        />
        {/* Structured Data for Person */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Elias Musleh',
              url: siteMetadata.siteUrl,
              image: `${siteMetadata.siteUrl}/images/profilepic.jpg`,
              sameAs: [
                'https://www.linkedin.com/in/elias-musleh-013b36205',
                'https://github.com/Greenmuse123'
              ],
              jobTitle: 'Full Stack Developer',
              worksFor: {
                '@type': 'Organization',
                name: 'Freelance',
                areaServed: {
                  '@type': 'City',
                  name: 'Las Vegas',
                  containedIn: {
                    '@type': 'State',
                    name: 'Nevada'
                  }
                }
              },
              description: 'Full Stack Developer specializing in React, Next.js, and modern web development in Las Vegas, Nevada.',
              knowsAbout: ['Web Development', 'React', 'Next.js', 'TypeScript', 'Node.js', 'MongoDB', 'Full Stack Development']
            })
          }}
        />
        {/* Structured Data for WebSite */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              name: siteMetadata.title,
              url: siteMetadata.siteUrl,
              description: siteMetadata.description,
              author: {
                '@type': 'Person',
                name: siteMetadata.author
              },
              keywords: siteMetadata.keywords.join(', ')
            })
          }}
        />
        {/* Comprehensive Favicon Implementation */}
        <link rel="icon" href="/favicon/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/favicon/apple-touch-icon.png" />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link rel="icon" type="image/png" sizes="96x96" href="/favicon/favicon-96x96.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/favicon/web-app-manifest-192x192.png" />
        <link rel="icon" type="image/png" sizes="512x512" href="/favicon/web-app-manifest-512x512.png" />
        
        {/* Theme color for mobile browsers */}
        <meta name="theme-color" content="#10b981" />
        <meta name="msapplication-TileColor" content="#10b981" />
        
        {/* Additional PWA meta tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Elias Musleh" />
        {/* Canonical tags are now handled correctly through Next.js metadata in each page */}
      </head>
      <body className={`${inter.className} min-h-screen transition-colors duration-200`}>
        <ThemeProvider>
          <Layout>
            {children}
          </Layout>
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
