import React from 'react';
import { Metadata } from 'next';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'Game Development Services | Las Vegas Game Developer',
  description: 'Expert game development services in Las Vegas. Specializing in Unity, Unreal Engine, and custom game solutions. Available for projects and full-time opportunities.',
  keywords: 'Las Vegas game developer, Unity developer, Unreal Engine developer, game development services, Las Vegas tech jobs, game programming',
};

const GameDevelopmentInsights = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Elias Musleh",
    "jobTitle": "Game Developer",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Las Vegas",
      "addressRegion": "NV"
    },
    "knowsAbout": [
      "Game Development",
      "Unity",
      "Unreal Engine",
      "C#",
      "C++",
      "Game Design"
    ],
    "offers": {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": "Game Development Services",
        "description": "Professional game development services including Unity and Unreal Engine development, custom game solutions, and interactive experiences."
      }
    },
    "availableAtOrFrom": {
      "@type": "City",
      "name": "Las Vegas"
    }
  };

  return (
    <>
      <Script
        id="game-development-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="max-w-4xl mx-auto px-4 py-8 sm:py-12 lg:py-16">
        <article className="prose prose-lg dark:prose-invert max-w-none">
          <h1>Professional Game Development Services in Las Vegas</h1>
          
          <div className="bg-emerald-50 dark:bg-emerald-900/20 p-6 rounded-lg mb-8">
            <h2 className="text-2xl font-bold mb-4">Looking for Game Development Expertise?</h2>
            <p className="mb-4">I'm a Las Vegas-based game developer specializing in Unity and Unreal Engine development. Whether you're looking to hire for a project or a full-time position, I bring expertise in game programming, design, and implementation.</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="/contact" className="inline-block bg-emerald-600 text-white px-6 py-3 rounded-lg hover:bg-emerald-700 transition-colors text-center">
                Hire for a Project
              </a>
              <a href="/contact" className="inline-block bg-emerald-600 text-white px-6 py-3 rounded-lg hover:bg-emerald-700 transition-colors text-center">
                Discuss Full-Time Opportunities
              </a>
            </div>
          </div>

          <section>
            <h2>Game Development Expertise</h2>
            <p>
              With extensive experience in both Unity and Unreal Engine, I deliver complete game solutions that are engaging, performant, and polished.
            </p>
            <h3>Technical Stack</h3>
            <ul>
              <li><strong>Game Engines:</strong> Unity, Unreal Engine</li>
              <li><strong>Programming:</strong> C#, C++, Blueprints</li>
              <li><strong>Tools:</strong> Blender, Photoshop, Git</li>
              <li><strong>Platforms:</strong> PC, Mobile, VR/AR</li>
            </ul>
          </section>

          <section>
            <h2>Project Experience</h2>
            <p>
              I've successfully delivered various game projects, from indie games to serious games:
            </p>
            <ul>
              <li>First-person shooters with advanced AI</li>
              <li>Mobile puzzle games with engaging mechanics</li>
              <li>VR experiences for training and education</li>
              <li>Serious games for business applications</li>
            </ul>
          </section>

          <section>
            <h2>Development Process</h2>
            <p>
              My game development process ensures high-quality, engaging experiences:
            </p>
            <ol>
              <li><strong>Concept:</strong> Game design and mechanics planning</li>
              <li><strong>Prototype:</strong> Rapid prototyping and testing</li>
              <li><strong>Development:</strong> Agile methodology with regular playtesting</li>
              <li><strong>Polish:</strong> Optimization and refinement</li>
            </ol>
          </section>

          <section>
            <h2>Las Vegas Focus</h2>
            <p>
              Specializing in solutions for the unique needs of Las Vegas businesses:
            </p>
            <ul>
              <li>Casino and gaming applications</li>
              <li>Entertainment and attraction experiences</li>
              <li>Training simulations for hospitality</li>
              <li>Interactive marketing experiences</li>
            </ul>
          </section>

          <section>
            <h2>Why Work With Me?</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                <h3 className="text-xl font-bold mb-2">For Clients</h3>
                <ul>
                  <li>Full game development expertise</li>
                  <li>Clear communication and updates</li>
                  <li>On-time and on-budget delivery</li>
                  <li>Ongoing support and updates</li>
                </ul>
              </div>
              <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                <h3 className="text-xl font-bold mb-2">For Employers</h3>
                <ul>
                  <li>Strong technical foundation</li>
                  <li>Creative problem-solving</li>
                  <li>Team collaboration experience</li>
                  <li>Passion for game development</li>
                </ul>
              </div>
            </div>
          </section>

          <div className="bg-emerald-50 dark:bg-emerald-900/20 p-6 rounded-lg mt-8">
            <h2 className="text-2xl font-bold mb-4">Let's Create Something Amazing</h2>
            <p className="mb-4">Whether you're looking for a developer for your next game project or considering me for a full-time position, I'd love to discuss how I can contribute to your success.</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="/contact" className="inline-block bg-emerald-600 text-white px-6 py-3 rounded-lg hover:bg-emerald-700 transition-colors text-center">
                Start a Game Project
              </a>
              <a href="/contact" className="inline-block bg-emerald-600 text-white px-6 py-3 rounded-lg hover:bg-emerald-700 transition-colors text-center">
                Discuss Employment
              </a>
            </div>
          </div>
        </article>
      </div>
    </>
  );
};

export default GameDevelopmentInsights; 