/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://eliasmusleh.com',
  generateRobotsTxt: true,
  sitemapSize: 7000,
  exclude: ['/_*', '/api/*'],
  robotsTxtOptions: {
    additionalSitemaps: [],
  },
  changefreq: 'weekly',
  priority: 0.7,
  transform: async (config, path) => {
    // Custom priority rules
    let priority = 0.7;
    if (path === '/') priority = 1.0;
    else if (path === '/services') priority = 0.9;
    else if (path.includes('-developer')) priority = 0.8;
    else if (path.includes('ai-automation')) priority = 0.8;
    else if (path.includes('saas-consulting')) priority = 0.8;
    else if (path.startsWith('/blog/')) priority = 0.6;

    // Current date for lastmod
    const lastmod = new Date().toISOString();

    return {
      loc: path,
      changefreq: path === '/' || path === '/services' ? 'weekly' : 'monthly',
      priority: priority,
      lastmod: lastmod,
      alternateRefs: config.alternateRefs ?? [],
    }
  }
}
