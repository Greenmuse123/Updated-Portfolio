'use client';

import React from 'react';
import Link from 'next/link';
import ThemeToggle from './ThemeToggle';
import { useTheme } from '@/context/ThemeContext';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { theme } = useTheme();

  return (
    <div className={`min-h-screen transition-colors duration-200 ${
      theme === 'dark' ? 'bg-gray-900 text-gray-100' : 'bg-white text-gray-900'
    }`}>
      <nav className={`fixed w-full z-20 top-0 start-0 border-b ${
        theme === 'dark' ? 'border-emerald-500/20 bg-gray-900' : 'border-gray-200 bg-white'
      }`}>
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <span className={`self-center text-2xl font-semibold whitespace-nowrap ${
              theme === 'dark' ? 'text-emerald-400' : 'text-gray-900'
            }`}>
              Elias Musleh
            </span>
          </Link>
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse items-center">
            <ThemeToggle />
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className={`ml-4 text-white bg-emerald-600 hover:bg-emerald-700 focus:ring-4 focus:outline-none focus:ring-emerald-300 font-medium rounded-lg text-sm px-4 py-2 text-center ${
                theme === 'dark' ? 'dark:bg-emerald-500 dark:hover:bg-emerald-600 dark:focus:ring-emerald-800' : ''
              }`}
            >
              Contact Me
            </button>
          </div>
          <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
            <ul className={`flex flex-col p-4 md:p-0 mt-4 font-medium rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 ${
              theme === 'dark' ? 'bg-gray-900' : 'bg-white'
            }`}>
              <li>
                <Link
                  href="/"
                  className={`block py-2 px-3 rounded md:p-0 ${
                    theme === 'dark'
                      ? 'text-emerald-400 hover:text-emerald-300'
                      : 'text-gray-900 hover:text-emerald-600'
                  }`}
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="#about"
                  className={`block py-2 px-3 rounded md:p-0 ${
                    theme === 'dark'
                      ? 'text-gray-300 hover:text-emerald-400'
                      : 'text-gray-700 hover:text-emerald-600'
                  }`}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="#projects"
                  className={`block py-2 px-3 rounded md:p-0 ${
                    theme === 'dark'
                      ? 'text-gray-300 hover:text-emerald-400'
                      : 'text-gray-700 hover:text-emerald-600'
                  }`}
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="#skills"
                  className={`block py-2 px-3 rounded md:p-0 ${
                    theme === 'dark'
                      ? 'text-gray-300 hover:text-emerald-400'
                      : 'text-gray-700 hover:text-emerald-600'
                  }`}
                >
                  Skills
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <main className="flex-grow pt-20 px-4">
        {children}
      </main>

      <footer className={`${
        theme === 'dark' ? 'bg-gray-900 border-t border-emerald-500/20' : 'bg-white border-t border-gray-200'
      }`}>
        <div className="max-w-screen-xl mx-auto p-4 md:py-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <Link href="/" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
              <span className={`self-center text-2xl font-semibold whitespace-nowrap ${
                theme === 'dark' ? 'text-emerald-400' : 'text-gray-900'
              }`}>
                Elias Musleh
              </span>
            </Link>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium sm:mb-0">
              <li>
                <Link
                  href="#"
                  className={`me-4 md:me-6 ${
                    theme === 'dark' ? 'text-gray-400 hover:text-emerald-400' : 'text-gray-500 hover:text-emerald-600'
                  }`}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className={`me-4 md:me-6 ${
                    theme === 'dark' ? 'text-gray-400 hover:text-emerald-400' : 'text-gray-500 hover:text-emerald-600'
                  }`}
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className={`me-4 md:me-6 ${
                    theme === 'dark' ? 'text-gray-400 hover:text-emerald-400' : 'text-gray-500 hover:text-emerald-600'
                  }`}
                >
                  Licensing
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className={`${
                    theme === 'dark' ? 'text-gray-400 hover:text-emerald-400' : 'text-gray-500 hover:text-emerald-600'
                  }`}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <hr className={`my-6 sm:mx-auto ${
            theme === 'dark' ? 'border-emerald-500/20' : 'border-gray-200'
          } lg:my-8`} />
          <span className={`block text-sm ${
            theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
          } sm:text-center`}>
            © 2024 Elias Musleh. All Rights Reserved.
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Layout; 