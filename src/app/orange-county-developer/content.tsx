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
    "streetAddress": "17777 Center Court Drive",
    "addressLocality": "Cerritos",
    "addressRegion": "CA",
    "postalCode": "90703",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 33.8703,
    "longitude": -118.0398
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "09:00",
      "closes": "17:00"
    }
  ],
  "sameAs": [
    "https://github.com/MuslehElias",
    "https://linkedin.com/in/eliasmusleh",
    "https://twitter.com/eliasmusleh"
  ]
};

// Location-specific information for Orange County
const OrangeCountyContent = () => {
  const locationInfo = {
    city: "Orange County",
    region: "Southern California",
    headline: "Orange County Full Stack, React & Node.js Developer",
    subheading: "Modern Web Projects, IT Services & Tech Consulting for Orange County Businesses",
    locationDescription: "Serving startups, SMBs, and enterprises throughout Orange County, Irvine, Newport Beach, Costa Mesa, and surrounding areas.",
    keyIndustries: ["Tech Startups", "E-commerce", "Professional Services", "Healthcare", "Real Estate"]
  };

  return (
    <Fragment>
      <Script
        id="local-business-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <main className="flex flex-col min-h-screen">
        <Hero locationInfo={locationInfo} />
        <Skills />
        <Projects />
        <About locationInfo={locationInfo} />
        <Contact locationSpecific={{
          heading: `Web Development Services in ${locationInfo.city}`,
          subheading: `Ready to elevate your ${locationInfo.city} business with modern web solutions?`,
          calendlyText: `Schedule a consultation to discuss your ${locationInfo.city} project needs.`
        }} />
      </main>
    </Fragment>
  );
};

export default OrangeCountyContent;
