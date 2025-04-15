'use client';

import React from 'react';
import { useTheme } from '@/context/ThemeContext';

interface SkillCategory {
  name: string;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    name: "Frontend Development",
    skills: ["React", "Next.js", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS"]
  },
  {
    name: "Backend Development",
    skills: ["Node.js", "Express", "Python", "Django", "RESTful APIs", "GraphQL", "MongoDB", "PostgreSQL"]
  },
  {
    name: "Game Development",
    skills: ["Unity", "C#", "Game Design", "2D/3D Graphics", "Physics", "AI Programming"]
  },
  {
    name: "Tools & Technologies",
    skills: ["Git", "Docker", "AWS", "Firebase", "CI/CD", "Jest", "Figma", "Adobe Creative Suite"]
  }
];

const Skills = () => {
  const { theme } = useTheme();

  return (
    <section id="skills" className={`${
      theme === 'dark' ? 'bg-gray-800' : 'bg-gray-50'
    }`}>
      <div className="max-w-screen-xl mx-auto px-4 py-8 lg:py-16">
        <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
          <h2 className={`mb-4 text-4xl tracking-tight font-extrabold ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>
            Skills & Expertise
          </h2>
          <p className={`font-light ${
            theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
          } sm:text-xl`}>
            Technologies and tools I work with
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          {skillCategories.map((category, index) => (
            <div key={index} className={`${
              theme === 'dark' ? 'bg-gray-700 text-white' : 'bg-white text-gray-900'
            } rounded-lg p-6 shadow-md`}>
              <h3 className="text-xl font-bold mb-4">
                {category.name}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className={`${
                      theme === 'dark'
                        ? 'bg-emerald-900/50 text-emerald-300'
                        : 'bg-emerald-100 text-emerald-800'
                    } text-sm font-medium px-3 py-1 rounded-full`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills; 