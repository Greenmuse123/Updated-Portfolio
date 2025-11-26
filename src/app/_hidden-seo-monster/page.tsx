import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nevada, California, West Coast, USA Tech Solutions | Full Stack, AI, Game, SaaS, Automation, Web, Mobile, Startup, Consulting - Elias Musleh",
  description: "#1 West Coast tech partner: web, mobile, SaaS, AI, automation, game dev, UI/UX, consulting. Serving Las Vegas, Henderson, Los Angeles, San Francisco, San Diego, Seattle, Portland, Silicon Valley, and all USA. Fast, scalable, modern solutions for founders, agencies, and startups.",
  keywords: [
    "full stack development", "web development", "mobile app development", "game development", "unity", "unreal engine", "ai automation", "openai", "gpt", "python automation", "node.js", "react", "next.js", "vue.js", "tailwind css", "ui ux design", "figma", "adobe xd", "tech consulting", "startup mvp", "saas", "custom software", "api integration", "cloud deployment", "aws", "vercel", "mongodb", "postgresql", "no-code", "low-code", "workflow automation", "scraping", "data engineering", "seo", "local seo", "henderson nevada", "las vegas", "nevada", "los angeles", "san francisco", "san diego", "california", "seattle", "washington", "portland", "oregon", "silicon valley", "remote developer", "us developer", "elias musleh", "hire developer west coast", "hire developer usa", "hire ai developer", "hire game developer", "hire web developer", "hire saas developer"
  ],
  openGraph: {
    title: "Elias Musleh: West Coast Tech, AI, Game, SaaS, Web, Mobile, Consulting",
    description: "Elite developer for Nevada, California, West Coast, and USA. AI, SaaS, games, web, automation, consulting. Fast, modern, scalable.",
    url: "https://eliasmusleh.com/_hidden-seo-monster",
    type: "website",
    images: [
      {
        url: "/images/services-hero.svg",
        width: 1200,
        height: 630,
        alt: "Elias Musleh SEO Monster - Nevada, California, West Coast, USA Tech Solutions"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Elias Musleh: West Coast Tech, AI, Game, SaaS, Web, Mobile, Consulting",
    description: "Elite developer for Nevada, California, West Coast, and USA. AI, SaaS, games, web, automation, consulting. Fast, modern, scalable.",
    images: ["/images/services-hero.svg"]
  },
  robots: {
    index: true,
    follow: true
  },
  alternates: {
    canonical: "https://eliasmusleh.com/_hidden-seo-monster"
  }
};

export default function HiddenSeoMonsterPage() {
  return null; // Invisible: no UI, no content, just SEO
}
