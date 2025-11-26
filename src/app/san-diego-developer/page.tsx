import { Metadata } from "next";
import dynamic from "next/dynamic";

// Dynamically import the client component with SSR enabled
const SanDiegoContent = dynamic(() => import('./'), { ssr: true });

// Export the page component - this renders the client component
export default function SanDiegoDeveloperPage() {
  return <SanDiegoContent />;
}

// Define metadata for SEO
export const metadata: Metadata = {
  title: "San Diego Web, Game, AI, SaaS Developer | Elias Musleh CA Tech Solutions",
  description: "San Diego's expert freelance developer for web, game, AI, SaaS, and UI/UX. Modern, scalable tech for startups, agencies, and founders in Southern California.",
  keywords: [
    "san diego developer", "southern california web development", "california game developer", 
    "ai automation san diego", "saas consulting san diego", "react developer san diego", 
    "nextjs developer san diego", "elias musleh", "hire developer san diego", 
    "startup tech san diego", "custom software california"
  ],
  openGraph: {
    title: "San Diego Web, Game, AI, SaaS Developer | Elias Musleh CA Tech Solutions",
    description: "San Diego's expert freelance developer for web, game, AI, SaaS, and UI/UX. Modern, scalable tech for startups, agencies, and founders in Southern California.",
    url: "https://eliasmusleh.com/san-diego-developer",
    type: "website",
    images: [
      {
        url: "/images/services-hero.svg",
        width: 1200,
        height: 630,
        alt: "San Diego California Web Game AI SaaS Developer Elias Musleh"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "San Diego Web, Game, AI, SaaS Developer | Elias Musleh CA Tech Solutions",
    description: "San Diego's expert freelance developer for web, game, AI, SaaS, and UI/UX. Modern, scalable tech for startups, agencies, and founders in Southern California.",
    images: ["/images/services-hero.svg"]
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "https://eliasmusleh.com/san-diego-developer" }
};
