'use client';

import React, { useState, useEffect, useMemo } from 'react';
import Image from 'next/image';
import { useTheme } from '@/context/ThemeContext';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import Modal from './Modal';
import Link from 'next/link';

interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
  type: 'web' | 'game' | 'design';
  category: 'fullstack' | 'web' | 'game';
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
    category: "fullstack",
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
    category: "fullstack",
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
    image: "/images/logisticsmanager.png",
    tags: ["Node.js", "PostgreSQL", "React", "Redux"],
    link: "#",
    type: "web",
    category: "fullstack",
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
    category: "game",
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
    category: "game",
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
    category: "game",
    techStack: ["C++", "SFML", "Audio Integration", "Random Generation"],
    challenges: ["Random number generation", "Visual effects", "User engagement"]
  },
  {
    title: "Jedo Travel Guide",
    description: "A modern travel guide platform for Lebanon, featuring trip planning, local attractions, and AI-powered recommendations.",
    image: "/images/jedo.png",
    tags: ["Next.js", "Tailwind CSS", "AI Integration"],
    link: "https://jedo.app/",
    type: "web",
    category: "web",
    techStack: ["Next.js", "Tailwind CSS", "AI Integration", "Responsive Design"],
    challenges: [
      "Creating an intuitive user interface",
      "Implementing AI-powered trip planning",
      "Ensuring smooth navigation experience",
      "Optimizing for mobile and desktop"
    ]
  },
  {
    title: "INVEGAS702",
    description: "A modern online magazine for Las Vegas, featuring articles, events, and a vibrant digital presence for the city. Built for INVEGAS702 with a custom CMS and dynamic content management.",
    image: "/images/invegas702.png",
    tags: ["Next.js", "Supabase", "Tailwind CSS", "Magazine", "CMS"],
    link: "https://invegas702.com",
    type: "web",
    category: "web",
    techStack: ["Next.js", "Supabase", "Tailwind CSS", "Shadcn/UI", "Cloud Storage", "Role-based Auth"],
    challenges: ["Dynamic content management", "Role-based dashboard", "Image uploads & CDN", "SEO for magazine articles", "Responsive design"]
  },
  {
    title: "DaVinci Pizza Las Vegas",
    description: "A modern restaurant website for DaVinci Pizza featuring online ordering, menu management, and customer engagement. Built with responsive design and optimized for local SEO to drive foot traffic and online orders.",
    image: "/images/davincilv.png?v=2",
    tags: ["HTML5", "CSS3", "JavaScript", "Responsive Design", "SEO"],
    link: "https://davincipizzalv.com",
    type: "web",
    category: "web",
    featured: true,
    techStack: ["HTML5", "CSS3", "JavaScript", "Responsive Design", "Local SEO", "Performance Optimization"],
    challenges: ["Mobile-first design", "Online ordering integration", "Local SEO optimization", "Fast loading times", "User-friendly menu navigation"]
  },
  {
    title: "Yannis Greek Restaurant",
    description: "An elegant website for Yannis Greek Restaurant in Las Vegas, showcasing authentic Greek cuisine with an immersive dining experience. Features menu displays, reservation system, and cultural storytelling.",
    image: "/images/yannislv.png?v=2",
    tags: ["Next.js", "React", "Tailwind CSS", "TypeScript"],
    link: "https://yannislv.com",
    type: "web",
    category: "web",
    featured: true,
    techStack: ["Next.js", "React", "Tailwind CSS", "TypeScript", "Responsive Design", "Cart System"],
    challenges: ["Cultural authenticity in design", "Menu categorization", "Cart functionality", "Mobile optimization", "Performance optimization"]
  },
  {
    title: "Salzam Turf & Pavers",
    description: "A comprehensive business website for a Las Vegas turf and concrete specialist, featuring service showcases, local SEO optimization, and lead generation. Resolved critical indexing issues and implemented advanced SEO infrastructure for maximum visibility.",
    image: "/images/salzamturfandconcrete.png",
    tags: ["Next.js", "SEO Optimization", "Local Business", "Lead Generation"],
    link: "https://www.salzamturfpavers.com",
    type: "web",
    category: "web",
    featured: true,
    techStack: ["Next.js", "React", "Tailwind CSS", "SEO Infrastructure", "Structured Data", "Local SEO"],
    challenges: [
      "Fixed 28 pages with canonical URL conflicts preventing Google indexing",
      "Implemented comprehensive SEO infrastructure with JSON-LD schemas",
      "Created dynamic blog category pages for improved content organization",
      "Optimized for local Las Vegas searches and lead generation",
      "Achieved 25-40% expected organic traffic increase within 60 days"
    ]
  }
];

const categories = [
  { key: 'fullstack', label: 'Full Stack Development' },
  { key: 'web', label: 'Web Development' },
  { key: 'game', label: 'Game Development' },
];

const Projects = () => {
  const { theme } = useTheme();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isInView, setIsInView] = useState<boolean>(false);
  const shouldReduceMotion = useReducedMotion();

  const filteredProjects = useMemo(() => {
    if (selectedCategory === 'all') return projects;
    return projects.filter(project => project.category === selectedCategory);
  }, [selectedCategory]);

  const filteredProjectsBySearch = useMemo(() => {
    return filteredProjects.filter(project => project.title.toLowerCase().includes(searchQuery.toLowerCase()));
  }, [filteredProjects, searchQuery]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      observer.observe(projectsSection);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className={`text-3xl md:text-4xl font-bold text-center mb-4 ${
            theme === 'dark' 
              ? 'text-white bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300' 
              : 'bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-700'
          }`}>
            Projects
          </h2>
          <p className={`text-center mb-12 max-w-2xl mx-auto ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
            Explore a selection of my work across various technologies and domains. Each project showcases my approach to problem-solving and technical execution.
          </p>
          <div className="flex justify-center gap-4 mb-10">
            {categories.map(cat => (
              <button
                key={cat.key}
                className={`px-5 py-2 rounded-full font-semibold text-base transition-all duration-200 border focus:outline-none focus:ring-2 focus:ring-emerald-400/60 ${selectedCategory === cat.key ? 'bg-emerald-500 text-white border-emerald-500 shadow-lg' : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 border-gray-300 dark:border-gray-700 hover:bg-emerald-100 dark:hover:bg-emerald-900'}`}
                onClick={() => setSelectedCategory(cat.key)}
              >
                {cat.label}
              </button>
            ))}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mt-10">
            {filteredProjects.map((project, idx) => (
              <div
                key={project.title}
                className={`rounded-xl overflow-hidden transition-all duration-300 cursor-pointer relative group 
                  ${theme === 'dark' 
                    ? 'bg-gray-700/80 border border-transparent shadow-lg' 
                    : 'bg-[var(--card-bg)] border border-[var(--card-border)] shadow-sm'}
                `}
                onClick={() => setSelectedProject(project)}
                tabIndex={0}
                aria-label={`Open details for ${project.title}`}
              >
                <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden">
                  <Image 
                    src={project.image} 
                    alt={project.title} 
                    fill 
                    className={`object-cover group-hover:scale-105 transition-transform duration-300 ${
                      project.title === "Salzam Turf & Pavers" ? "object-top" : "object-top"
                    }`} 
                  />
                </div>
                <div className="p-4 sm:p-6">
                  <h3 className={`text-lg sm:text-xl font-bold mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>{project.title}</h3>
                  <p className={`text-sm sm:text-base mb-3 sm:mb-4 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-3 sm:mb-4">
                    {project.tags.map((tag: string) => (
                      <span key={tag} className={`text-xs sm:text-sm px-2 py-1 rounded-full ${theme === 'dark' ? 'bg-gray-600 text-gray-300' : 'bg-gray-100 text-gray-600'}`}>{tag}</span>
                    ))}
                  </div>
                  <span className={`inline-flex items-center text-sm sm:text-base font-medium ${theme === 'dark' ? 'text-emerald-400 hover:text-emerald-300' : 'text-emerald-600 hover:text-emerald-500'}`}>View Details<svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg></span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
        <Modal isOpen={!!selectedProject} onClose={() => setSelectedProject(null)}>
          {selectedProject && (
            <div className="flex flex-col gap-4">
              <div className="relative w-full h-48 rounded-lg overflow-hidden">
                <Image src={selectedProject.image} alt={selectedProject.title} fill className="object-cover" />
              </div>
              <h2 className="text-2xl font-bold mb-2 text-emerald-600 dark:text-emerald-400">{selectedProject.title}</h2>
              <p className="text-base text-gray-700 dark:text-gray-200 mb-2">{selectedProject.description}</p>
              <div className="flex flex-wrap gap-2 mb-2">
                {selectedProject.tags.map((tag: string) => (
                  <span key={tag} className="text-xs px-2 py-1 rounded-full bg-emerald-100 dark:bg-emerald-900 text-emerald-700 dark:text-emerald-300">{tag}</span>
                ))}
              </div>
              <div className="flex flex-wrap gap-2 mb-2">
                <span className="font-semibold text-gray-600 dark:text-gray-300">Tech Stack:</span>
                {selectedProject.techStack.map((tech: string) => (
                  <span key={tech} className="text-xs px-2 py-1 rounded bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200">{tech}</span>
                ))}
              </div>
              <div>
                <span className="font-semibold text-gray-600 dark:text-gray-300">Challenges:</span>
                <ul className="list-disc list-inside ml-4">
                  {selectedProject.challenges.map((ch: string, idx: number) => (
                    <li key={idx} className="text-xs text-gray-600 dark:text-gray-300">{ch}</li>
                  ))}
                </ul>
              </div>
              <a href={selectedProject.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center mt-2 px-4 py-2 bg-emerald-500 text-white rounded-lg font-semibold hover:bg-emerald-600 transition-colors">Visit Project<svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 4h6m0 0v6m0-6L10 14" /></svg></a>
            </div>
          )}
        </Modal>
      </div>
    </section>
  );
};

export default Projects;