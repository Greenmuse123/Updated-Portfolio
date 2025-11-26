'use client';

import React, { Fragment } from 'react';
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Skills from "@/components/Skills";
import Script from 'next/script';

// Orange County local business schema for SEO
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Elias Musleh Web Development Orange County",
  "image": "https://eliasmusleh.com/images/profile.jpg",
  "@id": "https://eliasmusleh.com/orange-county-developer",
  "url": "https://eliasmusleh.com/orange-county-developer",
  "telephone": "+17142151167",
  "priceRange": "$$$",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "2211 Michelson Dr",
    "addressLocality": "Irvine",
    "addressRegion": "CA",
    "postalCode": "92612",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 33.6673,
    "longitude": -117.8491
  },
  "areaServed": ["Orange County", "Irvine", "Newport Beach", "Anaheim", "Costa Mesa", "Huntington Beach"]
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
    "name": "Stephanie R."
  },
  "reviewRating": {
    "@type": "Rating",
    "ratingValue": "5"
  },
  "reviewBody": "Elias delivered a custom web application that exceeded our expectations. Highly recommend for any Orange County business needing custom software development."
};

// Orange County content component
const OrangeCountyContent = () => {
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
          city: "Orange County",
          region: "California",
          headline: "Orange County Web Developer & Software Engineer",
          subheading: "Custom software solutions for Southern California businesses",
          locationDescription: "Based in Irvine, serving all of Orange County"
        }}
      />
      <Projects />
      <Skills />
      <About />
      <Contact />
    </Fragment>
  );
};

export default OrangeCountyContent;
