'use client';

import React, { Fragment } from 'react';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Skills from '@/components/Skills';
import Script from 'next/script';

// Los Angeles local business schema for SEO
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Elias Musleh Web Development Los Angeles",
  "image": "https://eliasmusleh.com/images/profile.jpg",
  "@id": "https://eliasmusleh.com/los-angeles-developer",
  "url": "https://eliasmusleh.com/los-angeles-developer",
  "telephone": "+17142151167",
  "priceRange": "$$$",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "333 S Grand Ave",
    "addressLocality": "Los Angeles",
    "addressRegion": "CA",
    "postalCode": "90071",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 34.0522,
    "longitude": -118.2437
  },
  "areaServed": ["Los Angeles", "Beverly Hills", "Santa Monica", "Pasadena", "Long Beach", "Burbank"]
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
    "name": "Sarah L."
  },
  "reviewRating": {
    "@type": "Rating",
    "ratingValue": "5"
  },
  "reviewBody": "Elias created an outstanding web platform for our LA-based business. His expertise in modern technologies and attention to detail made all the difference."
};

// Los Angeles content component
export default function LosAngelesDeveloperContent() {
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
          city: "Los Angeles",
          region: "California",
          headline: "Los Angeles Web Developer & Software Engineer",
          subheading: "Custom software solutions for LA businesses",
          locationDescription: "Based in Los Angeles, serving all of Southern California"
        }}
      />
      <Projects />
      <Skills />
      <About />
      <Contact />
    </Fragment>
  );
}
