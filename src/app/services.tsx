"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from '@/context/ThemeContext';
import ServicesStructuredData from '@/components/ServicesStructuredData'; // Import the ServicesStructuredData component
import ServicesFAQSchema from '@/app/services/faq-schema'; // Import the ServicesFAQSchema component
import ServicesBreadcrumbSchema from '@/app/services/breadcrumb-schema'; // Import the ServicesBreadcrumbSchema component
import ContactModal from '@/components/ContactModal';

const services = [
  {
    icon: "/icons/fullstack.svg",
    title: "Full-Stack Web Development",
    description:
      "End-to-end web solutions tailored to your business goals. From idea to deployment, I handle frontend, backend, and everything in between.",
    bullets: [
      "Responsive UI with React, Vue, or Next.js",
      "Scalable backend with Node.js, Express, or Django",
      "API integration and deployment (AWS, Vercel, etc.)",
      "Database architecture (PostgreSQL, MongoDB)"
    ],
    cta: { text: "Get a Quote", href: "#contact" },
    color: "from-blue-500 to-emerald-400"
  },
  {
    icon: "/icons/game.svg",
    title: "Game Prototyping & Development",
    description:
      "Bringing interactive experiences to life with rapid game development cycles. Ideal for indie studios and prototypes.",
    bullets: [
      "Unity or Unreal Engine workflows",
      "2D/3D prototyping & basic mechanics",
      "UI, asset integration, and testing",
      "Game jam support or MVPs for pitch decks"
    ],
    cta: { text: "Book a Discovery Call", href: "#contact" },
    color: "from-fuchsia-500 to-indigo-400"
  },
  {
    icon: "/icons/ai.svg",
    title: "AI Automation & Tools",
    description:
      "Custom-built AI workflows to save time, reduce errors, and scale operations.",
    bullets: [
      "Workflow automation with Python, Zapier, Make",
      "OpenAI/GPT integration for content, chatbots, etc.",
      "Data processing, scrapers, or task bots",
      "No-code/low-code solutions for speed & scale"
    ],
    cta: { text: "Get a Custom Plan", href: "#contact" },
    color: "from-emerald-500 to-cyan-400"
  },
  {
    icon: "/icons/design.svg",
    title: "UI/UX Design",
    description:
      "Human-centered design that’s as functional as it is beautiful.",
    bullets: [
      "Wireframing & prototyping (Figma, Adobe XD)",
      "User research & experience mapping",
      "Component-based design systems",
      "Handoff-ready assets for dev teams"
    ],
    cta: { text: "View Design Work", href: "#contact" },
    color: "from-pink-500 to-orange-400"
  },
  {
    icon: "/icons/consult.svg",
    title: "Tech Consulting & Collaboration",
    description:
      "Need a tech partner who speaks both strategy and code? I offer flexible consulting services.",
    bullets: [
      "MVP scoping and architecture",
      "Startup or SaaS advisory",
      "Code review or project rescue",
      "Ongoing support & roadmap planning"
    ],
    cta: { text: "Let’s Talk Strategy", href: "#contact" },
    color: "from-yellow-500 to-emerald-400"
  }
];

const reasons = [
  { icon: "🚀", text: "Fast, clean, and scalable code" },
  { icon: "💬", text: "Clear, friendly communication" },
  { icon: "⏰", text: "On-time delivery, always" },
  { icon: "🛠️", text: "Modern tech stack and design trends" },
  { icon: "🤝", text: "Flexible support after launch" }
];

export default function ServicesPage() {
  const { theme } = useTheme();
  const [modalOpen, setModalOpen] = React.useState(false);

  const openContactModal = () => setModalOpen(true);
  const closeContactModal = () => setModalOpen(false);

  return (
    <div className={`min-h-screen w-full transition-colors duration-200 ${theme === 'dark' ? 'bg-gray-900 text-gray-100' : 'bg-[var(--background)] text-[var(--foreground)]'}`}>
      {/* HERO SECTION */}
      <section className="relative flex flex-col items-center justify-center text-center py-12 px-4 sm:px-6 md:px-8">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-blue-600 to-emerald-400 bg-clip-text text-transparent mb-4"
        >
          Tech-Driven Solutions, Built With Purpose.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className={`max-w-2xl mx-auto text-lg sm:text-2xl mb-6 ${theme === 'dark' ? 'text-gray-300 drop-shadow-[0_1px_2px_rgba(0,0,0,0.9)]' : 'text-gray-700'}`}
        >
          From scalable web platforms to automated AI workflows, I bring ideas to life with full-spectrum development and design.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <Link
            href="/#contact"
            className="inline-block px-7 py-3 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white font-semibold text-lg shadow-lg transition-all"
          >
            Let's Build Something
          </Link>
        </motion.div>
        <motion.div
          className="absolute right-0 bottom-0 opacity-30 sm:opacity-60 pointer-events-none select-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.8 }}
        >
          <Image src="/images/services-hero.svg" alt="Tech illustration" width={360} height={180} />
        </motion.div>
      </section>

      {/* SERVICES SECTION */}
      <section className="max-w-5xl mx-auto py-12 px-4 sm:px-6 md:px-8">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 0.6 }}
          className="text-2xl sm:text-3xl font-bold text-center mb-4 ">
          My Services
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-2xl mx-auto text-center  mb-14"
        >
          Specialized technical solutions to help bring your vision to reality
        </motion.p>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, idx) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: idx * 0.12 }}
              className={`rounded-2xl ${theme === 'dark' ? 'bg-gray-800/90 border-gray-700/50' : 'bg-[var(--card-bg)] border-[var(--card-border)]'} 
                          ${theme === 'dark' ? 'shadow-xl shadow-black/20' : 'shadow-md'} 
                          hover:shadow-xl border border-opacity-40 p-7 flex flex-col h-full
                          transition-all duration-300`}
            >
              <div className="flex items-start mb-5">
                <div className={`w-14 h-14 flex items-center justify-center rounded-lg bg-gradient-to-br ${service.color} shadow-md mr-4 flex-shrink-0`}>
                  <Image src={service.icon} alt={service.title} width={32} height={32} className="filter drop-shadow-md" />
                </div>
                <h3 className="text-xl font-bold ">{service.title}</h3>
              </div>
              
              <p className="text-lg  mb-4 text-left">{service.description}</p>
              
              <ul className="mb-6 space-y-2 text-sm  text-left">
                {service.bullets.map((b, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-emerald-400 mt-1">•</span> 
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-auto pt-4">
                <Link
                  href="/#contact"
                  className="inline-block w-full px-7 py-3 rounded-lg font-medium bg-gradient-to-r 
                           from-emerald-500 to-blue-500 text-white shadow-md hover:shadow-lg 
                           hover:from-emerald-600 hover:to-blue-600 focus:outline-none focus:ring-2 
                           focus:ring-emerald-400 focus:ring-offset-2 transition-all text-base
                           text-center"
                >
                  Let's Work Together
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* WHY WORK WITH ME SECTION */}
      <section className="max-w-4xl mx-auto py-16 px-4 sm:px-6 md:px-8">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 0.6 }}
          className="text-2xl sm:text-3xl font-bold text-center mb-4 ">
          Why Teams Love Working With Me
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-2xl mx-auto text-center  mb-10"
        >
          Professional collaboration that delivers results
        </motion.p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-7">
          {reasons.map((reason, idx) => (
            <motion.div
              key={reason.text}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.4, delay: idx * 0.09 }}
              className={`flex items-center gap-4 ${theme === 'dark' ? 'bg-gray-800/90 border-gray-700/50' : 'bg-[var(--card-bg)] border-[var(--card-border)]'} 
                ${theme === 'dark' ? 'shadow-lg shadow-black/10' : 'shadow-sm'} 
                rounded-xl p-5 text-lg font-medium hover:shadow-lg hover:translate-y-[-2px] transition-all`}
            >
              <span className="text-3xl w-10 h-10 flex items-center justify-center">{reason.icon}</span>
              <span className="">{reason.text}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Enhanced structured data for SEO */}
      <ServicesStructuredData />
      {/* FAQ schema for SEO-rich snippets */}
      <ServicesFAQSchema />
      {/* Breadcrumb schema for SEO sitelinks */}
      <ServicesBreadcrumbSchema />

      {/* CTA SECTION */}
      <section className="py-20 px-4 flex flex-col items-center justify-center">
  <motion.div
    initial={{ opacity: 0, scale: 0.96 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true, amount: 0.4 }}
    transition={{ duration: 0.5 }}
    className="w-full max-w-2xl mx-auto bg-gradient-to-br from-blue-50/80 to-emerald-100/80 dark:from-gray-900/80 dark:to-emerald-900/60 border border-emerald-200 dark:border-emerald-700 rounded-2xl shadow-2xl p-10 flex flex-col items-center text-center"
  >
    <h3 className="text-3xl sm:text-4xl font-extrabold mb-3 bg-gradient-to-r from-blue-600 to-emerald-400 bg-clip-text text-transparent">
  Ready to build <span className="text-emerald-500 dark:text-emerald-400 bg-none text-transparent bg-clip-border" style={{background: 'none'}} >something</span> amazing?
</h3>
    <p className="mb-8 max-w-xl text-lg text-[var(--foreground)] dark:text-[var(--foreground)]">
      Schedule a discovery call to discuss your project and explore how I can help bring your vision to life.
    </p>
    <Link
      href="/#contact"
      className="inline-block px-10 py-4 rounded-full bg-gradient-to-r from-emerald-500 to-blue-600 hover:from-emerald-600 hover:to-blue-700 text-white font-bold text-lg shadow-lg transition-all hover:shadow-2xl hover:scale-105 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2"
    >
      Schedule a Call
    </Link>
  </motion.div>
</section>

      {/* FLOATING CTA BUTTON (MOBILE) */}
      <Link href="/#contact" className="fixed z-50 bottom-6 right-6 sm:hidden bg-emerald-500 hover:bg-emerald-600 text-white px-5 py-3 rounded-full shadow-lg font-semibold text-base transition-all animate-bounce">
        Schedule a Call
      </Link>

      {/* Contact Modal */}
      <ContactModal open={modalOpen} onClose={closeContactModal} />
    </div>
  );
}
