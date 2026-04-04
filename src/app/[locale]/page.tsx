import { Hero } from '@/components/sections/Hero';
import { Features } from '@/components/sections/Features';
import { Gallery } from '@/components/sections/Gallery';
import { Location } from '@/components/sections/Location';
import { Testimonials } from '@/components/sections/Testimonials';
import { getTranslations } from 'next-intl/server';
import { setRequestLocale } from 'next-intl/server';

export default async function Home({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('Metadata');
  const tFooter = await getTranslations('Footer');

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'LodgingBusiness',
    name: t('title'),
    description: t('description'),
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '123 Tranquil Lane',
      addressLocality: 'Cityville',
      addressRegion: 'CA',
      postalCode: '90001',
      addressCountry: 'US'
    },
    telephone: '+1-234-567-8900',
    priceRange: '$$',
    starRating: {
      '@type': 'Rating',
      ratingValue: '4.96',
      bestRating: '5'
    }
  };

  return (
    <main className="flex flex-col min-h-screen">
      {/* JSON-LD Schema for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <Hero />
      <Features />
      <Gallery />
      <Testimonials />
      <Location />

      {/* Footer */}
      <footer className="py-8 bg-stone-900 text-stone-400 text-center text-sm">
        <p className="text-center">{tFooter('rightsPrefix')} <a href="https://www.linkedin.com/in/juanmumbach" className="text-stone-300 hover:underline">Juan Mumbach</a> {tFooter('rightsSuffix')}. {new Date().getFullYear()}.</p>
      </footer>
    </main>
  );
}
