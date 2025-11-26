'use client';

import React, { Fragment } from 'react';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Skills from '@/components/Skills';
import Head from 'next/head';

// Portland content component
export default function PortlandDeveloperContent() {
  // Define Portland-specific content for better uniqueness
  const portlandSpecificContent = {
    services: [
      "Portland-focused web development with an emphasis on local businesses",
      "Custom software solutions for Oregon startups and established companies",
      "Mobile-first designs tailored to Portland's tech-forward audience",
      "AI integration for businesses in the Pacific Northwest tech corridor"
    ],
    industries: [
      "Portland's thriving food and beverage industry",
      "Oregon's outdoor recreation and equipment businesses",
      "Portland tech startups and innovation hubs",
      "Sustainable and eco-friendly Portland businesses"
    ]
  };

  return (
    <Fragment>
      <Head>
        {/* Pre-connect to important domains for faster loading */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Structured data for Portland business */}
        <script 
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Elias Musleh Web Development Portland",
              "image": "https://eliasmusleh.com/images/profile.jpg",
              "@id": "https://eliasmusleh.com/portland-developer",
              "url": "https://eliasmusleh.com/portland-developer",
              "telephone": "+17142151167",
              "priceRange": "$$$",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "1120 NW Couch St",
                "addressLocality": "Portland",
                "addressRegion": "OR",
                "postalCode": "97209",
                "addressCountry": "US"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 45.5232,
                "longitude": -122.6827
              },
              "areaServed": ["Portland", "Beaverton", "Hillsboro", "Gresham", "Lake Oswego", "Oregon City"]
            })
          }}
        />
        
        {/* Customer review structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Review",
              "itemReviewed": {
                "@type": "WebApplication",
                "name": "Custom Web Application Development"
              },
              "author": {
                "@type": "Person",
                "name": "Ryan P."
              },
              "reviewRating": {
                "@type": "Rating",
                "ratingValue": "5"
              },
              "reviewBody": "Elias created an excellent web platform for our Portland business. His technical expertise and attention to detail made our project a success."
            })
          }}
        />
        
        {/* Service schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              "serviceType": "Web Development",
              "provider": {
                "@type": "Person",
                "name": "Elias Musleh",
                "url": "https://eliasmusleh.com"
              },
              "areaServed": {
                "@type": "City",
                "name": "Portland",
                "containedInPlace": {
                  "@type": "State",
                  "name": "Oregon"
                }
              },
              "description": "Professional web development services for Portland businesses and startups. Specializing in modern, responsive websites with optimized performance.",
              "offers": {
                "@type": "Offer",
                "price": "1000",
                "priceCurrency": "USD"
              }
            })
          }}
        />
      </Head>
      
      <Hero 
        locationInfo={{
          city: "Portland",
          region: "Oregon",
          headline: "Portland Web Developer & Software Engineer",
          subheading: "Custom software solutions for Oregon businesses",
          locationDescription: "Based in Portland, serving the entire Pacific Northwest"
        }}
      />
      
      {/* Portland-specific content section */}
      <section className="py-16 bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Portland Technology Services</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Specialized for Portland Businesses</h3>
              <ul className="space-y-2">
                {portlandSpecificContent.services.map((service, index) => (
                  <li key={index} className="flex items-start">
                    <span className="mr-2 text-green-600">✓</span>
                    <span>{service}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Portland Industries Served</h3>
              <ul className="space-y-2">
                {portlandSpecificContent.industries.map((industry, index) => (
                  <li key={index} className="flex items-start">
                    <span className="mr-2 text-green-600">✓</span>
                    <span>{industry}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      <Projects />
      <Skills />
      <About />
      <Contact />
    </Fragment>
  );
}
