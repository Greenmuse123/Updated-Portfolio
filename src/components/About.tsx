'use client';

import React from 'react';
import Image from 'next/image';
import { useTheme } from '@/context/ThemeContext';

const About = () => {
  const { theme } = useTheme();

  return (
    <section id="about" className={`${
      theme === 'dark' ? 'bg-gray-800' : 'bg-gray-50'
    }`}>
      <div className="max-w-screen-xl mx-auto px-4 py-8 lg:py-16">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="relative h-64 lg:h-full rounded-lg overflow-hidden">
            <Image
              src="/images/profilepic.jpg"
              alt="Elias Musleh"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className={`${
            theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
          } sm:text-lg`}>
            <h2 className={`mb-4 text-4xl tracking-tight font-extrabold ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>
              About Me
            </h2>
            <p className="mb-4">
              Hey, I'm Elias Musleh — a full-stack developer with a passion for building purposeful, 
              high-performing tech from the ground up. I specialize in crafting full-stack solutions 
              that merge functionality, creativity, and clean design.
            </p>
            <p className="mb-4">
              I've single-handedly developed a range of impactful projects, including a custom FOV calculator 
              tailored for creative tech workflows, a full-featured star rewards system designed to enhance 
              user engagement, and a logistics manager that streamlines operations with smart, scalable code.
            </p>
            <p className="mb-4">
              Beyond those, I've also brought game concepts to life through playful recreations, and built 
              bespoke websites for clients that reflect their brand and vision.
            </p>
            <p>
              Whether I'm designing seamless front-end experiences with React and Next.js, building robust 
              back-end systems with Node.js and MongoDB, or automating workflows to save time and stress — 
              I'm all about smart solutions that look good and work even better.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-8">
          <div className={`${
            theme === 'dark' ? 'bg-gray-700 text-white' : 'bg-white text-gray-900'
          } p-6 rounded-lg shadow-md`}>
            <h3 className="text-xl font-bold mb-2">Full Stack Development</h3>
            <p className={`${
              theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
            }`}>
              Building end-to-end solutions with React, Next.js, Node.js, and MongoDB
            </p>
          </div>
          <div className={`${
            theme === 'dark' ? 'bg-gray-700 text-white' : 'bg-white text-gray-900'
          } p-6 rounded-lg shadow-md`}>
            <h3 className="text-xl font-bold mb-2">Game Development</h3>
            <p className={`${
              theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
            }`}>
              Creating engaging game concepts and playful recreations
            </p>
          </div>
          <div className={`${
            theme === 'dark' ? 'bg-gray-700 text-white' : 'bg-white text-gray-900'
          } p-6 rounded-lg shadow-md`}>
            <h3 className="text-xl font-bold mb-2">Custom Solutions</h3>
            <p className={`${
              theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
            }`}>
              Developing tailored tools like FOV calculators and logistics managers
            </p>
          </div>
          <div className={`${
            theme === 'dark' ? 'bg-gray-700 text-white' : 'bg-white text-gray-900'
          } p-6 rounded-lg shadow-md`}>
            <h3 className="text-xl font-bold mb-2">Client Projects</h3>
            <p className={`${
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