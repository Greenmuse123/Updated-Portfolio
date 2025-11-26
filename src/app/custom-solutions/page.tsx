import React from 'react';
import { Metadata } from 'next';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'Custom Software Development Services | Las Vegas Software Developer',
  description: 'Expert custom software development services in Las Vegas. Specializing in FOV calculators, logistics managers, and tailored business solutions. Contact for a free consultation.',
  keywords: 'Las Vegas software developer, custom software development, business automation, FOV calculator, logistics manager, Las Vegas tech services, custom solutions',
};

const CustomSolutions = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Custom Software Development Services",
    "description": "Expert custom software development services in Las Vegas, specializing in business automation, FOV calculators, and logistics management solutions.",
    "provider": {
      "@type": "Person",
      "name": "Elias Musleh",
      "jobTitle": "Full Stack Developer",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Las Vegas",
        "addressRegion": "NV"
      }
    },
    "areaServed": {
      "@type": "City",
      "name": "Las Vegas"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Custom Development Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Custom Business Solutions"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "FOV Calculator Development"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Logistics Management Systems"
          }
        }
      ]
    }
  };

  return (
    <>
      <Script
        id="custom-solutions-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="max-w-4xl mx-auto px-4 py-8 sm:py-12 lg:py-16">
        <article className="prose prose-lg dark:prose-invert max-w-none">
          <h1>Custom Software Development Services in Las Vegas</h1>
          
          <div className="bg-emerald-50 dark:bg-emerald-900/20 p-6 rounded-lg mb-8">
            <h2 className="text-2xl font-bold mb-4">Looking for Custom Software Solutions?</h2>
            <p className="mb-4">I specialize in creating tailored software solutions for businesses in Las Vegas and beyond. Whether you need a custom FOV calculator, logistics manager, or any other specialized tool, I can help bring your vision to life.</p>
            <a href="/contact" className="inline-block bg-emerald-600 text-white px-6 py-3 rounded-lg hover:bg-emerald-700 transition-colors">
              Get a Free Consultation
            </a>
          </div>

          <section>
            <h2>Specialized Services for Las Vegas Businesses</h2>
            <p>
              As a Las Vegas-based developer, I understand the unique challenges faced by local businesses in the hospitality, entertainment, and tourism industries. My custom solutions are designed to address these specific needs.
            </p>
            <h3>Popular Services</h3>
            <ul>
              <li><strong>FOV Calculators:</strong> Custom field of view calculators for gaming and simulation applications</li>
              <li><strong>Logistics Systems:</strong> Tailored inventory and supply chain management solutions</li>
              <li><strong>Business Automation:</strong> Custom CRM and workflow automation tools</li>
              <li><strong>Data Visualization:</strong> Specialized tools for data analysis and presentation</li>
            </ul>
          </section>

          <section>
            <h2>Why Choose Custom Development?</h2>
            <p>
              Off-the-shelf solutions often fall short of meeting specific business requirements. Custom software development provides:
            </p>
            <ul>
              <li>Perfect fit for your business processes</li>
              <li>Competitive advantage through unique features</li>
              <li>Scalability as your business grows</li>
              <li>Integration with existing systems</li>
            </ul>
          </section>

          <section>
            <h2>Development Process</h2>
            <p>
              I follow a proven process to ensure your custom solution meets all requirements and expectations:
            </p>
            <ol>
              <li><strong>Discovery:</strong> Understanding your specific needs and challenges</li>
              <li><strong>Planning:</strong> Creating a detailed project roadmap</li>
              <li><strong>Development:</strong> Building your solution with regular updates</li>
              <li><strong>Testing:</strong> Ensuring quality and performance</li>
              <li><strong>Deployment:</strong> Smooth launch and ongoing support</li>
            </ol>
          </section>

          <section>
            <h2>Technology Expertise</h2>
            <p>
              I leverage modern technologies to create robust and scalable solutions:
            </p>
            <ul>
              <li>React and Next.js for web applications</li>
              <li>Node.js for backend services</li>
              <li>MongoDB for flexible data storage</li>
              <li>TypeScript for reliable code</li>
            </ul>
          </section>

          <section>
            <h2>Las Vegas Focus</h2>
            <p>
              Specializing in solutions for the unique needs of Las Vegas businesses:
            </p>
            <ul>
              <li>Hotel and resort management systems</li>
              <li>Event scheduling and management tools</li>
              <li>Tourism and visitor experience applications</li>
              <li>Local business automation solutions</li>
            </ul>
          </section>

          <div className="bg-emerald-50 dark:bg-emerald-900/20 p-6 rounded-lg mt-8">
            <h2 className="text-2xl font-bold mb-4">Ready to Transform Your Business?</h2>
            <p className="mb-4">Let's discuss how custom software can solve your specific challenges and help your business grow.</p>
            <a href="/contact" className="inline-block bg-emerald-600 text-white px-6 py-3 rounded-lg hover:bg-emerald-700 transition-colors">
              Schedule a Consultation
            </a>
          </div>
        </article>
      </div>
    </>
  );
};

export default CustomSolutions; 