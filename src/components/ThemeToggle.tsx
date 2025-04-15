import React from 'react';
import { useTheme } from '@/context/ThemeContext';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="relative inline-flex items-center justify-center w-12 h-6 rounded-full transition-colors duration-200 ease-in-out focus:outline-none"
      aria-label="Toggle theme"
    >
      <div className="relative w-12 h-6 rounded-full bg-gray-200 dark:bg-gray-700">
        <div
          className={`absolute top-1 left-1 w-4 h-4 rounded-full transition-transform duration-200 ease-in-out ${
            theme === 'dark' ? 'translate-x-6 bg-emerald-500' : 'translate-x-0 bg-gray-600'
          }`}
        >
          {theme === 'dark' ? (
            <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
            </svg>
          ) : (
            <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
          )}
        </div>
      </div>
    </button>
  );
};

export default ThemeToggle; 