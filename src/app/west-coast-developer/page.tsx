import { Metadata } from "next";
import dynamic from "next/dynamic";

// Dynamically import the client component with SSR enabled
const WestCoastContent = dynamic(() => import('./'), { ssr: true });

// Export the page component - this renders the client component
export default function WestCoastDeveloperPage() {
  return <WestCoastContent />;
}

// Define metadata for SEO
export const metadata: Metadata = {
  title: "West Coast Web, Game, AI, SaaS Developer | Elias Musleh Tech Solutions",
  description: "West Coast's top freelance developer for web, game, AI, SaaS, and UI/UX. Serving startups, agencies, and founders in California, Nevada, Oregon, Washington, and beyond.",
  keywords: [
    "west coast developer", "california web development", "nevada game developer", 
    "ai automation west coast", "saas consulting california", "react developer west coast", 
    "nextjs developer california", "elias musleh", "hire developer west coast", 
    "startup tech california", "custom software west coast"
  ],
  openGraph: {
    title: "West Coast Web, Game, AI, SaaS Developer | Elias Musleh Tech Solutions",
    description: "West Coast's top freelance developer for web, game, AI, SaaS, and UI/UX. Serving startups, agencies, and founders in California, Nevada, Oregon, Washington, and beyond.",
    url: "https://eliasmusleh.com/west-coast-developer",
    type: "website",
    images: [
      {
        url: "/images/services-hero.svg",
        width: 1200,
        height: 630,
        alt: "West Coast Web Game AI SaaS Developer Elias Musleh"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "West Coast Web, Game, AI, SaaS Developer | Elias Musleh Tech Solutions",
    description: "West Coast's top freelance developer for web, game, AI, SaaS, and UI/UX. Serving startups, agencies, and founders in California, Nevada, Oregon, Washington, and beyond.",
    images: ["/images/services-hero.svg"]
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "https://eliasmusleh.com/west-coast-developer" }
};
