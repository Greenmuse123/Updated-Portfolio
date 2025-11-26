'use client';

import React, { Fragment } from 'react';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Skills from '@/components/Skills';
import Script from 'next/script';

// San Francisco local business schema for SEO
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Elias Musleh Web Development San Francisco",
  "image": "https://eliasmusleh.com/images/profile.jpg",
  "@id": "https://eliasmusleh.com/san-francisco-developer",
  "url": "https://eliasmusleh.com/san-francisco-developer",
  "telephone": "+17142151167",
  "priceRange": "$$$",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "415 Mission St",
    "addressLocality": "San Francisco",
    "addressRegion": "CA",
    "postalCode": "94105",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 37.7897,
    "longitude": -122.3972
  },
  "areaServed": ["San Francisco", "Oakland", "Berkeley", "Palo Alto", "San Jose", "Mountain View"]
};

const localReviewSchema = {
  "@context": "https://schema.org",
  "@type": "Review",
  "itemReviewed": {
    "@type": "WebApplication",
    "name": "Custom Web Application Development"
  },
  "author": {
    "@type": "Person",
    "name": "David L."
  },
  "reviewRating": {
    "@type": "Rating",
    "ratingValue": "5"
  },
  "reviewBody": "Elias built an exceptional web platform for our San Francisco startup. Highly recommended for Bay Area companies looking for top-tier development talent."
};

// San Francisco content component
export default function SanFranciscoDeveloperContent() {
  return (
    <Fragment>
      <Script id="local-business-schema" type="application/ld+json">
        {JSON.stringify(localBusinessSchema)}
      </Script>
      <Script id="local-review-schema" type="application/ld+json">
        {JSON.stringify(localReviewSchema)}
      </Script>
      
      <Hero 
        locationInfo={{
          city: "San Francisco",
          region: "California",
          headline: "San Francisco Web Developer & Software Engineer",
          subheading: "Custom software solutions for Bay Area businesses",
          locationDescription: "Based in San Francisco, serving the entire Bay Area"
        }}
      />
      <Projects />
      <Skills />
      <About />
      <Contact />
    </Fragment>
  );
}
