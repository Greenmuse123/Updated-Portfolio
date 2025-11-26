'use client';

import React, { Fragment } from 'react';
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Skills from "@/components/Skills";
import Script from 'next/script';

// Las Vegas local business schema for SEO
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Elias Musleh Web Development Las Vegas",
  "image": "https://eliasmusleh.com/images/profile.jpg",
  "@id": "https://eliasmusleh.com/las-vegas-developer",
  "url": "https://eliasmusleh.com/las-vegas-developer",
  "telephone": "+17142151167",
  "priceRange": "$$$",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "3355 S Las Vegas Blvd",
    "addressLocality": "Las Vegas",
    "addressRegion": "NV",
    "postalCode": "89109",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 36.1219,
    "longitude": -115.1710
  },
  "areaServed": ["Las Vegas", "Henderson", "North Las Vegas", "Summerlin", "Spring Valley", "Paradise"]
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
  "reviewBody": "Elias created an amazing custom web application for our Las Vegas business. His knowledge of modern tech helped us automate processes we'd been doing manually for years."
};

// Las Vegas content component
const LasVegasContent = () => {
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
          city: "Las Vegas",
          region: "Nevada",
          headline: "Las Vegas Web Developer & Software Engineer",
          subheading: "Custom software solutions for Nevada businesses",
          locationDescription: "Based in Las Vegas, serving Henderson, Summerlin and all of Clark County",
          keyIndustries: ["Hospitality", "Gaming", "Entertainment", "Restaurants", "Retail"]
        }}
      />
      <Projects />
      <Skills />
      <About />
      <Contact />
    </Fragment>
  );
};

export default LasVegasContent;
