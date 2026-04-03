import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  // In a real app with dynamic pages you'd fetch routes here
  return [
    {
      url: 'https://www.yourdomain.com', // Replace with your actual domain
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
  ];
}
