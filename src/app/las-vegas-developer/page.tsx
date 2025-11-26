import { Metadata } from "next";
import dynamic from "next/dynamic";

// Dynamically import the client component with SSR enabled
const LasVegasContent = dynamic(() => import('./'), { ssr: true });

export const metadata: Metadata = {
  title: "Las Vegas Web, Game, AI, SaaS Developer | Elias Musleh Nevada Tech Solutions",
  description: "Top-rated Las Vegas and Henderson, NV developer. Full stack web, game, AI automation, UI/UX, SaaS and consulting for startups and agencies. Nevada’s go-to tech expert.",
  keywords: [
    "las vegas developer", "henderson nevada developer", "nevada web development", "las vegas game developer", "ai automation nevada", "saas consulting las vegas", "react developer las vegas", "nextjs developer nevada", "elias musleh", "hire developer las vegas", "startup tech las vegas", "custom software nevada"
  ],
  openGraph: {
    title: "Las Vegas Web, Game, AI, SaaS Developer | Elias Musleh Nevada Tech Solutions",
    description: "Top-rated Las Vegas and Henderson, NV developer. Full stack web, game, AI automation, UI/UX, SaaS and consulting for startups and agencies. Nevada’s go-to tech expert.",
    url: "https://eliasmusleh.com/las-vegas-developer",
    type: "website",
    images: [
      {
        url: "/images/services-hero.svg",
        width: 1200,
        height: 630,
        alt: "Las Vegas Nevada Web Game AI SaaS Developer Elias Musleh"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Las Vegas Web, Game, AI, SaaS Developer | Elias Musleh Nevada Tech Solutions",
    description: "Top-rated Las Vegas and Henderson, NV developer. Full stack web, game, AI automation, UI/UX, SaaS and consulting for startups and agencies. Nevada’s go-to tech expert.",
    images: ["/images/services-hero.svg"]
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "https://eliasmusleh.com/las-vegas-developer" }
};

// Export the page component - this renders the client component
export default function LasVegasDeveloperPage() {
  return <LasVegasContent />;
}
