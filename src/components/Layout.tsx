'use client';

import React from 'react';
import Link from 'next/link';
import ThemeToggle from './ThemeToggle';
import ContactModal from './ContactModal';
import { useTheme } from '@/context/ThemeContext';

// TypeScript knows about the gtag function on the window object
// through the declaration file in src/types/gtag.d.ts

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { theme } = useTheme();
  const [modalOpen, setModalOpen] = React.useState(false);

  const openContactModal = () => setModalOpen(true);
  const closeContactModal = () => setModalOpen(false);

  React.useEffect(() => {
    const handler = () => setModalOpen(true);
    window.addEventListener('openContactModal', handler);
    return () => window.removeEventListener('openContactModal', handler);
  }, []);

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
            <Link
              href="/#contact"
              onClick={() => {
                if (typeof window !== 'undefined' && typeof window.gtag_report_conversion === 'function') {
                  window.gtag_report_conversion('/#contact');
                }
              }}
              className={`ml-4 text-white bg-emerald-600 hover:bg-emerald-700 focus:ring-4 focus:outline-none focus:ring-emerald-300 font-medium rounded-lg text-sm px-4 py-2 text-center ${
                theme === 'dark' ? 'dark:bg-emerald-500 dark:hover:bg-emerald-600 dark:focus:ring-emerald-800' : ''
              }`}
            >
              Schedule Call
            </Link>
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
                  href="/#about"
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
                  href="/#projects"
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
                  href="/#skills"
                  className={`block py-2 px-3 rounded md:p-0 ${
                    theme === 'dark'
                      ? 'text-gray-300 hover:text-emerald-400'
                      : 'text-gray-700 hover:text-emerald-600'
                  }`}
                >
                  Skills
                </Link>
              </li>
              <li>
                <Link
                  href="/#contact"
                  className={`block py-2 px-3 rounded md:p-0 ${
                    theme === 'dark'
                      ? 'text-gray-300 hover:text-emerald-400'
                      : 'text-gray-700 hover:text-emerald-600'
                  }`}
                  onClick={(e) => {
                    // For tracking contact button clicks with Google Ads
                    if (typeof window !== 'undefined' && window.gtag) {
                      window.gtag('event', 'contact_button_click', {
                        'event_category': 'engagement',
                        'event_label': 'navbar_contact_button'
                      });
                    }
                  }}
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className={`block py-2 px-3 rounded md:p-0 ${
                    theme === 'dark'
                      ? 'text-gray-300 hover:text-emerald-400'
                      : 'text-gray-700 hover:text-emerald-600'
                  }`}
                >
                  Services
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <main className="flex-grow pt-20 px-4">
        {children}
      </main>

      {/* Footer */}
      <footer className={`w-full border-t py-8 mt-16 transition-colors duration-200 ${
        theme === 'dark' ? 'bg-gray-900 border-emerald-900' : 'bg-white border-emerald-200'
      }`}>
        <div className="max-w-screen-xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className={`text-sm transition-colors duration-200 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}> 
            &copy; {new Date().getFullYear()} Elias Musleh. All rights reserved.
          </div>
          <div className="flex gap-6 mt-2 md:mt-0">
            <a href="/#about" className="hover:text-emerald-500 transition-colors text-sm">About</a>
            <a href="/privacy-policy" className="hover:text-emerald-500 transition-colors text-sm">Privacy Policy</a>
            <a href="/licensing" className="hover:text-emerald-500 transition-colors text-sm">Licensing</a>
            <Link
              href="/#contact"
              className="hover:text-emerald-500 transition-colors text-sm"
            >
              Schedule Call
            </Link>
          </div>
        </div>
      </footer>

      {/* Contact Modal */}
      <ContactModal open={modalOpen} onClose={closeContactModal} />
    </div>
  );
};

export default Layout;