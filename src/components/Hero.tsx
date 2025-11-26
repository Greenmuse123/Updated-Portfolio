'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { useTheme } from '@/context/ThemeContext';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect, useMemo } from 'react';

// Code typing animation component
interface CodeAnimationProps {
  theme: string;
}

const CodeTypingAnimation = ({ theme }: CodeAnimationProps) => {
  const [text, setText] = useState('');
  const [currentLine, setCurrentLine] = useState(0);
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const [activeLine, setActiveLine] = useState(0);
  const shouldReduceMotion = useReducedMotion();
  
  // Sample React component code with syntax highlighting tokens
  const codeLines = [
    [{type: 'keyword', text: 'import'}, {type: 'normal', text: ' React '}, {type: 'keyword', text: 'from'}, {type: 'string', text: " 'react'"}],
    [{type: 'keyword', text: 'import'}, {type: 'normal', text: ' '}, {type: 'string', text: "'./Card.css'"}],
    [{type: 'normal', text: ''}],
    [{type: 'keyword', text: 'const'}, {type: 'function', text: ' Card '}, {type: 'normal', text: '= ('}, {type: 'parameter', text: '{ title, description, image }'}, {type: 'normal', text: ') => {'}],
    [{type: 'normal', text: '  '}, {type: 'keyword', text: 'return'}, {type: 'normal', text: ' ('}],
    [{type: 'normal', text: '    <'}, {type: 'component', text: 'div'}, {type: 'attribute', text: ' className='}, {type: 'string', text: '"card"'}, {type: 'normal', text: '>'}],
    [{type: 'normal', text: '      <'}, {type: 'component', text: 'div'}, {type: 'attribute', text: ' className='}, {type: 'string', text: '"card-image"'}, {type: 'normal', text: '>'}],
    [{type: 'normal', text: '        <'}, {type: 'component', text: 'img'}, {type: 'attribute', text: ' src='}, {type: 'normal', text: '{'}, {type: 'parameter', text: 'image'}, {type: 'normal', text: '} '}, {type: 'attribute', text: 'alt='}, {type: 'normal', text: '{'}, {type: 'parameter', text: 'title'}, {type: 'normal', text: '} />'}],
    [{type: 'normal', text: '      </'}, {type: 'component', text: 'div'}, {type: 'normal', text: '>'}],
    [{type: 'normal', text: '      <'}, {type: 'component', text: 'div'}, {type: 'attribute', text: ' className='}, {type: 'string', text: '"card-content"'}, {type: 'normal', text: '>'}],
    [{type: 'normal', text: '        <'}, {type: 'component', text: 'h2'}, {type: 'attribute', text: ' className='}, {type: 'string', text: '"card-title"'}, {type: 'normal', text: '>{'}, {type: 'parameter', text: 'title'}, {type: 'normal', text: '}</'}], 
    [{type: 'component', text: 'h2'}, {type: 'normal', text: '>'}],
    [{type: 'normal', text: '        <'}, {type: 'component', text: 'p'}, {type: 'attribute', text: ' className='}, {type: 'string', text: '"card-desc"'}, {type: 'normal', text: '>{'}, {type: 'parameter', text: 'description'}, {type: 'normal', text: '}</'}],
    [{type: 'component', text: 'p'}, {type: 'normal', text: '>'}],
    [{type: 'normal', text: '        <'}, {type: 'component', text: 'button'}, {type: 'attribute', text: ' className='}, {type: 'string', text: '"card-btn"'}, {type: 'normal', text: '>Learn More</'}],
    [{type: 'component', text: 'button'}, {type: 'normal', text: '>'}],
    [{type: 'normal', text: '      </'}, {type: 'component', text: 'div'}, {type: 'normal', text: '>'}],
    [{type: 'normal', text: '    </'}, {type: 'component', text: 'div'}, {type: 'normal', text: '>'}],
    [{type: 'normal', text: '  );'}],
    [{type: 'normal', text: '};'}],
    [{type: 'normal', text: ''}],
    [{type: 'keyword', text: 'export'}, {type: 'keyword', text: ' default'}, {type: 'function', text: ' Card'}]
  ];
  
  // Convert the structured code to plain text for rendering
  const getPlainText = (line: { type: string; text: string }[]) => {
    return line.map(token => token.text).join('');
  };
  
  // Track active highlighting line
  useEffect(() => {
    if (isTypingComplete) {
      const interval = setInterval(() => {
        setActiveLine(prev => (prev + 1) % codeLines.length);
      }, 2000);
      return () => clearInterval(interval);
    }
  }, [isTypingComplete, codeLines.length]);

  // Handle typing animation
  useEffect(() => {
    if (shouldReduceMotion) {
      // Skip animation if reduced motion is preferred
      setText(codeLines.map(line => getPlainText(line)).join('\n'));
      setCurrentLine(codeLines.length);
      setIsTypingComplete(true);
      return;
    }
    
    let timeout: NodeJS.Timeout;
    
    if (currentLine < codeLines.length) {
      const line = getPlainText(codeLines[currentLine]);
      let charIndex = 0;
      
      const typeChar = () => {
        if (charIndex < line.length) {
          setText(prev => prev + line[charIndex]);
          charIndex++;
          timeout = setTimeout(typeChar, 5 + Math.random() * 15); // Even faster typing for more impressive effect
        } else {
          setText(prev => prev + '\n');
          setCurrentLine(prev => prev + 1);
        }
      };
      
      timeout = setTimeout(typeChar, currentLine === 0 ? 200 : 30); // Start faster
    } else if (currentLine === codeLines.length) {
      setIsTypingComplete(true);
    }
    
    return () => clearTimeout(timeout);
  }, [currentLine, shouldReduceMotion]);
  
  // Render the code with syntax highlighting
  const renderCodeWithSyntax = () => {
    return codeLines.map((line, lineIndex) => {
      // Skip lines that haven't been typed yet
      if (lineIndex >= currentLine && !isTypingComplete) return null;
      
      // Detect if this is an import line or an export line for special effects
      const isImportLine = lineIndex <= 1;
      const isExportLine = lineIndex === codeLines.length - 1;
      const isReturnLine = lineIndex === 4;
      const isJSXStart = lineIndex >= 5 && lineIndex <= 17;
      
      return (
        <motion.div 
          key={lineIndex} 
          className={`${activeLine === lineIndex && isTypingComplete ? 'bg-emerald-500/10 -mx-4 px-4' : ''} transition-colors duration-300`}
          initial={isTypingComplete ? { opacity: 0, y: 5 } : { opacity: 1, y: 0 }}
          animate={isTypingComplete ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.3, 
            delay: isTypingComplete ? lineIndex * 0.03 : 0
          }}
        >
          {line.map((token, tokenIndex) => {
            let tokenColor = '';
            let isSpecial = false;
            
            // Apply different colors based on token type and theme
            switch (token.type) {
              case 'keyword':
                tokenColor = theme === 'dark' ? 'text-purple-300' : 'text-purple-700';
                isSpecial = isImportLine || isExportLine || isReturnLine;
                break;
              case 'function':
                tokenColor = theme === 'dark' ? 'text-yellow-300' : 'text-yellow-700';
                isSpecial = lineIndex === 3 || isExportLine; // Function declaration
                break;
              case 'string':
                tokenColor = theme === 'dark' ? 'text-green-300' : 'text-green-700';
                break;
              case 'component':
                tokenColor = theme === 'dark' ? 'text-blue-300' : 'text-blue-700';
                isSpecial = isJSXStart;
                break;
              case 'attribute':
                tokenColor = theme === 'dark' ? 'text-orange-300' : 'text-orange-700';
                break;
              case 'parameter':
                tokenColor = theme === 'dark' ? 'text-pink-300' : 'text-pink-700';
                break;
              default:
                tokenColor = theme === 'dark' ? 'text-gray-300' : 'text-[var(--foreground)]';
            }
            
            return (
              <span 
                key={tokenIndex} 
                className={`${tokenColor} ${isSpecial && isTypingComplete ? 'syntax-highlight-pulse font-medium' : ''}`}
              >
                {token.text}
              </span>
            );
          })}
        </motion.div>
      );
    });
  };
  
  // Debug the state
  console.log("Typing state:", { text, currentLine, isTypingComplete });

  return (
    <div className="h-full w-full overflow-hidden relative">
      {!isTypingComplete && (
        <div className="whitespace-pre-wrap">
          {text}
          <span className={`inline-block h-4 w-2 animate-pulse ${theme === 'dark' ? 'bg-emerald-400' : 'bg-emerald-600'}`}></span>
        </div>
      )}
      {isTypingComplete && renderCodeWithSyntax()}
      
      {/* Decorative floating brackets and symbols - only show when complete */}
      {isTypingComplete && !shouldReduceMotion && (
        <>
          <motion.div 
            className="absolute text-xl opacity-20"
            animate={{ 
              y: [0, -15, 0],
              x: [0, 5, 0],
              opacity: [0.1, 0.3, 0.1],
              scale: [1, 1.1, 1]
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            style={{ top: '20%', left: '15%', color: theme === 'dark' ? '#4ade80' : '#047857' }}
          >
            {'{}'}
          </motion.div>
          <motion.div 
            className="absolute text-lg opacity-20"
            animate={{ 
              y: [0, 15, 0],
              x: [0, -7, 0],
              opacity: [0.1, 0.2, 0.1],
              rotate: [0, 5, 0]
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            style={{ top: '60%', right: '20%', color: theme === 'dark' ? '#a78bfa' : '#7c3aed' }}
          >
            {'</>'}
          </motion.div>
          <motion.div 
            className="absolute text-xl opacity-20"
            animate={{ 
              y: [0, 10, 0],
              x: [0, 3, 0],
              opacity: [0.1, 0.25, 0.1],
              scale: [1, 0.9, 1]
            }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            style={{ top: '40%', right: '10%', color: theme === 'dark' ? '#fcd34d' : '#d97706' }}
          >
            {'()'}
          </motion.div>
          <motion.div 
            className="absolute text-lg opacity-20"
            animate={{ 
              y: [0, -12, 0],
              x: [0, -5, 0],
              opacity: [0.15, 0.3, 0.15],
              rotate: [0, -3, 0]
            }}
            transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut", delay: 0.7 }}
            style={{ top: '30%', left: '30%', color: theme === 'dark' ? '#f87171' : '#dc2626' }}
          >
            {'<React/>'}
          </motion.div>
          <motion.div 
            className="absolute text-lg opacity-20"
            animate={{ 
              y: [0, 8, 0],
              x: [0, 8, 0],
              opacity: [0.1, 0.2, 0.1],
              scale: [1, 1.05, 1]
            }}
            transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
            style={{ bottom: '25%', left: '20%', color: theme === 'dark' ? '#60a5fa' : '#2563eb' }}
          >
            {'useState()'}
          </motion.div>
        </>
      )}
    </div>
  );
};

// UI Preview animation component with advanced effects
const UIPreviewAnimation = ({ theme }: CodeAnimationProps) => {
  const [animationStage, setAnimationStage] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const shouldReduceMotion = useReducedMotion();
  
  // Progress through animation stages
  useEffect(() => {
    if (shouldReduceMotion) {
      // Skip animation stages and jump to final stage
      setAnimationStage(4);
      return;
    }
    
    // Progress through stages with delays
    const timeouts = [
      setTimeout(() => setAnimationStage(1), 1800), // Frame appears
      setTimeout(() => setAnimationStage(2), 2500), // Image appears
      setTimeout(() => setAnimationStage(3), 3000), // Content appears
      setTimeout(() => setAnimationStage(4), 3700)  // Button appears & interactive
    ];
    
    return () => timeouts.forEach(clearTimeout);
  }, [shouldReduceMotion]);
  
  // 3D rotation on hover effect
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (animationStage < 4 || !isHovering) return;
    
    const element = e.currentTarget;
    const rect = element.getBoundingClientRect();
    
    // Calculate relative position in element
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Convert to rotation angles (-10 to 10 degrees)
    const rotX = ((y / rect.height) - 0.5) * -20;
    const rotY = ((x / rect.width) - 0.5) * 20;
    
    setRotateX(rotX);
    setRotateY(rotY);
  };
  
  // Reset rotation when not hovering
  const handleMouseLeave = () => {
    setIsHovering(false);
    setRotateX(0);
    setRotateY(0);
  };
  
  // Lighting effect based on mouse position
  const getGlarePosition = () => {
    if (!isHovering || animationStage < 4) return { opacity: 0 };
    
    // Convert rotation to gradient position
    const x = 50 + (rotateY * 2); // 30-70% range
    const y = 50 + (rotateX * -2); // 30-70% range
    
    return {
      background: `radial-gradient(circle at ${x}% ${y}%, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0) 50%)`,
      opacity: 0.7
    };
  };
  
  return (
    <div className="flex items-center justify-center w-full perspective-1000">
      <motion.div 
        className="relative w-full max-w-[220px] preserve-3d"
        style={{ 
          transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
          transition: 'transform 0.2s ease-out'
        }}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={handleMouseLeave}
      >
        {/* Card UI with 3D effect */}
        <motion.div 
          className={`rounded-lg overflow-hidden shadow-xl ${theme === 'dark' ? 'bg-gray-800' : 'bg-[var(--card-bg)]'} relative`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ 
            opacity: animationStage >= 1 ? 1 : 0, 
            y: animationStage >= 1 ? 0 : 20,
            boxShadow: isHovering && animationStage >= 4 ? 
              '0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(74, 222, 128, 0.2)' : 
              '0 10px 15px -3px rgba(0, 0, 0, 0.3)'
          }}
          transition={{ duration: 0.5 }}
        >
          {/* Glass glare effect */}
          <div 
            className="absolute inset-0 z-10 pointer-events-none transition-opacity duration-300"
            style={getGlarePosition()}
          />
          
          {/* Image with parallax effect */}
          <motion.div 
            className="relative h-28 overflow-hidden bg-gradient-to-r from-emerald-500 via-teal-500 to-blue-500"
            style={{ 
              transform: isHovering && animationStage >= 4 ? `translateY(${rotateX * 0.6}px)` : 'none',
              transition: 'transform 0.2s ease-out'
            }}
          >
            <motion.div
              className="absolute inset-0 bg-black/10"
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ 
                opacity: animationStage >= 2 ? 1 : 0,
                scale: animationStage >= 2 ? 1 : 1.1 
              }}
              transition={{ duration: 0.7 }}
            >
              {/* Decorative elements */}
              <div className="absolute top-3 right-3 w-4 h-4 rounded-full bg-white/30"></div>
              <div className="absolute bottom-2 left-5 w-2 h-2 rounded-full bg-white/20"></div>
            </motion.div>
          </motion.div>
          
          {/* Content area with staggered animation */}
          <motion.div 
            className="p-3"
            style={{ 
              transform: isHovering && animationStage >= 4 ? `translateY(${rotateX * -0.3}px)` : 'none',
              transition: 'transform 0.2s ease-out'
            }}
          >
            {/* Title with gradient */}
            <motion.div 
              className={`h-5 rounded mb-2 bg-gradient-to-r ${theme === 'dark' 
                ? 'from-emerald-400/80 to-emerald-400/40' 
                : 'from-emerald-600/80 to-emerald-600/40'}`}
              initial={{ width: "0%" }}
              animate={{ width: animationStage >= 3 ? "75%" : "0%" }}
              transition={{ duration: 0.5 }}
            />
            
            {/* Description lines with staggered animation */}
            <motion.div 
              className={`h-3 rounded mb-1.5 ${theme === 'dark' ? 'bg-gray-600' : 'bg-[var(--background)]'}`}
              initial={{ width: "0%" }}
              animate={{ width: animationStage >= 3 ? "100%" : "0%" }}
              transition={{ duration: 0.5, delay: 0.1 }}
            />
            <motion.div 
              className={`h-3 rounded mb-1.5 ${theme === 'dark' ? 'bg-gray-600' : 'bg-[var(--background)]'}`}
              initial={{ width: "0%" }}
              animate={{ width: animationStage >= 3 ? "90%" : "0%" }}
              transition={{ duration: 0.5, delay: 0.2 }}
            />
            <motion.div 
              className={`h-3 rounded mb-3 ${theme === 'dark' ? 'bg-gray-600' : 'bg-[var(--background)]'}`}
              initial={{ width: "0%" }}
              animate={{ width: animationStage >= 3 ? "60%" : "0%" }}
              transition={{ duration: 0.5, delay: 0.3 }}
            />
            
            {/* Button with hover effect */}
            <motion.div 
              className={`h-8 w-24 rounded relative overflow-hidden ${isHovering && animationStage >= 4 ? 'cursor-pointer' : ''}`}
              initial={{ opacity: 0, y: 5 }}
              animate={{ 
                opacity: animationStage >= 4 ? 1 : 0,
                y: animationStage >= 4 ? 0 : 5
              }}
              transition={{ duration: 0.3 }}
              whileHover={animationStage >= 4 ? { scale: 1.03 } : undefined}
              whileTap={animationStage >= 4 ? { scale: 0.98 } : undefined}
            >
              <div className={`absolute inset-0 ${theme === 'dark' ? 'bg-emerald-500' : 'bg-emerald-600'}`}></div>
              
              {/* Button shine effect */}
              {isHovering && animationStage >= 4 && (
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  initial={{ x: '-100%' }}
                  animate={{ x: '100%' }}
                  transition={{ duration: 0.8, ease: 'easeInOut', repeat: 0 }}
                />
              )}
            </motion.div>
          </motion.div>
          
          {/* Click ripple effect */}
          {animationStage >= 4 && (
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <motion.div
                className="w-full h-full bg-white opacity-0"
                whileTap={{ opacity: [0, 0.1, 0] }}
                transition={{ duration: 0.6 }}
              />
            </div>
          )}
        </motion.div>
        
        {/* Shadow with parallax effect */}
        <motion.div 
          className="absolute -bottom-4 left-0 right-0 h-4 mx-auto rounded-full bg-black/20 blur-md"
          style={{ width: '80%' }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ 
            opacity: animationStage >= 1 ? (isHovering ? 0.3 : 0.2) : 0, 
            scale: animationStage >= 1 ? (isHovering ? 0.85 : 1) : 0.8,
            x: rotateY * -0.5,
            y: rotateX * 0.5
          }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>
    </div>
  );
};

// Define interface for location-specific information
interface LocationInfo {
  city: string;
  region: string;
  headline: string;
  subheading: string;
  locationDescription?: string;
  keyIndustries?: string[];
}

interface HeroProps {
  locationInfo?: LocationInfo;
}

const Hero = ({ locationInfo }: HeroProps = {}) => {
  const { theme } = useTheme();
  const [isMobile, setIsMobile] = useState(false);
  const shouldReduceMotion = useReducedMotion();
  
  // Use location info if provided, otherwise default to Las Vegas
  const cityName = locationInfo?.city || "Las Vegas";
  const regionName = locationInfo?.region || "Nevada";
  const headlineText = locationInfo?.headline || "Las Vegas Full Stack, React & Node.js Developer";
  const subheadingText = locationInfo?.subheading || "Modern Web Projects, IT Services & Tech Consulting for Nevada Businesses";
  const locationDesc = locationInfo?.locationDescription || "From the Strip to Downtown, delivering excellence in every line of code.";
  

  useEffect(() => {
    // Check mobile on mount
    setIsMobile(window.innerWidth < 768);
    
    // Throttled resize handler
    let resizeTimer: NodeJS.Timeout;
    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        setIsMobile(window.innerWidth < 768);
      }, 100);
    };
    
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(resizeTimer);
    };
  }, []);

  // Generate consistent particle positions with memo
  const particlePositions = useMemo(() => {
    return Array.from({ length: 20 }, (_, i) => ({
      left: `${(i * 5) % 100}%`,
      top: `${(i * 7) % 100}%`
    }));
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden px-4">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        {/* Grid pattern - reduced opacity on mobile */}
        <div className="absolute inset-0 opacity-5 md:opacity-10">
          <Image
            src={theme === 'dark' ? '/images/grid-dark.svg' : '/images/grid-light.svg'}
            alt="Grid pattern"
            fill
            className="object-cover"
          />
        </div>

        {/* Animated gradient orbs - smaller on mobile */}
        <motion.div
          className="absolute w-[300px] h-[300px] md:w-[500px] md:h-[500px] rounded-full blur-2xl md:blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 30, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            opacity: theme === 'dark' ? 0.15 : 0.1,
            background: theme === 'dark' 
              ? 'radial-gradient(circle, rgba(16,185,129,0.2) 0%, rgba(17,24,39,0) 70%)'
              : 'radial-gradient(circle, rgba(16,185,129,0.15) 0%, rgba(255,255,255,0) 70%)',
          }}
        />

        {/* Floating particles - fewer on mobile */}
        {particlePositions.slice(0, isMobile ? 10 : 20).map((pos, index) => (
          <motion.div
            key={index}
            className="absolute w-0.5 h-0.5 md:w-1 md:h-1 rounded-full bg-emerald-500/20"
            style={{
              left: pos.left,
              top: pos.top
            }}
            animate={{
              y: [0, -10, 0],
              x: [0, 5, 0],
              opacity: [0.2, 0.3, 0.2]
            }}
            transition={{
              duration: 3 + index * 0.2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left column - Text content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.h1
              className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 bg-clip-text text-transparent bg-gradient-to-r ${
                theme === 'dark' 
                  ? 'from-white to-gray-300' 
                  : 'from-gray-900 to-gray-700'
              }`}
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              {headlineText}
            </motion.h1>
            <motion.h2
              className={`text-xl sm:text-2xl md:text-3xl font-semibold mb-4 md:mb-6 bg-clip-text text-transparent bg-gradient-to-r ${
                theme === 'dark' 
                  ? 'from-emerald-400 to-teal-400' 
                  : 'from-emerald-700 to-teal-600'
              }`}
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.8 }}
            >
              {subheadingText}
            </motion.h2>
            <motion.p
              className={`text-lg sm:text-xl md:text-2xl mb-4 md:mb-8 ${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
              }`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Hi, I&apos;m <span className="font-semibold">Elias Musleh</span> - Bringing Silicon Valley expertise to {regionName} businesses
            </motion.p>
            <motion.p
              className={`text-base sm:text-lg mb-6 md:mb-12 ${
                theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
              }`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              Specializing in modern web development with React, Next.js, and Node.js. Creating custom web solutions for {cityName} businesses and startups. {locationDesc}
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <Link
                href="#projects"
                className={`group px-6 py-2.5 sm:px-8 sm:py-3 rounded-lg font-semibold transition-all duration-300 relative overflow-hidden ${
                  theme === 'dark'
                    ? 'bg-emerald-500 text-white hover:bg-emerald-600'
                    : 'bg-emerald-500 text-white hover:bg-emerald-600'
                }`}
              >
                <span className="relative z-10">View My Work</span>
                <span className="absolute inset-0 w-full h-full bg-white/20 transform translate-y-12 group-hover:translate-y-0 transition-transform duration-300"></span>
              </Link>
              <Link
                href="/#contact"
                onClick={() => {
                  if (typeof window !== 'undefined' && typeof window.gtag_report_conversion === 'function') {
                    window.gtag_report_conversion('/#contact');
                  }
                }}
                className={`group px-6 py-2.5 sm:px-8 sm:py-3 rounded-lg font-semibold transition-all duration-300 relative overflow-hidden ${
                  theme === 'dark'
                    ? 'border border-emerald-500 text-emerald-500 hover:border-emerald-400 hover:text-emerald-400'
                    : 'border border-emerald-500 text-emerald-500 hover:border-emerald-600 hover:text-emerald-600'
                }`}
              >
                <span className="relative z-10">Schedule Call</span>
                <span className="absolute inset-0 w-full h-full bg-emerald-500/5 transform -translate-y-12 group-hover:translate-y-0 transition-transform duration-300"></span>
              </Link>
            </motion.div>
          </motion.div>

          {/* Code to UI Transformation Animation - visible on all screen sizes */}
          <motion.div
            initial={{ opacity: 0, x: shouldReduceMotion ? 0 : 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex flex-col lg:flex-row items-center justify-center gap-12 mt-8 lg:mt-0"
          >
            {/* Enhanced Code Editor */}
            <div className="w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl mx-auto relative rounded-xl overflow-hidden shadow-2xl border border-gray-200 dark:border-gray-700 transform hover:scale-[1.01] transition-transform duration-300">
              {/* Code Editor Header */}
              <div className={`w-full px-4 py-2 flex items-center border-b ${theme === 'dark' ? 'bg-gray-800/90 border-gray-700' : 'bg-gray-100 border-gray-200'}`}>
                {/* Window control buttons with hover effects */}
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-400 transition-colors duration-200"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-400 transition-colors duration-200"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500 hover:bg-green-400 transition-colors duration-200"></div>
                </div>
                
                {/* File tabs */}
                <div className="flex-1 flex justify-center space-x-2">
                  <div className={`px-3 py-1 text-xs rounded-t-md ${theme === 'dark' ? 'bg-gray-700 text-emerald-300' : 'bg-gray-200 text-emerald-700'}`}>
                    Card.jsx
                  </div>
                  <div className={`px-3 py-1 text-xs ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                    App.jsx
                  </div>
                </div>
                
                {/* Right side icons */}
                <div className="flex space-x-2">
                  <div className={`text-xs ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                  </div>
                </div>
              </div>
              
              {/* Code Editor Content */}
              <div className="relative h-[450px] sm:h-[500px] md:h-[550px] lg:h-[500px] xl:h-[550px] overflow-hidden z-30 pointer-events-auto">
                {/* Background grid pattern with glow effect */}
                <div className={`absolute inset-0 ${theme === 'dark' ? 'bg-gray-900' : 'bg-[var(--card-bg)]'}`}></div>
                <div className={`absolute inset-0 ${theme === 'dark' ? 'bg-grid-dark' : 'bg-grid-light'} opacity-[0.03]`}></div>
                
                {/* Ambient glow effects */}
                {theme === 'dark' && (
                  <>
                    <div className="absolute -top-20 -left-20 w-60 h-60 bg-emerald-500/10 rounded-full blur-3xl"></div>
                    <div className="absolute top-40 -right-20 w-60 h-60 bg-blue-500/10 rounded-full blur-3xl"></div>
                  </>
                )}
                
                {/* Inline Card Preview inside code editor */}
                <div className="absolute right-4 bottom-16 w-32 sm:w-40 md:w-48 z-10 pointer-events-none">
                  <UIPreviewAnimation theme={theme} />
                </div>
                
                {/* Code editor content with interaction hints */}
                <div className="absolute inset-0 z-30 overflow-auto min-h-full">
                  <div className={`h-full w-full p-4 pl-12 text-xs leading-relaxed font-mono ${theme === 'dark' ? 'text-gray-200' : 'text-gray-800'}`}>
                    <CodeTypingAnimation theme={theme} />
                  </div>
                </div>
                
                {/* Line numbers with hover effect */}
                <div className={`absolute top-0 left-0 bottom-0 w-10 pt-4 flex flex-col items-end pr-2 text-xs font-mono ${theme === 'dark' ? 'bg-gray-900/80 text-gray-500' : 'bg-gray-50/80 text-gray-400'} border-r ${theme === 'dark' ? 'border-gray-800' : 'border-gray-100'}`}>
                  {[...Array(20)].map((_, i) => (
                    <motion.div 
                      key={i} 
                      className={`${i === 3 || i === 11 ? (theme === 'dark' ? 'text-emerald-400' : 'text-emerald-600') : ''} cursor-default py-[2px]`}
                      whileHover={{ scale: 1.2, color: theme === 'dark' ? '#4ade80' : '#059669' }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      {i + 1}
                    </motion.div>
                  ))}
                </div>
                
                {/* Interactive features floating buttons */}
                <motion.div 
                  className={`absolute right-3 top-3 flex flex-col space-y-2 opacity-70 hover:opacity-100 transition-opacity duration-200`}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 0.7 }}
                  transition={{ delay: 4, duration: 0.3 }}
                >
                  <button className={`w-8 h-8 rounded-full flex items-center justify-center ${theme === 'dark' ? 'bg-gray-800 text-gray-400 hover:bg-gray-700' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'} transition-colors`}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </button>
                  <button className={`w-8 h-8 rounded-full flex items-center justify-center ${theme === 'dark' ? 'bg-gray-800 text-gray-400 hover:bg-gray-700' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'} transition-colors`}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </button>
                </motion.div>
                
                
                {/* Terminal-like decoration at bottom with typing animation */}
                {!shouldReduceMotion && (
                  <motion.div 
                    className={`absolute bottom-0 left-0 right-0 h-7 px-4 flex items-center text-xs ${theme === 'dark' ? 'bg-gray-800 text-gray-400' : 'bg-gray-100 text-gray-600'} border-t ${theme === 'dark' ? 'border-gray-700' : 'border-gray-200'}`}
                    initial={{ y: 24 }}
                    animate={{ y: 0 }}
                    transition={{ delay: 3.5, duration: 0.3 }}
                  >
                    <div className="flex items-center">
                      <motion.span 
                        className={`h-2 w-2 rounded-full mr-2 ${theme === 'dark' ? 'bg-emerald-400' : 'bg-emerald-500'}`}
                        animate={{ opacity: [1, 0.5, 1] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                      ></motion.span>
                      <span className="mr-2">Ready</span>
                      <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 4, duration: 1 }}
                      >
                        • Compiled successfully in 0.8s
                      </motion.span>
                    </div>
                    <span className="ml-auto font-medium">{new Date().getFullYear()}</span>
                  </motion.div>
                )}
              </div>
            </div>

            

          </motion.div>


        </div>
      </div>

      {/* Scroll indicator - smaller on mobile, visible on all devices */}
      <motion.div
        className="fixed sm:absolute bottom-4 md:bottom-6 lg:bottom-8 left-1/2 transform -translate-x-1/2 z-50"
        animate={{
          y: [0, 8, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div className={`w-5 h-8 sm:w-6 sm:h-10 rounded-full border-2 ${
          theme === 'dark' ? 'border-emerald-500' : 'border-emerald-500'
        } flex items-center justify-center`}>
          <motion.div
            className={`w-0.5 h-2 sm:w-1 sm:h-3 rounded-full ${
              theme === 'dark' ? 'bg-emerald-500' : 'bg-emerald-500'
            }`}
            animate={{
              y: [0, 8, 0],
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

export default Hero; 