import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Web Developer Near Me | Elias Musleh – Local, Remote, West Coast Tech Solutions",
  description: "Looking for a web developer near you? Elias Musleh offers local and remote web, game, AI, SaaS, and consulting services for clients in Nevada, California, Oregon, Washington, and across the USA.",
  keywords: [
    "web developer near me", "local web developer", "remote developer", "west coast developer", "las vegas web developer", "los angeles developer", "san francisco developer", "seattle developer", "portland developer", "elias musleh", "hire developer near me"
  ],
  openGraph: {
    title: "Web Developer Near Me | Elias Musleh – Local, Remote, West Coast Tech Solutions",
    description: "Looking for a web developer near you? Elias Musleh offers local and remote web, game, AI, SaaS, and consulting services for clients in Nevada, California, Oregon, Washington, and across the USA.",
    url: "https://eliasmusleh.com/web-developer-near-me",
    type: "website",
    images: [
      {
        url: "/images/services-hero.svg",
        width: 1200,
        height: 630,
        alt: "Web Developer Near Me Elias Musleh"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Web Developer Near Me | Elias Musleh – Local, Remote, West Coast Tech Solutions",
    description: "Looking for a web developer near you? Elias Musleh offers local and remote web, game, AI, SaaS, and consulting services for clients in Nevada, California, Oregon, Washington, and across the USA.",
    images: ["/images/services-hero.svg"]
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "https://eliasmusleh.com/web-developer-near-me" }
};

export default function WebDeveloperNearMeSEO() {
  return (
    <main className="relative max-w-5xl mx-auto px-4 sm:px-6 md:px-8 py-12 bg-white dark:bg-neutral-900 rounded-xl shadow-lg border border-neutral-200 dark:border-neutral-800 overflow-hidden min-h-[70vh] mt-10 mb-20">
      <div className="absolute -top-20 -left-20 w-44 h-44 bg-emerald-100 dark:bg-emerald-900 rounded-full opacity-5 blur-2xl pointer-events-none z-0"></div>
      <div className="absolute -bottom-20 -right-16 w-36 h-36 bg-emerald-200 dark:bg-emerald-800 rounded-full opacity-5 blur-2xl pointer-events-none z-0"></div>
      
      <article className="relative z-10 prose prose-base md:prose-lg max-w-none leading-relaxed text-black dark:text-white">
        <header className="mb-8 border-b border-neutral-200 dark:border-neutral-800 pb-4">
          <h1 className="text-3xl md:text-4xl font-bold leading-tight tracking-tight mb-4">
            Local Web Developer | Remote & On-Site Development
          </h1>
          <p className="text-lg font-medium mt-1 text-neutral-700 dark:text-neutral-300">
            Professional web development services tailored to your location's unique market and business needs
          </p>
        </header>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Find a Web Developer Near You</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p>
                Looking for a web developer near you? I provide specialized web development services that combine the convenience of local expertise with the quality of enterprise-level development. As an experienced web developer serving clients across the West Coast, I deliver custom websites and web applications that are tailored to each location's unique business landscape.
              </p>
              <p className="mt-4">
                Whether you need in-person collaboration in Las Vegas, Los Angeles, San Francisco, Seattle, Portland, or remote services anywhere in the United States, I offer flexible working arrangements to suit your project requirements. My clients benefit from personalized service, quick response times, and a deep understanding of regional markets.
              </p>
            </div>
            <div className="bg-neutral-50 dark:bg-neutral-800 p-6 rounded-lg border border-neutral-200 dark:border-neutral-700">
              <h3 className="text-xl font-bold mb-3">Local Developer Benefits</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  <span>Face-to-face meetings and on-site collaboration</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  <span>Understanding of local business environment</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  <span>Same time zone communication</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  <span>Networking with regional business communities</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Web Development Services By Location</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white dark:bg-neutral-800 rounded-lg border border-neutral-200 dark:border-neutral-700 p-6">
              <h3 className="text-xl font-bold mb-2">Las Vegas Web Development</h3>
              <p>
                Specialized web services for Las Vegas businesses in the hospitality, entertainment, and tourism industries. From hotel booking systems to event platforms, I deliver solutions that cater to Nevada's unique business landscape, with experience working with local casinos, restaurants, and entertainment venues.
              </p>
              <a href="/las-vegas-developer" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 font-medium mt-2 inline-block">Learn more about Las Vegas services →</a>
            </div>
            
            <div className="bg-white dark:bg-neutral-800 rounded-lg border border-neutral-200 dark:border-neutral-700 p-6">
              <h3 className="text-xl font-bold mb-2">Los Angeles Web Development</h3>
              <p>
                Custom web development for LA's entertainment, media, and startup ecosystem. From portfolio sites for creative professionals to complex platforms for media companies, I build web solutions that help Los Angeles businesses stand out in a competitive market.
              </p>
              <a href="/los-angeles-developer" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 font-medium mt-2 inline-block">Learn more about Los Angeles services →</a>
            </div>
            
            <div className="bg-white dark:bg-neutral-800 rounded-lg border border-neutral-200 dark:border-neutral-700 p-6">
              <h3 className="text-xl font-bold mb-2">San Francisco Web Development</h3>
              <p>
                Tech-focused web development for San Francisco's startup and technology sector. With extensive experience working with Bay Area tech companies, I provide scalable web solutions that can grow with your business, from early-stage MVPs to enterprise applications.
              </p>
              <a href="/san-francisco-developer" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 font-medium mt-2 inline-block">Learn more about San Francisco services →</a>
            </div>
            
            <div className="bg-white dark:bg-neutral-800 rounded-lg border border-neutral-200 dark:border-neutral-700 p-6">
              <h3 className="text-xl font-bold mb-2">Seattle Web Development</h3>
              <p>
                Web solutions for Seattle's tech, e-commerce, and manufacturing industries. From complex e-commerce platforms to B2B portals, I deliver web applications that help Seattle businesses operate efficiently and reach new customers in the competitive Pacific Northwest market.
              </p>
              <a href="/seattle-developer" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 font-medium mt-2 inline-block">Learn more about Seattle services →</a>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Web Development Services Offered Locally</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-neutral-800 p-6 rounded-lg border border-neutral-200 dark:border-neutral-700">
              <div className="flex items-center mb-3">
                <svg className="w-6 h-6 text-emerald-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
                <h3 className="text-xl font-bold">Custom Website Development</h3>
              </div>
              <p>Tailored websites designed to meet your specific business needs and local market requirements.</p>
            </div>
            
            <div className="bg-white dark:bg-neutral-800 p-6 rounded-lg border border-neutral-200 dark:border-neutral-700">
              <div className="flex items-center mb-3">
                <svg className="w-6 h-6 text-emerald-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"></path></svg>
                <h3 className="text-xl font-bold">Web Application Development</h3>
              </div>
              <p>Interactive web applications and SaaS platforms built with modern frameworks like React and Next.js.</p>
            </div>
            
            <div className="bg-white dark:bg-neutral-800 p-6 rounded-lg border border-neutral-200 dark:border-neutral-700">
              <div className="flex items-center mb-3">
                <svg className="w-6 h-6 text-emerald-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                <h3 className="text-xl font-bold">E-commerce Development</h3>
              </div>
              <p>Online stores optimized for local customers with secure payment processing and inventory management.</p>
            </div>
            
            <div className="bg-white dark:bg-neutral-800 p-6 rounded-lg border border-neutral-200 dark:border-neutral-700">
              <div className="flex items-center mb-3">
                <svg className="w-6 h-6 text-emerald-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                <h3 className="text-xl font-bold">Local SEO & Performance</h3>
              </div>
              <p>Website optimization for local search results and fast loading times for your regional audience.</p>
            </div>
            
            <div className="bg-white dark:bg-neutral-800 p-6 rounded-lg border border-neutral-200 dark:border-neutral-700">
              <div className="flex items-center mb-3">
                <svg className="w-6 h-6 text-emerald-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"></path></svg>
                <h3 className="text-xl font-bold">Content Management Systems</h3>
              </div>
              <p>Custom CMS development that makes it easy to update your content without technical knowledge.</p>
            </div>
            
            <div className="bg-white dark:bg-neutral-800 p-6 rounded-lg border border-neutral-200 dark:border-neutral-700">
              <div className="flex items-center mb-3">
                <svg className="w-6 h-6 text-emerald-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"></path></svg>
                <h3 className="text-xl font-bold">Ongoing Maintenance</h3>
              </div>
              <p>Regular updates, security patches, and technical support for your web projects with local response times.</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Looking for a Web Developer in Your Area?</h2>
          <p>
            Whether you're looking for a web developer in Las Vegas, Los Angeles, San Francisco, Seattle, Portland, or anywhere on the West Coast, I offer professional web development services tailored to your local business needs. With both remote and on-site options available, we can find the perfect working arrangement for your project.
          </p>
          <p className="mt-4">
            Contact me today to discuss your project requirements and how I can help your business establish a strong online presence in your local market.
          </p>
          
          <div className="mt-8 text-center">
            <a 
              href="/#contact" 
              className="inline-block px-8 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-medium rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg"
            >
              Get a Free Consultation
            </a>
          </div>
        </section>
      </article>
    </main>
  );
}
