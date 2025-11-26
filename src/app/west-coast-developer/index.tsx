'use client';

import React, { Fragment } from 'react';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Skills from '@/components/Skills';
import Script from 'next/script';

// West Coast local business schema for SEO
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Elias Musleh Web Development West Coast",
  "image": "https://eliasmusleh.com/images/profile.jpg",
  "@id": "https://eliasmusleh.com/west-coast-developer",
  "url": "https://eliasmusleh.com/west-coast-developer",
  "telephone": "+17142151167",
  "priceRange": "$$$",
  "serviceArea": {
    "@type": "GeoCircle",
    "geoMidpoint": {
      "@type": "GeoCoordinates",
      "latitude": 36.7783,
      "longitude": -119.4179
    },
    "geoRadius": "1000"
  },
  "areaServed": ["California", "Oregon", "Washington", "Nevada", "Arizona"]
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
    "name": "Jennifer M."
  },
  "reviewRating": {
    "@type": "Rating",
    "ratingValue": "5"
  },
  "reviewBody": "Elias built an exceptional digital platform for our West Coast business. His technical expertise and communication made the entire process smooth."
};

// West Coast content component
export default function WestCoastDeveloperContent() {
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
          city: "West Coast",
          region: "USA",
          headline: "West Coast Web Developer & Software Engineer",
          subheading: "Custom software solutions for businesses across the West Coast",
          locationDescription: "Serving California, Oregon, Washington, Nevada and beyond"
        }}
      />
      <Projects />
      <Skills />
      <About />
      <Contact />
    </Fragment>
  );
}
