// Enhanced structured data for the Services page
export default function ServicesStructuredData() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": ["ProfessionalService", "Person"],
          "name": "Elias Musleh",
          "image": "https://eliasmusleh.com/images/profilepic.jpg",
          "url": "https://eliasmusleh.com/services",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Henderson",
            "addressRegion": "NV",
            "addressCountry": "US"
          },
          "areaServed": [
            "Henderson NV", "Las Vegas NV", "Nevada", "California", "Los Angeles", "San Francisco", "San Diego", "Seattle", "Portland", "Oregon", "Washington", "West Coast", "USA"
          ],
          "description": "Full stack web, game, AI automation, UI/UX design, SaaS, and tech consulting for startups, agencies, and founders.",
          "email": "contact@eliasmusleh.com",
          "telephone": "+1-702-555-1234",
          "sameAs": [
            "https://github.com/Greenmuse123",
            "https://linkedin.com/in/eliasmusleh"
          ],
          "makesOffer": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Full Stack Web Development"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Game Prototyping & Development"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "AI Automation & Tools"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "UI/UX Design"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Tech Consulting & Collaboration"
              }
            }
          ],
          "hasCredential": [
            "Certified Full Stack Developer",
            "Unity Game Developer",
            "AI Automation Specialist"
          ]
        })
      }}
    />
  );
}
