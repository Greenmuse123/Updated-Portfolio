import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Game Developer Near Me | Elias Musleh – Indie, Prototyping, West Coast, Remote",
  description: "Looking for a game developer near you? Elias Musleh builds indie games, prototypes, and interactive experiences for clients in Nevada, California, Oregon, Washington, and the USA.",
  keywords: [
    "game developer near me", "indie game developer", "unity developer", "unreal engine developer", "west coast game developer", "las vegas game developer", "los angeles game developer", "seattle game developer", "elias musleh", "hire game developer near me"
  ],
  openGraph: {
    title: "Game Developer Near Me | Elias Musleh – Indie, Prototyping, West Coast, Remote",
    description: "Looking for a game developer near you? Elias Musleh builds indie games, prototypes, and interactive experiences for clients in Nevada, California, Oregon, Washington, and the USA.",
    url: "https://eliasmusleh.com/game-developer-near-me",
    type: "website",
    images: [
      {
        url: "/images/services-hero.svg",
        width: 1200,
        height: 630,
        alt: "Game Developer Near Me Elias Musleh"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Game Developer Near Me | Elias Musleh – Indie, Prototyping, West Coast, Remote",
    description: "Looking for a game developer near you? Elias Musleh builds indie games, prototypes, and interactive experiences for clients in Nevada, California, Oregon, Washington, and the USA.",
    images: ["/images/services-hero.svg"]
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "https://eliasmusleh.com/game-developer-near-me" }
};

export default function GameDeveloperNearMeSEO() {
  return (
    <main className="relative max-w-5xl mx-auto px-4 sm:px-6 md:px-8 py-12 bg-white dark:bg-neutral-900 rounded-xl shadow-lg border border-neutral-200 dark:border-neutral-800 overflow-hidden min-h-[70vh] mt-10 mb-20">
      <div className="absolute -top-20 -left-20 w-44 h-44 bg-blue-100 dark:bg-blue-900 rounded-full opacity-5 blur-2xl pointer-events-none z-0"></div>
      <div className="absolute -bottom-20 -right-16 w-36 h-36 bg-blue-200 dark:bg-blue-800 rounded-full opacity-5 blur-2xl pointer-events-none z-0"></div>
      
      <article className="relative z-10 prose prose-base md:prose-lg max-w-none leading-relaxed text-black dark:text-white">
        <header className="mb-8 border-b border-neutral-200 dark:border-neutral-800 pb-4">
          <h1 className="text-3xl md:text-4xl font-bold leading-tight tracking-tight mb-4">
            Local Game Developer | Indie & Professional Game Creation
          </h1>
          <p className="text-lg font-medium mt-1 text-neutral-700 dark:text-neutral-300">
            Custom game development services for businesses and creators in your local area
          </p>
        </header>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Game Development Services Near You</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p>
                Looking for a professional game developer in your area? As an experienced game developer serving clients across the West Coast, I create engaging games and interactive experiences that captivate audiences and achieve business objectives. My game development services span from casual mobile games to immersive 3D experiences, all built with attention to detail and user engagement as top priorities.
              </p>
              <p className="mt-4">
                Whether you need Unity development in Las Vegas, interactive marketing games in Los Angeles, or educational gaming experiences in Seattle, I provide both local and remote game development services tailored to your specific requirements. Local clients benefit from in-person collaboration, rapid prototyping sessions, and hands-on testing throughout the development process.
              </p>
            </div>
            <div className="bg-neutral-50 dark:bg-neutral-800 p-6 rounded-lg border border-neutral-200 dark:border-neutral-700">
              <h3 className="text-xl font-bold mb-3">Regional Game Development Focus</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-blue-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  <span><strong>Las Vegas:</strong> Casino-themed games, hospitality training simulations</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-blue-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  <span><strong>Los Angeles:</strong> Entertainment tie-ins, narrative-driven experiences</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-blue-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  <span><strong>San Francisco:</strong> Tech startup gamification, indie game publishing</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-blue-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  <span><strong>Seattle:</strong> Educational games, serious games for corporate training</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Game Development Services</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-neutral-800 rounded-lg border border-neutral-200 dark:border-neutral-700 p-6 flex flex-col">
              <div className="flex items-center mb-4">
                <span className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900 mr-3">
                  <svg className="w-5 h-5 text-blue-600 dark:text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"></path></svg>
                </span>
                <h3 className="text-xl font-bold">Unity Game Development</h3>
              </div>
              <p className="mb-4">Professional Unity development for 2D and 3D games across mobile, web, and PC platforms, with a focus on performance and engaging gameplay.</p>
              <p className="mt-auto text-sm text-neutral-500 dark:text-neutral-400">Popular in: All West Coast regions</p>
            </div>
            
            <div className="bg-white dark:bg-neutral-800 rounded-lg border border-neutral-200 dark:border-neutral-700 p-6 flex flex-col">
              <div className="flex items-center mb-4">
                <span className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900 mr-3">
                  <svg className="w-5 h-5 text-blue-600 dark:text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"></path></svg>
                </span>
                <h3 className="text-xl font-bold">Interactive Marketing Games</h3>
              </div>
              <p className="mb-4">Branded game experiences that engage customers, promote products, and collect valuable marketing data through playful interactions.</p>
              <p className="mt-auto text-sm text-neutral-500 dark:text-neutral-400">Popular in: Los Angeles, San Francisco, Las Vegas</p>
            </div>
            
            <div className="bg-white dark:bg-neutral-800 rounded-lg border border-neutral-200 dark:border-neutral-700 p-6 flex flex-col">
              <div className="flex items-center mb-4">
                <span className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900 mr-3">
                  <svg className="w-5 h-5 text-blue-600 dark:text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path></svg>
                </span>
                <h3 className="text-xl font-bold">Mobile Game Development</h3>
              </div>
              <p className="mb-4">iOS and Android game development with cross-platform capabilities, optimized for different screen sizes and device performance.</p>
              <p className="mt-auto text-sm text-neutral-500 dark:text-neutral-400">Popular in: All locations, especially San Francisco</p>
            </div>
            
            <div className="bg-white dark:bg-neutral-800 rounded-lg border border-neutral-200 dark:border-neutral-700 p-6 flex flex-col">
              <div className="flex items-center mb-4">
                <span className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900 mr-3">
                  <svg className="w-5 h-5 text-blue-600 dark:text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path></svg>
                </span>
                <h3 className="text-xl font-bold">Game Prototyping</h3>
              </div>
              <p className="mb-4">Rapid development of game prototypes to test mechanics, validate concepts, and secure funding for larger game projects.</p>
              <p className="mt-auto text-sm text-neutral-500 dark:text-neutral-400">Popular in: Seattle, San Francisco, Portland</p>
            </div>
            
            <div className="bg-white dark:bg-neutral-800 rounded-lg border border-neutral-200 dark:border-neutral-700 p-6 flex flex-col">
              <div className="flex items-center mb-4">
                <span className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900 mr-3">
                  <svg className="w-5 h-5 text-blue-600 dark:text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"></path></svg>
                </span>
                <h3 className="text-xl font-bold">Monetization Strategy</h3>
              </div>
              <p className="mb-4">Strategic implementation of revenue models including in-app purchases, subscriptions, and advertising to maximize game profitability.</p>
              <p className="mt-auto text-sm text-neutral-500 dark:text-neutral-400">Popular in: Los Angeles, Las Vegas</p>
            </div>
            
            <div className="bg-white dark:bg-neutral-800 rounded-lg border border-neutral-200 dark:border-neutral-700 p-6 flex flex-col">
              <div className="flex items-center mb-4">
                <span className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900 mr-3">
                  <svg className="w-5 h-5 text-blue-600 dark:text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                </span>
                <h3 className="text-xl font-bold">Educational Games</h3>
              </div>
              <p className="mb-4">Purpose-built educational games and simulations that make learning engaging while delivering measurable educational outcomes.</p>
              <p className="mt-auto text-sm text-neutral-500 dark:text-neutral-400">Popular in: Seattle, Portland, San Diego</p>
            </div>
          </div>
        </section>
        
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Local Game Development Success Stories</h2>
          
          <div className="bg-white dark:bg-neutral-800 rounded-lg border border-neutral-200 dark:border-neutral-700 p-6 mb-6">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-xl font-bold mb-1">Las Vegas Casino Training Game</h3>
                <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-3">Major Casino Group, Las Vegas</p>
              </div>
              <span className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm font-medium rounded-full">Training Simulation</span>
            </div>
            <p>
              Developed an interactive training simulation for new casino staff that gamified the learning process for table games, customer service protocols, and security procedures. The game-based approach reduced training time by 30% while improving knowledge retention and staff confidence in real-world scenarios.
            </p>
          </div>
          
          <div className="bg-white dark:bg-neutral-800 rounded-lg border border-neutral-200 dark:border-neutral-700 p-6 mb-6">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-xl font-bold mb-1">Los Angeles Film Promotion Game</h3>
                <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-3">Entertainment Studio, Los Angeles</p>
              </div>
              <span className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm font-medium rounded-full">Marketing Game</span>
            </div>
            <p>
              Created a companion mobile game for a major film release that extended the movie universe and drove audience engagement before and after viewing. The game generated over 500,000 downloads, significantly boosted social media mentions, and provided valuable audience data through gameplay analytics.
            </p>
          </div>
          
          <div className="bg-white dark:bg-neutral-800 rounded-lg border border-neutral-200 dark:border-neutral-700 p-6">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-xl font-bold mb-1">Seattle Educational Math Game</h3>
                <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-3">EdTech Startup, Seattle</p>
              </div>
              <span className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm font-medium rounded-full">Educational Game</span>
            </div>
            <p>
              Designed and developed a math learning game for middle school students that made complex concepts accessible through interactive puzzles and progression systems. The game was adopted by multiple school districts across Washington state and demonstrated measurable improvements in student test scores and engagement with math subjects.
            </p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Why Choose a Local Game Developer?</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-3">Benefits of Working Locally</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-blue-600 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                  <span><strong>Collaborative Development:</strong> In-person design sessions and playtesting for faster iteration and better results.</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-blue-600 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                  <span><strong>Cultural Relevance:</strong> Games that resonate with local audiences and reflect regional preferences.</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-blue-600 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                  <span><strong>Local Testing Resources:</strong> Access to local testing groups and regional feedback before launch.</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-3">My Game Development Process</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-blue-600 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                  <span><strong>Player-Centered Design:</strong> Creating games with audience engagement as the core focus.</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-blue-600 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                  <span><strong>Rapid Prototyping:</strong> Quick development of core mechanics to validate concepts before full production.</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-blue-600 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                  <span><strong>Data-Driven Iteration:</strong> Using analytics and player feedback to continuously refine gameplay.</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Ready to Create Your Game with a Local Developer?</h2>
          <p>
            Whether you're in Las Vegas, Los Angeles, San Francisco, Seattle, or anywhere on the West Coast, I offer professional game development services tailored to your specific needs and audience. With options for both in-person collaboration and remote development, we can create the perfect working arrangement for your project.
          </p>
          <p className="mt-4">
            Contact me today to discuss your game project and explore how we can create an engaging, memorable gaming experience that achieves your business or creative objectives.
          </p>
          
          <div className="mt-8 text-center">
            <a 
              href="/#contact" 
              className="inline-block px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg"
            >
              Start Your Game Project
            </a>
          </div>
        </section>
      </article>
    </main>
  );
}
