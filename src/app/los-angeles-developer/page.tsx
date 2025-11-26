import { Metadata } from "next";
import dynamic from "next/dynamic";

// Dynamically import the client component with SSR enabled
const LosAngelesContent = dynamic(() => import('./'), { ssr: true });

// Export the page component - this renders the client component
export default function LosAngelesDeveloperPage() {
  return <LosAngelesContent />;
}

// Define metadata for SEO
export const metadata: Metadata = {
  title: "Los Angeles Web, Game, AI, SaaS Developer | Elias Musleh CA Tech Solutions",
  description: "LA's go-to freelance developer for web, game, AI automation, SaaS, and UI/UX. Serving Los Angeles startups, agencies, and founders with modern, scalable tech.",
  keywords: [
    "los angeles developer", "la web development", "california game developer", 
    "ai automation la", "saas consulting los angeles", "react developer california", 
    "nextjs developer la", "elias musleh", "hire developer los angeles", 
    "startup tech la", "custom software california"
  ],
  openGraph: {
    title: "Los Angeles Web, Game, AI, SaaS Developer | Elias Musleh CA Tech Solutions",
    description: "LA's go-to freelance developer for web, game, AI automation, SaaS, and UI/UX. Serving Los Angeles startups, agencies, and founders with modern, scalable tech.",
    url: "https://eliasmusleh.com/los-angeles-developer",
    type: "website",
    images: [
      {
        url: "/images/services-hero.svg",
        width: 1200,
        height: 630,
        alt: "Los Angeles California Web Game AI SaaS Developer Elias Musleh"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Los Angeles Web, Game, AI, SaaS Developer | Elias Musleh CA Tech Solutions",
    description: "LA's go-to freelance developer for web, game, AI automation, SaaS, and UI/UX. Serving Los Angeles startups, agencies, and founders with modern, scalable tech.",
    images: ["/images/services-hero.svg"]
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "https://eliasmusleh.com/los-angeles-developer" }
};
