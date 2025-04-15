'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { useTheme } from '@/context/ThemeContext';

interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
  type: 'web' | 'game' | 'design';
  featured?: boolean;
  techStack: string[];
  challenges: string[];
}

const projects: Project[] = [
  {
    title: "FOV Calculator",
    description: "A custom FOV calculator tailored for creative tech workflows, providing precise calculations and visualizations for various display configurations.",
    image: "/images/FOVcalc.png",
    tags: ["React", "TypeScript", "Next.js", "Tailwind CSS"],
    link: "https://tools.ctus.live/fovcalc/",
    type: "web",
    featured: true,
    techStack: ["React", "TypeScript", "Next.js", "Tailwind CSS", "WebGL"],
    challenges: ["Real-time calculations", "Cross-browser compatibility", "Performance optimization"]
  },
  {
    title: "Star Rewards System",
    description: "A gamification system designed to enhance user engagement and retention through a star-based rewards program.",
    image: "/images/screencapture-star-rewards-vercel-app-2025-04-15-13_32_41.png",
    tags: ["React", "Next.js", "MongoDB", "Node.js"],
    link: "https://star-rewards.vercel.app/",
    type: "web",
    techStack: ["React", "Next.js", "MongoDB", "Node.js", "Tailwind CSS"],
    challenges: [
      "Implementing real-time reward tracking",
      "Creating an intuitive user interface",
      "Ensuring secure user authentication",
      "Optimizing performance for high user loads"
    ]
  },
  {
    title: "Logistics Manager",
    description: "A comprehensive logistics management system that streamlines operations with smart, scalable code and real-time tracking.",
    image: "/images/cineworks.png",
    tags: ["Node.js", "PostgreSQL", "React", "Redux"],
    link: "#",
    type: "web",
    featured: true,
    techStack: ["Node.js", "PostgreSQL", "React", "Redux", "WebSocket"],
    challenges: ["Complex data relationships", "Real-time tracking", "Performance optimization"]
  },
  {
    title: "Tetris Recreation",
    description: "A faithful recreation of the classic Tetris game, featuring modern graphics and smooth gameplay mechanics.",
    image: "/images/tetris.png",
    tags: ["C++", "SFML", "Game Design"],
    link: "https://github.com/Greenmuse123/Tetris-Recreation",
    type: "game",
    techStack: ["C++", "SFML", "Game Logic", "Collision Detection"],
    challenges: ["Performance optimization", "Physics simulation", "Asset management"]
  },
  {
    title: "2048 Game Clone",
    description: "A modern take on the popular 2048 puzzle game with smooth animations and responsive controls.",
    image: "/images/2048.jpg",
    tags: ["JavaScript", "HTML5", "CSS3"],
    link: "https://github.com/Greenmuse123/2048-HTML-Game-Dev",
    type: "game",
    techStack: ["JavaScript", "HTML5", "CSS3", "DOM Manipulation"],
    challenges: ["Touch controls", "Animation smoothness", "State management"]
  },
  {
    title: "Slot Machine Simulator",
    description: "An interactive slot machine simulation with realistic mechanics and engaging visual effects.",
    image: "/images/slotmachine.jpg",
    tags: ["C++", "SFML", "Game Design"],
    link: "https://github.com/Greenmuse123/Slot-Machine-SFML-C-",
    type: "game",
    techStack: ["C++", "SFML", "Audio Integration", "Random Generation"],
    challenges: ["Random number generation", "Visual effects", "User engagement"]
  },
  {
    title: "Jedo Travel Guide",
    description: "A modern travel guide platform for Lebanon, featuring trip planning, local attractions, and AI-powered recommendations.",
    image: "/images/jedo.png",
    tags: ["Next.js", "Tailwind CSS", "AI Integration"],
    link: "https://jedo.app/",
    type: "design",
    techStack: ["Next.js", "Tailwind CSS", "AI Integration", "Responsive Design"],
    challenges: [
      "Creating an intuitive user interface",
      "Implementing AI-powered trip planning",
      "Ensuring smooth navigation experience",
      "Optimizing for mobile and desktop"
    ]
  },
  {
    title: "Client Portfolio Website",
    description: "A bespoke website designed to perfectly reflect a client's brand identity and showcase their work.",
    image: "/images/webdesign.jpg",
    tags: ["Next.js", "Tailwind CSS", "Framer Motion"],
    link: "#",
    type: "design",
    techStack: ["Next.js", "Tailwind CSS", "Framer Motion", "SSR"],
    challenges: ["SEO optimization", "Performance", "Responsive design"]
  }
];

const categoryInfo = {
  web: {
    title: "Full Stack Web Applications",
    description: "End-to-end web solutions with modern tech stacks",
    icon: "🌐",
    projects: projects.filter(p => p.type === 'web')
  },
  game: {
    title: "Game Development",
    description: "Interactive experiences and game mechanics",
    icon: "🎮",
    projects: projects.filter(p => p.type === 'game')
  },
  design: {
    title: "Web Design",
    description: "Beautiful and functional website designs",
    icon: "🎨",
    projects: projects.filter(p => p.type === 'design')
  }
};

const Projects = () => {
  const { theme } = useTheme();
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);

  const toggleCategory = (category: string) => {
    setExpandedCategory(expandedCategory === category ? null : category);
  };

  return (
    <section id="projects" className={`${
      theme === 'dark' ? 'bg-gray-900' : 'bg-white'
    }`}>
      <div className="max-w-screen-xl mx-auto px-4 py-8 lg:py-16">
        <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
          <h2 className={`mb-4 text-4xl tracking-tight font-extrabold ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>
            Projects
          </h2>
          <p className={`font-light ${
            theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
          } lg:mb-16 sm:text-xl`}>
            Code. Create. Solve.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {Object.entries(categoryInfo).map(([key, category]) => (
            <div
              key={key}
              className={`${
                theme === 'dark' ? 'bg-gray-800' : 'bg-gray-50'
              } rounded-lg overflow-hidden transition-all duration-300 ${
                expandedCategory === key ? 'md:col-span-3' : ''
              }`}
            >
              <div
                className="p-6 cursor-pointer"
                onClick={() => toggleCategory(key)}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{category.icon}</span>
                    <h3 className={`text-xl font-bold font-mono ${
                      theme === 'dark' ? 'text-white' : 'text-gray-900'
                    }`}>
                      {category.title}
                    </h3>
                  </div>
                  <span className={`${
                    theme === 'dark' ? 'text-gray-500' : 'text-gray-400'
                  } font-mono text-sm`}>
                    {category.projects.length} projects
                  </span>
                </div>
                <p className={`${
                  theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                } mb-4`}>
                  {category.description}
                </p>
              </div>

              {expandedCategory === key && (
                <div className={`border-t ${
                  theme === 'dark' ? 'border-gray-700' : 'border-gray-200'
                }`}>
                  <div className="p-6 space-y-6">
                    {category.projects.map((project, index) => (
                      <div
                        key={index}
                        className={`${
                          theme === 'dark' ? 'bg-gray-700' : 'bg-white'
                        } rounded-lg p-4`}
                      >
                        <div className="flex items-start gap-4">
                          <div className="relative w-24 h-24 flex-shrink-0 rounded-lg overflow-hidden">
                            <Image
                              src={project.image}
                              alt={project.title}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-2">
                              <h4 className={`font-bold font-mono ${
                                theme === 'dark' ? 'text-white' : 'text-gray-900'
                              }`}>
                                {project.title}
                              </h4>
                              {project.featured && (
                                <span className={`${
                                  theme === 'dark' ? 'bg-emerald-900/50 text-emerald-300' : 'bg-emerald-100 text-emerald-800'
                                } font-mono text-xs px-2 py-0.5 rounded`}>
                                  FEATURED
                                </span>
                              )}
                            </div>
                            <p className={`${
                              theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                            } text-sm mb-3`}>
                              {project.description}
                            </p>
                            <div className="flex flex-wrap gap-2 mb-3">
                              {project.techStack.map((tech, techIndex) => (
                                <span
                                  key={techIndex}
                                  className={`${
                                    theme === 'dark'
                                      ? 'bg-emerald-900/50 text-emerald-300'
                                      : 'bg-emerald-100 text-emerald-800'
                                  } font-mono text-xs px-2 py-0.5 rounded`}
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                            <div className="flex justify-between items-center">
                              <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`inline-flex items-center font-mono text-sm ${
                                  theme === 'dark'
                                    ? 'text-emerald-400 hover:text-emerald-300'
                                    : 'text-emerald-600 hover:text-emerald-800'
                                }`}
                              >
                                view-project
                                <svg
                                  className="w-4 h-4 ml-2"
                                  fill="currentColor"
                                  viewBox="0 0 20 20"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                    clipRule="evenodd"
                                  />
                                </svg>
                              </a>
                              <span className={`${
                                theme === 'dark' ? 'text-gray-500' : 'text-gray-400'
                              } font-mono text-xs`}>
                                {project.challenges.length} challenges
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 