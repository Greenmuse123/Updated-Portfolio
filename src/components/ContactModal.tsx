"use client";

import React, { useState } from "react";
import { useTheme } from '@/context/ThemeContext';

interface ContactModalProps {
  open: boolean;
  onClose: () => void;
}

const PHONE_NUMBER = "7027738839";

function formatPhone(num: string) {
  // Format as (702) 773-8839
  return `(${num.slice(0,3)}) ${num.slice(3,6)}-${num.slice(6)}`;
}

const ContactModal: React.FC<ContactModalProps> = ({ open, onClose }) => {
  const { theme } = useTheme();
  const [name, setName] = useState("");
  const [userPhone, setUserPhone] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [touched, setTouched] = useState({ name: false, userPhone: false, message: false });
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [botField, setBotField] = useState("");

  if (!open) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess(false);
    // Honeypot: if filled, it's a bot
    if (botField) {
      setError("Spam detected. Please try again.");
      return;
    }
    try {
      const res = await fetch("https://formspree.io/f/mwpokkpj", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          phone: userPhone,
          message,
          _gotcha: botField // Formspree honeypot
        }),
      });
      const data = await res.json();
      if (res.ok) {
        setSuccess(true);
        setName("");
        setUserPhone("");
        setMessage("");
      } else if (data && data.errors && data.errors.length > 0) {
        setError(data.errors[0].message);
      } else {
        setError("Something went wrong. Please try again later.");
      }
    } catch {
      setError("Could not send message. Please try again later.");
    }
  };

  const isNameValid = name.trim().length > 1;
  const isPhoneValid = /^\d{10,}$/.test(userPhone.replace(/[^\d]/g, ""));
  const isMessageValid = message.trim().length > 4;
  const canSubmit = isNameValid && isPhoneValid && isMessageValid;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div
        className={`w-full max-w-xl rounded-2xl shadow-2xl relative p-0 overflow-hidden ${theme === 'dark' ? 'bg-gray-900' : 'bg-[var(--card-bg)]'}`}
        style={theme === 'light' ? { boxShadow: 'var(--card-shadow)' } : {}}
      >
        {/* Top Accent Bar */}
        <div className={`h-2 w-full ${theme === 'dark' ? 'bg-gradient-to-r from-emerald-700 via-blue-700 to-fuchsia-700' : 'bg-gradient-to-r from-emerald-400 via-blue-400 to-fuchsia-400'}`}></div>
        {/* Avatar/Icon */}
        <div className="flex justify-center mt-4 mb-2">
          <div className={`rounded-full shadow-lg p-2 ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} border-4 border-emerald-400`}>
            <svg width="40" height="40" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="12" fill="#10B981"/><path d="M8.5 10.5a3.5 3.5 0 117 0v1a3.5 3.5 0 11-7 0v-1z" fill="#fff"/><circle cx="12" cy="9" r="1.5" fill="#fff"/></svg>
          </div>
        </div>
        {/* Close Button */}
        <button onClick={onClose} className="absolute top-6 right-6 bg-gray-100 dark:bg-gray-800 rounded-full p-2 text-gray-400 hover:text-emerald-500 hover:bg-gray-200 dark:hover:bg-gray-700 shadow transition-all" aria-label="Close contact form">
          <span className="text-xl font-bold">&times;</span>
        </button>
        <div className="px-8 sm:px-10 pt-8 pb-8">
          <h2 className={`text-2xl font-extrabold mb-2 text-center tracking-tight ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Contact Me</h2>
          <div className="mb-5 text-center">
            <div className="flex flex-col items-center gap-1">
              <span className="text-base font-semibold text-emerald-600 dark:text-emerald-400">Call or text now:</span>
              <a href={`tel:${PHONE_NUMBER}`} className="text-xl font-bold text-emerald-500 hover:underline tracking-wider">{formatPhone(PHONE_NUMBER)}</a>
            </div>
          </div>
          <div className="mb-3 text-center text-gray-500 dark:text-gray-400 text-sm">or leave a message below</div>
          <form onSubmit={handleSubmit} className="space-y-4" autoComplete="off">
            {/* Honeypot field (hidden from humans) */}
            <div style={{ display: 'none' }}>
              <label htmlFor="website">Website</label>
              <input
                id="website"
                name="website"
                type="text"
                tabIndex={-1}
                autoComplete="off"
                value={botField}
                onChange={e => setBotField(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">Your Name *</label>
              <input
                id="name"
                type="text"
                value={name}
                onChange={e => setName(e.target.value)}
                onBlur={() => setTouched(t => ({ ...t, name: true }))}
                className={`w-full rounded-xl border px-4 py-3 text-base transition focus:ring-2 focus:ring-emerald-400 outline-none ${!isNameValid && touched.name ? 'border-red-400' : 'border-gray-300 dark:border-gray-700'} bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white shadow-sm`}
                placeholder="John Doe"
                required
              />
              {!isNameValid && touched.name && (
                <div className="text-xs text-red-500 mt-1">Please enter your name.</div>
              )}
            </div>
            <div>
              <label htmlFor="userPhone" className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">Your Phone Number *</label>
              <input
                id="userPhone"
                type="tel"
                value={userPhone}
                onChange={e => setUserPhone(e.target.value)}
                onBlur={() => setTouched(t => ({ ...t, userPhone: true }))}
                className={`w-full rounded-xl border px-4 py-3 text-base transition focus:ring-2 focus:ring-emerald-400 outline-none ${!isPhoneValid && touched.userPhone ? 'border-red-400' : 'border-gray-300 dark:border-gray-700'} bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white shadow-sm`}
                placeholder="7025551234"
                required
              />
              {!isPhoneValid && touched.userPhone && (
                <div className="text-xs text-red-500 mt-1">Enter a valid phone number.</div>
              )}
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">Your Message *</label>
              <textarea
                id="message"
                value={message}
                onChange={e => setMessage(e.target.value)}
                onBlur={() => setTouched(t => ({ ...t, message: true }))}
                className={`w-full rounded-xl border px-4 py-3 text-base transition focus:ring-2 focus:ring-emerald-400 outline-none min-h-[90px] ${!isMessageValid && touched.message ? 'border-red-400' : 'border-gray-300 dark:border-gray-700'} bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white shadow-sm`}
                placeholder="Type your message here..."
                required
              />
              {!isMessageValid && touched.message && (
                <div className="text-xs text-red-500 mt-1">Please enter a message.</div>
              )}
            </div>
            {success && (
              <div className="text-green-600 dark:text-green-400 font-semibold animate-fadeIn">Thank you! Your message has been sent.</div>
            )}
            {error && (
              <div className="text-red-600 dark:text-red-400 font-semibold animate-fadeIn">{error}</div>
            )}
            <button
              type="submit"
              disabled={!canSubmit}
              className={`w-full py-3 rounded-xl font-bold text-lg shadow-lg transition-all disabled:opacity-60 disabled:cursor-not-allowed bg-gradient-to-r from-emerald-500 to-blue-500 hover:from-emerald-600 hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 flex items-center justify-center gap-2`}
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactModal;
