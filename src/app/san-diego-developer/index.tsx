'use client';

import React, { Fragment } from 'react';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Skills from '@/components/Skills';
import Script from 'next/script';

// San Diego local business schema for SEO
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Elias Musleh Web Development San Diego",
  "image": "https://eliasmusleh.com/images/profile.jpg",
  "@id": "https://eliasmusleh.com/san-diego-developer",
  "url": "https://eliasmusleh.com/san-diego-developer",
  "telephone": "+17142151167",
  "priceRange": "$$$",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "707 Broadway",
    "addressLocality": "San Diego",
    "addressRegion": "CA",
    "postalCode": "92101",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 32.7157,
    "longitude": -117.1611
  },
  "areaServed": ["San Diego", "La Jolla", "Chula Vista", "Carlsbad", "Oceanside", "Escondido"]
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
    "name": "Jason K."
  },
  "reviewRating": {
    "@type": "Rating",
    "ratingValue": "5"
  },
  "reviewBody": "Elias developed an incredible web application for our San Diego business. His technical skills and communication made the project a complete success."
};

// San Diego content component
export default function SanDiegoDeveloperContent() {
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
          city: "San Diego",
          region: "California",
          headline: "San Diego Web Developer & Software Engineer",
          subheading: "Custom software solutions for Southern California businesses",
          locationDescription: "Based in San Diego, serving all of Southern California"
        }}
      />
      <Projects />
      <Skills />
      <About />
      <Contact />
    </Fragment>
  );
}
