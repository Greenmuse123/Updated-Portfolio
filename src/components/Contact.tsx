'use client';

import React from 'react';
import { useTheme } from '@/context/ThemeContext';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Contact = () => {
  const { theme } = useTheme();

  return (
    <section id="contact" className={`${
      theme === 'dark' ? 'bg-gray-800' : 'bg-gray-50'
    }`}>
      <div className="max-w-screen-xl mx-auto px-4 py-8 lg:py-16">
        <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
          <h2 className={`mb-4 text-4xl tracking-tight font-extrabold ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>
            Contact Me
          </h2>
          <p className={`font-light ${
            theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
          } lg:mb-16 sm:text-xl`}>
            Let's build something amazing together
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <div className={`${
            theme === 'dark' ? 'bg-gray-700' : 'bg-white'
          } p-6 rounded-lg shadow-md`}>
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-emerald-400">Elias Musleh</span>
            <p className={`mb-4 ${
              theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
            }`}>
              Full Stack Developer
            </p>
            <div className="space-y-4">
              <div>
                <h4 className={`font-semibold ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>
                  Email
                </h4>
                <a
                  href="mailto:eliasmuse123@gmail.com"
                  className={`${
                    theme === 'dark' ? 'text-emerald-400 hover:text-emerald-300' : 'text-emerald-600 hover:text-emerald-800'
                  }`}
                >
                  eliasmuse123@gmail.com
                </a>
              </div>
              <div>
                <h4 className={`font-semibold ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>
                  LinkedIn
                </h4>
                <a
                  href="https://www.linkedin.com/in/elias-musleh-013b36205"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-2 ${
                    theme === 'dark' ? 'text-emerald-400 hover:text-emerald-300' : 'text-emerald-600 hover:text-emerald-800'
                  }`}
                >
                  <FaLinkedin className="w-6 h-6" />
                  linkedin.com/in/elias-musleh-013b36205
                </a>
              </div>
              <div>
                <h4 className={`font-semibold ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>
                  GitHub
                </h4>
                <a
                  href="https://github.com/Greenmuse123"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-2 ${
                    theme === 'dark' ? 'text-emerald-400 hover:text-emerald-300' : 'text-emerald-600 hover:text-emerald-800'
                  }`}
                >
                  <FaGithub className="w-6 h-6" />
                  github.com/Greenmuse123
                </a>
              </div>
            </div>
          </div>

          <div className={`${
            theme === 'dark' ? 'bg-gray-700' : 'bg-white'
          } p-6 rounded-lg shadow-md`}>
            <h3 className={`text-xl font-bold mb-4 ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>
              Send a Message
            </h3>
            <form className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className={`block mb-2 text-sm font-medium ${
                    theme === 'dark' ? 'text-gray-300' : 'text-gray-900'
                  }`}
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  className={`w-full p-2.5 rounded-lg border ${
                    theme === 'dark'
                      ? 'bg-gray-600 border-gray-500 text-white placeholder-gray-400'
                      : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                  }`}
                  placeholder="John Doe"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className={`block mb-2 text-sm font-medium ${
                    theme === 'dark' ? 'text-gray-300' : 'text-gray-900'
                  }`}
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  className={`w-full p-2.5 rounded-lg border ${
                    theme === 'dark'
                      ? 'bg-gray-600 border-gray-500 text-white placeholder-gray-400'
                      : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                  }`}
                  placeholder="name@company.com"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className={`block mb-2 text-sm font-medium ${
                    theme === 'dark' ? 'text-gray-300' : 'text-gray-900'
                  }`}
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className={`w-full p-2.5 rounded-lg border ${
                    theme === 'dark'
                      ? 'bg-gray-600 border-gray-500 text-white placeholder-gray-400'
                      : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                  }`}
                  placeholder="Let's discuss your project..."
                  required
                />
              </div>
              <button
                type="submit"
                className={`w-full px-5 py-3 text-sm font-medium text-center text-white rounded-lg ${
                  theme === 'dark'
                    ? 'bg-emerald-600 hover:bg-emerald-700'
                    : 'bg-emerald-600 hover:bg-emerald-700'
                }`}
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 