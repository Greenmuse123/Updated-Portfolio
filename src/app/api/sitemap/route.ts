import { NextResponse } from 'next/server';

export async function GET() {
  // Base URL for your site
  const baseUrl = 'https://eliasmusleh.com';
  
  // Collect all your routes - this could be automated with fs.readdir
  // but for now we'll manually list important routes
  const routes = [
    '',
    '/about',
    '/services',
    '/contact',
    '/blog',
    '/orange-county-developer',
    '/las-vegas-developer',
    '/henderson-developer',
    '/los-angeles-developer',
    '/blog/top-web-development-mistakes-las-vegas-startups',
    // Add all your blog routes here
    '/blog/ai-automation-west-coast-small-business',
    '/blog/best-tech-solutions-restaurants-bars-henderson',
    '/blog/building-scalable-business-website-las-vegas',
    // Add more routes as needed
  ];

  // Generate sitemap XML
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${routes.map(route => {
        // Priority based on route importance
        let priority = '0.7';
        if (route === '') priority = '1.0';
        if (route.startsWith('/blog/')) priority = '0.8';
        if (route.includes('las-vegas')) priority = '0.9';
        
        return `
          <url>
            <loc>${baseUrl}${route}</loc>
            <lastmod>${new Date().toISOString()}</lastmod>
            <changefreq>${route.includes('blog') ? 'weekly' : 'monthly'}</changefreq>
            <priority>${priority}</priority>
          </url>`;
      }).join('')}
    </urlset>`;

  // Return the XML with the correct content type
  return new NextResponse(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=86400, s-maxage=86400'
    }
  });
}
