import { Metadata } from "next";

export const metadata: Metadata = {
  title: "SaaS Consulting West Coast | Elias Musleh – Startup, MVP, Automation, Growth",
  description: "West Coast SaaS consulting for startups, founders, and agencies. MVP development, automation, scaling, and growth strategies from Nevada, California, Oregon, and Washington.",
  keywords: [
    "saas consulting", "west coast saas", "startup consulting california", "mvp development west coast", "automation consulting", "growth hacking saas", "elias musleh", "hire saas consultant", "scaling startups west coast"
  ],
  openGraph: {
    title: "SaaS Consulting West Coast | Elias Musleh – Startup, MVP, Automation, Growth",
    description: "West Coast SaaS consulting for startups, founders, and agencies. MVP development, automation, scaling, and growth strategies from Nevada, California, Oregon, and Washington.",
    url: "https://eliasmusleh.com/saas-consulting-west-coast",
    type: "website",
    images: [
      {
        url: "/images/services-hero.svg",
        width: 1200,
        height: 630,
        alt: "SaaS Consulting West Coast Elias Musleh"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "SaaS Consulting West Coast | Elias Musleh – Startup, MVP, Automation, Growth",
    description: "West Coast SaaS consulting for startups, founders, and agencies. MVP development, automation, scaling, and growth strategies from Nevada, California, Oregon, and Washington.",
    images: ["/images/services-hero.svg"]
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "https://eliasmusleh.com/saas-consulting-west-coast" }
};

export default function SaasConsultingWestCoastSEO() {
  return null;
}
