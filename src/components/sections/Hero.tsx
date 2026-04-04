'use client';

import { motion } from 'framer-motion';
import { BookingCTA } from '@/components/ui/BookingCTA';
import { useTranslations } from 'next-intl';

export function Hero() {
  const t = useTranslations('Hero');

  return (
    <section className="relative min-h-[90vh] md:min-h-screen flex items-center justify-center overflow-hidden py-12">
      {/* Background Image */}
      <div className="absolute inset-0 bg-stone-900 z-0">
        <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 to-transparent z-10" />
        <img
          src="/images/hero.png"
          alt="Luxury Villa"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
        <motion.img
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          src="/images/ocho39.png"
          alt="Ocho39 Logo"
          className="h-32 md:h-48 w-auto mx-auto mb-4 rounded-2xl drop-shadow-lg"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="inline-block bg-brand/90 backdrop-blur-md px-4 py-2 rounded-full text-white text-sm font-medium mb-4"
        >
          {t('badge')}
        </motion.div>

        <motion.h1
          className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {t('title')}
        </motion.h1>

        <motion.p
          className="text-base md:text-xl text-stone-200 mb-6 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          {t('description')}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
        >
          <BookingCTA />
          <p className="mt-4 text-stone-300 text-sm">{t('reviews')}</p>
        </motion.div>
      </div>
    </section>
  );
}
