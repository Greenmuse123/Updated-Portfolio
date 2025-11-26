import { Metadata } from "next";
import dynamic from "next/dynamic";

// Preload the content for faster page rendering
const PortlandContent = dynamic(() => import('./'), { ssr: true });

// Export the page component - this renders the client component
export default function PortlandDeveloperPage() {
  return <PortlandContent />;
}

// Define metadata for SEO with structured data included
export const metadata: Metadata = {
  title: "Portland Web, Game, AI, SaaS Developer | Elias Musleh OR Tech Solutions",
  description: "Portland's trusted freelance developer for web, game, AI, SaaS, and UI/UX. Modern, scalable tech for startups, agencies, and founders in Oregon and the Pacific Northwest.",
  keywords: [
    "portland developer", "oregon web development", "portland game developer", 
    "ai automation portland", "saas consulting portland", "react developer oregon", 
    "nextjs developer portland", "elias musleh", "hire developer portland", 
    "startup tech portland", "custom software oregon"
  ],
  openGraph: {
    title: "Portland Web, Game, AI, SaaS Developer | Elias Musleh OR Tech Solutions",
    description: "Portland's trusted freelance developer for web, game, AI, SaaS, and UI/UX. Modern, scalable tech for startups, agencies, and founders in Oregon and the Pacific Northwest.",
    url: "https://eliasmusleh.com/portland-developer",
    type: "website",
    images: [
      {
        url: "/images/services-hero.svg",
        width: 1200,
        height: 630,
        alt: "Portland Oregon Web Game AI SaaS Developer Elias Musleh"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Portland Web, Game, AI, SaaS Developer | Elias Musleh OR Tech Solutions",
    description: "Portland's trusted freelance developer for web, game, AI, SaaS, and UI/UX. Modern, scalable tech for startups, agencies, and founders in Oregon and the Pacific Northwest.",
    images: ["/images/services-hero.svg"]
  },
  robots: { 
    index: true, 
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    }
  },
  alternates: { 
    canonical: "https://eliasmusleh.com/portland-developer"
  },
  other: {
    "google-site-verification": "yoursiteverificationcode", // Add your verification code if you have one
    "format-detection": "telephone=no"
  }
};
