import { Metadata } from "next";
import dynamic from "next/dynamic";

// Dynamically import the client component with SSR enabled
const SanFranciscoContent = dynamic(() => import('./'), { ssr: true });

// Export the page component - this renders the client component
export default function SanFranciscoDeveloperPage() {
  return <SanFranciscoContent />;
}

// Define metadata for SEO
export const metadata: Metadata = {
  title: "San Francisco Web, Game, AI, SaaS Developer | Elias Musleh CA Tech Solutions",
  description: "San Francisco's trusted freelance developer for web, game, AI, SaaS, and UI/UX. Modern, scalable tech for Bay Area startups, agencies, and founders.",
  keywords: [
    "san francisco developer", "bay area web development", "california game developer", 
    "ai automation san francisco", "saas consulting sf", "react developer bay area", 
    "nextjs developer san francisco", "elias musleh", "hire developer san francisco", 
    "startup tech sf", "custom software california"
  ],
  openGraph: {
    title: "San Francisco Web, Game, AI, SaaS Developer | Elias Musleh CA Tech Solutions",
    description: "San Francisco's trusted freelance developer for web, game, AI, SaaS, and UI/UX. Modern, scalable tech for Bay Area startups, agencies, and founders.",
    url: "https://eliasmusleh.com/san-francisco-developer",
    type: "website",
    images: [
      {
        url: "/images/services-hero.svg",
        width: 1200,
        height: 630,
        alt: "San Francisco California Web Game AI SaaS Developer Elias Musleh"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "San Francisco Web, Game, AI, SaaS Developer | Elias Musleh CA Tech Solutions",
    description: "San Francisco's trusted freelance developer for web, game, AI, SaaS, and UI/UX. Modern, scalable tech for Bay Area startups, agencies, and founders.",
    images: ["/images/services-hero.svg"]
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "https://eliasmusleh.com/san-francisco-developer" }
};
