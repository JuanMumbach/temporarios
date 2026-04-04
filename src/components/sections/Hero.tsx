'use client';

import { motion } from 'framer-motion';
import { BookingCTA } from '@/components/ui/BookingCTA';
import { useTranslations } from 'next-intl';

export function Hero() {
  const t = useTranslations('Hero');

  return (
    <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 bg-stone-900 z-0">
        <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 to-transparent z-10" />
        <img 
          src="/images/hero.png" 
          alt="Luxury Villa" 
          className="w-full h-full object-cover opacity-80"
        />
      </div>

      <div className="relative z-20 text-center px-4 max-w-4xl mx-auto mt-20">
        <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ duration: 0.5 }}
           className="inline-block bg-white/20 backdrop-blur-md px-4 py-2 rounded-full text-white text-sm font-medium mb-6"
        >
          {t('badge')}
        </motion.div>

        <motion.h1 
          className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {t('title')}
        </motion.h1>
        
        <motion.p 
          className="text-lg md:text-xl text-stone-200 mb-10 max-w-2xl mx-auto"
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
          <BookingCTA className="bg-white text-stone-900 hover:bg-stone-100" />
          <p className="mt-4 text-stone-300 text-sm">{t('reviews')}</p>
        </motion.div>
      </div>
    </section>
  );
}
