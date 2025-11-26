'use client';

import React from 'react';
import Image from 'next/image';
import { useTheme } from '@/context/ThemeContext';

// Define interface for location-specific information
interface LocationInfo {
  city: string;
  region: string;
  headline?: string;
  subheading?: string;
  locationDescription?: string;
  keyIndustries?: string[];
}

interface AboutProps {
  locationInfo?: LocationInfo;
}

const About = ({ locationInfo }: AboutProps = {}) => {
  const { theme } = useTheme();
  
  // Use location info if provided, otherwise default to Las Vegas
  const cityName = locationInfo?.city || "Las Vegas";
  const regionName = locationInfo?.region || "Nevada";

  return (
    <section id="about" className={`${
      theme === 'dark' ? 'bg-gray-800' : 'bg-gray-50'
    }`}>
      <div className="max-w-screen-xl mx-auto px-4 py-6 sm:py-8 lg:py-16">
        <div className="grid gap-6 sm:gap-8 lg:grid-cols-2">
          <div className="relative h-48 sm:h-64 lg:h-full rounded-lg overflow-hidden">
            <Image
              src="/images/profilepic.jpg"
              alt="Elias Musleh"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className={`${
            theme === 'dark' ? 'text-white' : 'text-gray-500'
          } text-base sm:text-lg`}>
            <h2 className={`mb-3 sm:mb-4 text-3xl sm:text-4xl tracking-tight font-extrabold ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>
              About Me
            </h2>
            <p className="mb-4 sm:mb-6">
              I&apos;m a passionate full-stack developer with a keen eye for design and user experience. I specialize in creating modern, responsive web applications that are both beautiful and functional.
            </p>
            <p className="mb-4 sm:mb-6">
              With a strong foundation in both frontend and backend technologies, I&apos;m able to bring ideas to life from concept to deployment.
            </p>
            <p className="mb-3 sm:mb-4">
              I specialize in building modern web applications using technologies like React, Next.js, Node.js, and TypeScript. I&apos;m particularly interested in creating seamless user experiences and writing clean, maintainable code.
            </p>
            <p className="mb-3 sm:mb-4">
              When I&apos;m not coding, you&apos;ll find me exploring new technologies, contributing to open-source projects, or working on personal projects that challenge me to grow as a developer.
            </p>
            <p>
              Whether I&apos;m designing seamless front-end experiences with React and Next.js, building robust 
              back-end systems with Node.js and MongoDB, or automating workflows to save time and stress — 
              I&apos;m all about smart solutions that look good and work even better.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mt-6 sm:mt-8">
          <div className={`${
            theme === 'dark' ? 'bg-gray-700 text-white' : 'bg-white text-gray-900'
          } p-4 sm:p-6 rounded-lg shadow-md`}>
            <h3 className="text-lg sm:text-xl font-bold mb-2">Full Stack Development</h3>
            <p className={`text-sm sm:text-base ${
              theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
            }`}>
              Building end-to-end solutions with React, Next.js, Node.js, and MongoDB
            </p>
          </div>
          <div className={`${
            theme === 'dark' ? 'bg-gray-700 text-white' : 'bg-white text-gray-900'
          } p-4 sm:p-6 rounded-lg shadow-md`}>
            <h3 className="text-lg sm:text-xl font-bold mb-2">Game Development</h3>
            <p className={`text-sm sm:text-base ${
              theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
            }`}>
              Creating engaging game concepts and playful recreations
            </p>
          </div>
          <div className={`${
            theme === 'dark' ? 'bg-gray-700 text-white' : 'bg-white text-gray-900'
          } p-4 sm:p-6 rounded-lg shadow-md`}>
            <h3 className="text-lg sm:text-xl font-bold mb-2">Custom Solutions</h3>
            <p className={`text-sm sm:text-base ${
              theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
            }`}>
              Developing tailored tools like FOV calculators and logistics managers
            </p>
          </div>
          <div className={`${
            theme === 'dark' ? 'bg-gray-700 text-white' : 'bg-white text-gray-900'
          } p-4 sm:p-6 rounded-lg shadow-md`}>
            <h3 className="text-lg sm:text-xl font-bold mb-2">Client Projects</h3>
            <p className={`text-sm sm:text-base ${
              theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
            }`}>
              Crafting bespoke websites that perfectly reflect brand identity
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 