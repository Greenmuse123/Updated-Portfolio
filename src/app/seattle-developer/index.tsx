'use client';

import React, { Fragment } from 'react';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Skills from '@/components/Skills';
import Script from 'next/script';

// Seattle local business schema for SEO
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Elias Musleh Web Development Seattle",
  "image": "https://eliasmusleh.com/images/profile.jpg",
  "@id": "https://eliasmusleh.com/seattle-developer",
  "url": "https://eliasmusleh.com/seattle-developer",
  "telephone": "+17142151167",
  "priceRange": "$$$",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "1700 7th Ave",
    "addressLocality": "Seattle",
    "addressRegion": "WA",
    "postalCode": "98101",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 47.6130,
    "longitude": -122.3356
  },
  "areaServed": ["Seattle", "Bellevue", "Redmond", "Kirkland", "Tacoma", "Everett"]
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
    "name": "Michael T."
  },
  "reviewRating": {
    "@type": "Rating",
    "ratingValue": "5"
  },
  "reviewBody": "Elias delivered a fantastic web application for our Seattle startup. Highly recommend for any Washington business needing quality software development."
};

// Seattle content component
export default function SeattleDeveloperContent() {
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
          city: "Seattle",
          region: "Washington",
          headline: "Seattle Web Developer & Software Engineer",
          subheading: "Custom software solutions for Washington businesses",
          locationDescription: "Based in Seattle, serving the Greater Puget Sound area"
        }}
      />
      <Projects />
      <Skills />
      <About />
      <Contact />
    </Fragment>
  );
}
