'use client';

import { motion } from 'framer-motion';
import { useTheme } from '@/context/ThemeContext';
import Image from 'next/image';
import Link from 'next/link';

const Home = () => {
  const { theme } = useTheme();

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className={`absolute inset-0 z-0 ${
        theme === 'dark' 
          ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-emerald-900/20' 
          : 'bg-gradient-to-br from-white via-gray-50 to-emerald-50'
      }`} />

      {/* Animated circles */}
      <motion.div
        className="absolute w-96 h-96 rounded-full opacity-20 blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 50, 0],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          background: theme === 'dark' 
            ? 'radial-gradient(circle, rgba(16,185,129,0.3) 0%, rgba(17,24,39,0) 70%)'
            : 'radial-gradient(circle, rgba(16,185,129,0.2) 0%, rgba(255,255,255,0) 70%)',
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left column - Text content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.h1
              className={`text-4xl md:text-6xl font-bold mb-6 ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Hi, I'm{' '}
              <span className="text-emerald-500">Elias Musleh</span>
            </motion.h1>
            
            <motion.p
              className={`text-xl md:text-2xl mb-8 ${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
              }`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Full Stack Developer & Creative Problem Solver
            </motion.p>

            <motion.p
              className={`text-lg mb-12 ${
                theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
              }`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              Crafting elegant solutions through code and creativity.
              Let's build something amazing together.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <Link
                href="#projects"
                className={`px-8 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  theme === 'dark'
                    ? 'bg-emerald-500 text-white hover:bg-emerald-600'
                    : 'bg-emerald-500 text-white hover:bg-emerald-600'
                }`}
              >
                View My Work
              </Link>
              <Link
                href="#contact"
                className={`px-8 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  theme === 'dark'
                    ? 'border border-emerald-500 text-emerald-500 hover:bg-emerald-500/10'
                    : 'border border-emerald-500 text-emerald-500 hover:bg-emerald-500/10'
                }`}
              >
                Get in Touch
              </Link>
            </motion.div>
          </motion.div>

          {/* Right column - Image and tech stack */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative w-full max-w-md mx-auto">
              <motion.div
                className="absolute -inset-4 rounded-2xl bg-gradient-to-r from-emerald-500 to-blue-500 opacity-20 blur-xl"
                animate={{
                  scale: [1, 1.05, 1],
                  rotate: [0, 5, 0],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <div className={`relative rounded-2xl overflow-hidden ${
                theme === 'dark' ? 'bg-gray-800' : 'bg-white'
              } shadow-2xl`}>
                <Image
                  src="/images/profilepic.jpg"
                  alt="Elias Musleh"
                  width={500}
                  height={500}
                  className="w-full h-auto"
                  priority
                />
              </div>
            </div>

            {/* Tech stack floating badges */}
            <motion.div
              className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 flex flex-wrap justify-center gap-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              {['React', 'Next.js', 'TypeScript', 'Node.js'].map((tech, index) => (
                <motion.div
                  key={tech}
                  className={`px-3 py-1 rounded-full text-sm font-medium ${
                    theme === 'dark'
                      ? 'bg-gray-800 text-emerald-400'
                      : 'bg-gray-100 text-emerald-600'
                  }`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2 + index * 0.1, duration: 0.5 }}
                >
                  {tech}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div className={`w-6 h-10 rounded-full border-2 ${
          theme === 'dark' ? 'border-emerald-500' : 'border-emerald-500'
        } flex items-center justify-center`}>
          <motion.div
            className={`w-1 h-3 rounded-full ${
              theme === 'dark' ? 'bg-emerald-500' : 'bg-emerald-500'
            }`}
            animate={{
              y: [0, 10, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Home; 