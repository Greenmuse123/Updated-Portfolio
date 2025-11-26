import React from 'react';
import { Metadata } from 'next';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'Expert Web Development Services | Las Vegas Full Stack Developer',
  description: 'Professional web development services in Las Vegas. Specializing in React, Next.js, Node.js, and modern web applications. Available for projects and full-time opportunities.',
  keywords: 'Las Vegas web developer, full stack developer, React developer, Next.js developer, Node.js developer, web development services, Las Vegas tech jobs',
};

const WebDevelopmentGuide = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Elias Musleh",
    "jobTitle": "Full Stack Developer",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Las Vegas",
      "addressRegion": "NV"
    },
    "knowsAbout": [
      "Web Development",
      "React",
      "Next.js",
      "Node.js",
      "TypeScript",
      "Full Stack Development"
    ],
    "offers": {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": "Web Development Services",
        "description": "Professional web development services including full stack development, custom solutions, and modern web applications."
      }
    },
    "availableAtOrFrom": {
      "@type": "City",
      "name": "Las Vegas"
    }
  };

  return (
    <>
      <Script
        id="web-development-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="max-w-4xl mx-auto px-4 py-8 sm:py-12 lg:py-16">
        <article className="prose prose-lg dark:prose-invert max-w-none">
          <h1>Professional Web Development Services in Las Vegas</h1>
          
          <div className="bg-emerald-50 dark:bg-emerald-900/20 p-6 rounded-lg mb-8">
            <h2 className="text-2xl font-bold mb-4">Looking for Web Development Expertise?</h2>
            <p className="mb-4">I'm a Las Vegas-based full stack developer specializing in modern web applications. Whether you're looking to hire for a project or a full-time position, I bring expertise in React, Next.js, Node.js, and more.</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="/contact" className="inline-block bg-emerald-600 text-white px-6 py-3 rounded-lg hover:bg-emerald-700 transition-colors text-center">
                Hire for a Project
              </a>
              <a href="/contact" className="inline-block bg-emerald-600 text-white px-6 py-3 rounded-lg hover:bg-emerald-700 transition-colors text-center">
                Discuss Full-Time Opportunities
              </a>
            </div>
          </div>

          <section>
            <h2>Full Stack Development Expertise</h2>
            <p>
              With extensive experience in both frontend and backend technologies, I deliver complete web solutions that are scalable, performant, and user-friendly.
            </p>
            <h3>Technical Stack</h3>
            <ul>
              <li><strong>Frontend:</strong> React, Next.js, TypeScript, Tailwind CSS</li>
              <li><strong>Backend:</strong> Node.js, Express, MongoDB, RESTful APIs</li>
              <li><strong>DevOps:</strong> AWS, Docker, CI/CD pipelines</li>
              <li><strong>Additional Skills:</strong> WebSocket, GraphQL, Testing</li>
            </ul>
          </section>

          <section>
            <h2>Project Experience</h2>
            <p>
              I've successfully delivered various web applications, from small business websites to complex enterprise solutions:
            </p>
            <ul>
              <li>E-commerce platforms with custom payment integrations</li>
              <li>Real-time collaboration tools and dashboards</li>
              <li>Progressive Web Apps (PWAs) for mobile experiences</li>
              <li>Custom CMS and content management solutions</li>
            </ul>
          </section>

          <section>
            <h2>Development Approach</h2>
            <p>
              My development process ensures high-quality, maintainable code and successful project delivery:
            </p>
            <ol>
              <li><strong>Planning:</strong> Requirements gathering and architecture design</li>
              <li><strong>Development:</strong> Agile methodology with regular updates</li>
              <li><strong>Testing:</strong> Comprehensive testing and quality assurance</li>
              <li><strong>Deployment:</strong> Smooth launch and ongoing support</li>
            </ol>
          </section>

          <section>
            <h2>Las Vegas Focus</h2>
            <p>
              Specializing in solutions for the unique needs of Las Vegas businesses:
            </p>
            <ul>
              <li>Hospitality and tourism websites</li>
              <li>Event management platforms</li>
              <li>Local business web solutions</li>
              <li>Entertainment industry applications</li>
            </ul>
          </section>

          <section>
            <h2>Why Work With Me?</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                <h3 className="text-xl font-bold mb-2">For Clients</h3>
                <ul>
                  <li>Full stack development expertise</li>
                  <li>Clear communication and updates</li>
                  <li>On-time and on-budget delivery</li>
                  <li>Ongoing support and maintenance</li>
                </ul>
              </div>
              <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                <h3 className="text-xl font-bold mb-2">For Employers</h3>
                <ul>
                  <li>Strong technical foundation</li>
                  <li>Problem-solving skills</li>
                  <li>Team collaboration experience</li>
                  <li>Continuous learning mindset</li>
                </ul>
              </div>
            </div>
          </section>

          <div className="bg-emerald-50 dark:bg-emerald-900/20 p-6 rounded-lg mt-8">
            <h2 className="text-2xl font-bold mb-4">Let's Build Something Great</h2>
            <p className="mb-4">Whether you're looking for a developer for your next project or considering me for a full-time position, I'd love to discuss how I can contribute to your success.</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="/contact" className="inline-block bg-emerald-600 text-white px-6 py-3 rounded-lg hover:bg-emerald-700 transition-colors text-center">
                Start a Project
              </a>
              <a href="/contact" className="inline-block bg-emerald-600 text-white px-6 py-3 rounded-lg hover:bg-emerald-700 transition-colors text-center">
                Discuss Employment
              </a>
            </div>
          </div>
        </article>
      </div>
    </>
  );
};

export default WebDevelopmentGuide; 