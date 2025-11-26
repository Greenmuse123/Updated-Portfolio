import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';

export const metadata = {
  title: "Elias Musleh | Las Vegas Full Stack Developer & Tech Consultant",
  description: "Las Vegas Full Stack Developer & Tech Consultant. Discover modern web projects, React/Next.js expertise, and custom IT solutions for Nevada businesses.",
  metadataBase: new URL("https://eliasmusleh.com"),
  alternates: {
    canonical: "https://eliasmusleh.com"
  },
  openGraph: {
    title: "Elias Musleh | Las Vegas Full Stack Developer & Tech Consultant",
    description: "Las Vegas Full Stack Developer & Tech Consultant. Discover modern web projects, React/Next.js expertise, and custom IT solutions for Nevada businesses.",
    url: "https://eliasmusleh.com/",
    type: "website",
    images: [
      {
        url: "https://eliasmusleh.com/images/services-hero.svg",
        width: 1200,
        height: 630,
        alt: "Elias Musleh Portfolio"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Elias Musleh | Las Vegas Full Stack Developer & Tech Consultant",
    description: "Las Vegas Full Stack Developer & Tech Consultant. Discover modern web projects, React/Next.js expertise, and custom IT solutions for Nevada businesses.",
    images: ["https://eliasmusleh.com/images/services-hero.svg"]
  }
};

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Projects />
      <Skills />
      <section id="blog" className="mt-10 mb-24">
        <div className="relative max-w-5xl mx-auto px-4 sm:px-8 py-16 bg-gradient-to-br from-emerald-50/80 via-white/90 to-emerald-100/70 dark:from-gray-900 dark:via-gray-950 dark:to-emerald-900/40 rounded-3xl shadow-2xl border border-emerald-100/70 dark:border-emerald-900/40 backdrop-blur-md overflow-hidden">
          {/* Decorative blurred shapes for extra flair */}
          <div className="absolute -top-24 -left-20 w-72 h-72 bg-emerald-200 dark:bg-emerald-800 rounded-full opacity-30 blur-3xl pointer-events-none z-0"></div>
          <div className="absolute -bottom-16 -right-16 w-56 h-56 bg-emerald-400 dark:bg-emerald-600 rounded-full opacity-20 blur-2xl pointer-events-none z-0"></div>
          <div className="relative z-10">
            <h2 className="text-4xl font-extrabold mb-8 text-emerald-700 dark:text-emerald-400 tracking-tight drop-shadow-lg flex items-center gap-3">
              <svg className="w-8 h-8 text-emerald-500 dark:text-emerald-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 21H5a2 2 0 01-2-2V7a2 2 0 012-2h4l2-2 2 2h4a2 2 0 012 2v12a2 2 0 01-2 2z" /></svg>
              Latest Insights & Blog
            </h2>
            <p className="mb-12 text-xl text-gray-700 dark:text-gray-300 font-medium">Expert advice, tech trends, and business strategies from Elias Musleh—tailored for Las Vegas, Nevada, and the West Coast.</p>
            <div className="grid gap-8 md:grid-cols-3">
              {/* Blog Card Example - Replace with dynamic rendering later */}
              <a href="/blog/las-vegas-startups-full-stack-developer" className="group rounded-2xl bg-white/90 dark:bg-gray-900/90 border border-emerald-100 dark:border-emerald-900 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-200 p-6 flex flex-col min-h-[260px] cursor-pointer overflow-hidden">
                <span className="text-lg font-semibold text-emerald-700 group-hover:text-emerald-600 dark:text-emerald-400 dark:group-hover:text-emerald-300 mb-2 transition">Why Las Vegas Startups Need a Full Stack Developer</span>
                <span className="text-sm text-gray-600 dark:text-gray-400 mb-4">Modern Web, AI, and Game Solutions</span>
                <span className="text-gray-500 dark:text-gray-400 flex-1">How a full stack developer can transform your Las Vegas startup with modern web, AI, and game development.</span>
                <span className="mt-4 text-emerald-600 dark:text-emerald-400 font-bold group-hover:underline">Read Article →</span>
              </a>
              <a href="/blog/choosing-web-developer-nevada" className="group rounded-2xl bg-white/90 dark:bg-gray-900/90 border border-emerald-100 dark:border-emerald-900 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-200 p-6 flex flex-col min-h-[260px] cursor-pointer overflow-hidden">
                <span className="text-lg font-semibold text-emerald-700 group-hover:text-emerald-600 dark:text-emerald-400 dark:group-hover:text-emerald-300 mb-2 transition">Choosing the Right Web Developer in Nevada</span>
                <span className="text-sm text-gray-600 dark:text-gray-400 mb-4">What Every Business Owner Should Know</span>
                <span className="text-gray-500 dark:text-gray-400 flex-1">A guide for Nevada business owners on selecting the best web developer for custom solutions, React, Next.js, and more.</span>
                <span className="mt-4 text-emerald-600 dark:text-emerald-400 font-bold group-hover:underline">Read Article →</span>
              </a>
              <a href="/blog/ai-automation-west-coast-small-business" className="group rounded-2xl bg-white/90 dark:bg-gray-900/90 border border-emerald-100 dark:border-emerald-900 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-200 p-6 flex flex-col min-h-[260px] cursor-pointer overflow-hidden">
                <span className="text-lg font-semibold text-emerald-700 group-hover:text-emerald-600 dark:text-emerald-400 dark:group-hover:text-emerald-300 mb-2 transition">AI Automation for Small Businesses</span>
                <span className="text-sm text-gray-600 dark:text-gray-400 mb-4">How Elias Musleh Delivers Scalable Results in the West Coast</span>
                <span className="text-gray-500 dark:text-gray-400 flex-1">Discover how AI automation and custom GPT solutions can help West Coast small businesses grow and scale.</span>
                <span className="mt-4 text-emerald-600 dark:text-emerald-400 font-bold group-hover:underline">Read Article →</span>
              </a>
            </div>
            <div className="mt-12 text-center">
              <a href="/blog" className="inline-block px-10 py-3 rounded-full bg-emerald-600 text-white font-semibold shadow hover:bg-emerald-700 transition text-lg">View All Blog Posts</a>
            </div>
          </div>
        </div>
      </section>
      <Contact />
    </main>
  );
}
