// FAQ structured data for SEO-rich snippets
export default function ServicesFAQSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "What services does Elias Musleh offer?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Full stack web development, game prototyping & development, AI automation & tools, UI/UX design, and tech consulting for startups, agencies, and founders."
              }
            },
            {
              "@type": "Question",
              "name": "Which locations does Elias serve?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Based in Henderson, Nevada, Elias serves clients across the West Coast: Las Vegas, Los Angeles, San Francisco, San Diego, Portland, Seattle, and remotely across the USA."
              }
            },
            {
              "@type": "Question",
              "name": "What technologies does Elias specialize in?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "React, Next.js, Node.js, Python, Unity, OpenAI, Figma, AWS, Vercel, MongoDB, PostgreSQL, and more."
              }
            },
            {
              "@type": "Question",
              "name": "How can I hire Elias Musleh?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Contact via the website’s form or email for a free consultation and project quote."
              }
            },
            {
              "@type": "Question",
              "name": "Does Elias work with startups and agencies?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, Elias partners with startups, agencies, and founders to deliver modern, scalable tech solutions."
              }
            }
          ]
        })
      }}
    />
  );
}
