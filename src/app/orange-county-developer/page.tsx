import { Metadata } from "next";
import dynamic from "next/dynamic";

// Dynamically import the client component with SSR enabled
const OrangeCountyContent = dynamic(() => import('./'), { ssr: true });

// Export the page component - this renders the client component
export default function OrangeCountyDeveloperPage() {
  return <OrangeCountyContent />;
}

// Define metadata for SEO
export const metadata: Metadata = {
  title: "Orange County Web, Game, AI, SaaS Developer | Elias Musleh OC Tech Solutions",
  description: "Orange County's trusted freelance developer for web, game, AI, SaaS, and UI/UX. Modern, scalable tech for startups, agencies, and founders in Southern California.",
  keywords: [
    "orange county developer", "oc web development", "southern california game developer", 
    "ai automation orange county", "saas consulting oc", "react developer orange county", 
    "nextjs developer oc", "elias musleh", "hire developer orange county", 
    "startup tech oc", "custom software orange county"
  ],
  openGraph: {
    title: "Orange County Web, Game, AI, SaaS Developer | Elias Musleh OC Tech Solutions",
    description: "Orange County's trusted freelance developer for web, game, AI, SaaS, and UI/UX. Modern, scalable tech for startups, agencies, and founders in Southern California.",
    url: "https://eliasmusleh.com/orange-county-developer",
    type: "website",
    images: [
      {
        url: "/images/services-hero.svg",
        width: 1200,
        height: 630,
        alt: "Orange County California Web Game AI SaaS Developer Elias Musleh"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Orange County Web, Game, AI, SaaS Developer | Elias Musleh OC Tech Solutions",
    description: "Orange County's trusted freelance developer for web, game, AI, SaaS, and UI/UX. Modern, scalable tech for startups, agencies, and founders in Southern California.",
    images: ["/images/services-hero.svg"]
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "https://eliasmusleh.com/orange-county-developer" }
};