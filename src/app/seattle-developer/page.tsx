import { Metadata } from "next";
import dynamic from "next/dynamic";

// Dynamically import the client component with SSR enabled
const SeattleContent = dynamic(() => import('./index'), { ssr: true });

// Export the page component - this renders the client component
export default function SeattleDeveloperPage() {
  return <SeattleContent />;
}

// Define metadata for SEO
export const metadata: Metadata = {
  title: "Seattle Web, Game, AI, SaaS Developer | Elias Musleh WA Tech Solutions",
  description: "Seattle's trusted freelance developer for web, game, AI, SaaS, and UI/UX. Modern, scalable tech for startups, agencies, and founders in Seattle and the Pacific Northwest.",
  keywords: [
    "seattle developer", "wa web development", "pacific northwest game developer", 
    "ai automation seattle", "saas consulting washington", "react developer seattle", 
    "nextjs developer wa", "elias musleh", "hire developer seattle", 
    "startup tech seattle", "custom software washington"
  ],
  openGraph: {
    title: "Seattle Web, Game, AI, SaaS Developer | Elias Musleh WA Tech Solutions",
    description: "Seattle's trusted freelance developer for web, game, AI, SaaS, and UI/UX. Modern, scalable tech for startups, agencies, and founders in Seattle and the Pacific Northwest.",
    url: "https://eliasmusleh.com/seattle-developer",
    type: "website",
    images: [
      {
        url: "/images/services-hero.svg",
        width: 1200,
        height: 630,
        alt: "Seattle Washington Web Game AI SaaS Developer Elias Musleh"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Seattle Web, Game, AI, SaaS Developer | Elias Musleh WA Tech Solutions",
    description: "Seattle's trusted freelance developer for web, game, AI, SaaS, and UI/UX. Modern, scalable tech for startups, agencies, and founders in Seattle and the Pacific Northwest.",
    images: ["/images/services-hero.svg"]
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "https://eliasmusleh.com/seattle-developer" }
};
