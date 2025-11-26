'use client';

import React, { useEffect } from 'react';
import { useTheme } from '@/context/ThemeContext';
import { InlineWidget, useCalendlyEventListener } from 'react-calendly';

// Define interface for location-specific contact information
interface LocationSpecific {
  heading?: string;
  subheading?: string;
  calendlyText?: string;
}

interface ContactProps {
  locationSpecific?: LocationSpecific;
}

const Contact = ({ locationSpecific }: ContactProps = {}) => {
  const { theme } = useTheme();
  
  // Use location-specific content if provided, otherwise use defaults
  const headingText = locationSpecific?.heading || "Contact Me";
  const subheadingText = locationSpecific?.subheading || "Let's work together to bring your ideas to life.";
  const calendlyIntroText = locationSpecific?.calendlyText || "Schedule a free consultation to discuss your project.";

  // Track Calendly events for Google Ads conversion tracking
  useCalendlyEventListener({
    onEventScheduled: (e) => {
      // Only trigger if window and gtag_report_conversion exist
      if (typeof window !== 'undefined' && typeof window.gtag_report_conversion === 'function') {
        // Call the Google Ads conversion tracking function
        console.log('Calendly booking completed - tracking conversion');
        window.gtag_report_conversion();
      }
    },
  });


  return (
    <section id="contact" className={`${
      theme === 'dark' ? 'bg-gray-800' : 'bg-[var(--background)]'
    }`}>
      <div className="max-w-screen-xl mx-auto px-4 py-6 sm:py-8 lg:py-16">
        <div className="mx-auto max-w-screen-sm text-center mb-6 sm:mb-8 lg:mb-16">
          <h2 className={`mb-3 sm:mb-4 text-3xl sm:text-4xl tracking-tight font-extrabold ${
            theme === 'dark' ? 'text-white' : 'text-[var(--foreground)]'
          }`}>
            Contact Me
          </h2>
          <p className={`text-base sm:text-lg font-light ${
            theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
          }`}>
            Let&apos;s work together to bring your ideas to life.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className={`${
            theme === 'dark' ? 'bg-gray-700' : 'bg-[var(--card-bg)]'
          } rounded-lg p-6 sm:p-8 shadow-md`}>
            <h3 className={`text-xl sm:text-2xl font-bold mb-4 sm:mb-6 ${
              theme === 'dark' ? 'text-white' : 'text-[var(--foreground)]'
            }`}>
              Get in Touch
            </h3>
            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-center gap-3 sm:gap-4">
                <div className={`p-2 sm:p-3 rounded-full ${
                  theme === 'dark' ? 'bg-gray-600' : 'bg-[var(--card-border)]'
                }`}>
                  <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <div>
                  <p className={`text-sm sm:text-base ${
                    theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                  }`}>
                    Name
                  </p>
                  <p className={`text-base sm:text-lg font-medium ${
                    theme === 'dark' ? 'text-white' : 'text-[var(--foreground)]'
                  }`}>
                    Elias Musleh
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3 sm:gap-4">
                <div className={`p-2 sm:p-3 rounded-full ${
                  theme === 'dark' ? 'bg-gray-600' : 'bg-[var(--card-border)]'
                }`}>
                  <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className={`text-sm sm:text-base ${
                    theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                  }`}>
                    Phone
                  </p>
                  <a
                    href="tel:+17025991404"
                    onClick={() => {
                      if (typeof window !== 'undefined' && typeof window.gtag_report_phone_conversion === 'function') {
                        window.gtag_report_phone_conversion();
                      }
                    }}
                    className={`text-base sm:text-lg font-medium hover:underline ${
                      theme === 'dark' ? 'text-emerald-400' : 'text-emerald-600'
                    }`}
                  >
                    (702) 599-1404
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-3 sm:gap-4">
                <div className={`p-2 sm:p-3 rounded-full ${
                  theme === 'dark' ? 'bg-gray-600' : 'bg-[var(--card-border)]'
                }`}>
                  <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className={`text-sm sm:text-base ${
                    theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                  }`}>
                    Email
                  </p>
                  <a
                    href="mailto:eliasmuse123@gmail.com"
                    onClick={() => {
                      if (typeof window !== 'undefined' && typeof window.gtag_report_email_conversion === 'function') {
                        window.gtag_report_email_conversion();
                      }
                    }}
                    className={`text-base sm:text-lg font-medium hover:underline ${
                      theme === 'dark' ? 'text-emerald-400' : 'text-emerald-600'
                    }`}
                  >
                    eliasmuse123@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-3 sm:gap-4">
                <div className={`p-2 sm:p-3 rounded-full ${
                  theme === 'dark' ? 'bg-gray-600' : 'bg-[var(--card-border)]'
                }`}>
                  <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                </div>
                <div>
                  <p className={`text-sm sm:text-base ${
                    theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                  }`}>
                    Social
                  </p>
                  <div className="flex gap-4">
                    <a
                      href="https://www.linkedin.com/in/elias-musleh-013b36205"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`text-base sm:text-lg font-medium hover:underline ${
                        theme === 'dark' ? 'text-emerald-400' : 'text-emerald-600'
                      }`}
                    >
                      LinkedIn
                    </a>
                    <a
                      href="https://github.com/Greenmuse123"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`text-base sm:text-lg font-medium hover:underline ${
                        theme === 'dark' ? 'text-emerald-400' : 'text-emerald-600'
                      }`}
                    >
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Calendly Integration */}
          <div className={`${
            theme === 'dark' ? 'bg-gray-700' : 'bg-[var(--card-bg)]'
          } rounded-lg p-6 sm:p-8 shadow-md`}>
            <h3 className={`text-xl sm:text-2xl font-bold mb-4 sm:mb-6 ${
              theme === 'dark' ? 'text-white' : 'text-[var(--foreground)]'
            }`}>
              Schedule a Meeting
            </h3>
            <p className={`mb-6 ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Book a time slot directly in my calendar for a discussion about your project.
            </p>
            <div className="calendly-container h-[600px] w-full">
              <InlineWidget 
                url="https://calendly.com/greenvalleyaisolutions/new-meeting" 
                styles={{
                  height: '100%',
                  width: '100%',
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 