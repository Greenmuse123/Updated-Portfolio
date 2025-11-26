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
    let changefreq = 'monthly';
    
    if (path === '/') {
      priority = 1.0;
      changefreq = 'weekly';
    }
    else if (path === '/services') {
      priority = 0.9;
      changefreq = 'weekly';
    }
    else if (path.includes('-developer')) {
      priority = 0.8;
      changefreq = 'monthly';
    }
    else if (path.includes('ai-automation')) {
      priority = 0.8;
      changefreq = 'weekly';
    }
    else if (path.includes('saas-consulting')) {
      priority = 0.8;
      changefreq = 'weekly';
    }
    else if (path.startsWith('/blog/')) {
      priority = 0.75;  // INCREASED FROM 0.6
      changefreq = 'weekly';  // CHANGED FROM monthly
    }

    // Current date for lastmod
    const lastmod = new Date().toISOString();

    return {
      loc: path,
      changefreq: changefreq,
      priority: priority,
      lastmod: lastmod,
      alternateRefs: config.alternateRefs ?? [],
    }
  }
}
