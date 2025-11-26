import { Metadata } from "next";

const title = "West Coast Tech Services | Elias Musleh – Full Stack, Game, AI, Design & Consulting in Nevada, California, Oregon, Washington";
const description = "Based in Henderson, Nevada and serving all of the West Coast: web, game, AI, design, and consulting for startups, agencies, and founders in Las Vegas, Los Angeles, San Francisco, San Diego, Portland, Seattle, and beyond.";
const keywords = [
  "full stack development",
  "web development",
  "game development",
  "game prototyping",
  "ai automation",
  "ai tools",
  "ui ux design",
  "tech consulting",
  "next.js",
  "react",
  "node.js",
  "freelance developer",
  "startup tech",
  "custom software",
  "automation",
  "MVP",
  "SaaS",
  "Las Vegas developer",
  "Henderson Nevada developer",
  "Nevada tech",
  "West Coast developer",
  "California developer",
  "Los Angeles developer",
  "San Francisco developer",
  "San Diego developer",
  "Portland developer",
  "Seattle developer",
  "remote developer",
  "elias musleh"
];

export const metadata: Metadata = {
  title,
  description,
  keywords,
  openGraph: {
    title,
    description,
    url: "https://eliasmusleh.com/services",
    type: "website",
    images: [
      {
        url: "/images/services-hero.svg",
        width: 1200,
        height: 630,
        alt: "Elias Musleh Services – Full Stack, Game, AI, Design, Consulting, West Coast, Nevada, California, Oregon, Washington"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/images/services-hero.svg"]
  },
  robots: {
    index: true,
    follow: true
  },
  alternates: {
    canonical: "https://eliasmusleh.com/services"
  }
};
