import React from 'react';

const Sitemap = () => {
  const sitemapData = [
    {
      loc: 'https://www.lavineasouza.com.br/',
      lastmod: '2025-04-08',
      changefreq: 'daily',
      priority: '1.0',
    },
    {
      loc: 'https://www.lavineasouza.com.br/#cta',
      lastmod: '2025-04-08',
      changefreq: 'monthly',
      priority: '0.8',
    },
    // Adicione outras URLs conforme necessário
  ];

  const renderSitemap = () => {
    return sitemapData.map((url, index) => (
      <url key={index}>
        <loc>{url.loc}</loc>
        <lastmod>{url.lastmod}</lastmod>
        <changefreq>{url.changefreq}</changefreq>
        <priority>{url.priority}</priority>
      </url>
    ));
  };

  return (
    <xml version="1.0" encoding="UTF-8">
      <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        {renderSitemap()}
      </urlset>
    </xml>
  );
};

export default Sitemap;
