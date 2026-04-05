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
          <div className="flex flex-wrap gap-4 justify-center">
            <BookingCTA />
            <a
              href="https://www.airbnb.com.ar/rooms/1630776248297824129?guests=1&adults=1&s=67&unique_share_id=4780d836-d736-41a9-b286-303b07d4b265"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-2 text-sm font-medium text-white transition-all bg-stone-800/50 backdrop-blur-sm border border-stone-700 rounded-full hover:bg-stone-700/50 focus:ring-2 focus:ring-stone-200 focus:outline-none cursor-pointer group"
            >
              <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 fill-current transition-transform group-hover:scale-110" aria-hidden="true" fillRule="evenodd">
                <path d="M16 31c-3.48 0-6.358-2.416-6.358-6.478 0-1.141.27-2.189.89-3.756l.156-.391c1.058-2.531 5.027-10.687 7.1-14.836l.533-1.025C19.463 1.963 20.918 1 22.926 1c2.008 0 3.463.963 4.751 3.269l.533 1.025c1.954 3.83 6.114 12.54 7.1 14.836l.145.353c.667 1.591.91 2.472.96 3.396l.01.415.001.228c0 4.062-2.877 6.478-6.357 6.478-2.224 0-4.556-1.258-6.709-3.386l-.257-.26-.172-.179h-.011l-.176.185c-2.044 2.1-4.392 3.42-6.72 3.42zM22.926 3c-1.239 0-2.053.539-2.987 2.21l-.523 1.008c-1.926 3.776-6.06 12.43-7.031 14.692l-.145.352c-.533 1.341-.74 2.15-.74 2.973 0 2.536 1.705 4.478 4.358 4.478 1.63 0 3.32-1.029 5.041-2.775L22.926 23.423l1.897 1.91c1.721 1.743 3.407 2.774 5.037 2.774 2.654 0 4.49-1.942 4.49-4.478 0-.825-.213-1.637-.754-3c-.1-.24-.2-.488-.308-.748l-.136-.328c-.985-2.261-5.196-10.857-6.728-13.851l-0.523-1.123c-0.934-1.671-1.748-2.21-2.987-2.21zM22.926 15.484a4.487 4.487 0 1 0 0 8.974 4.487 4.487 0 0 0 0-8.974zm0 6.974a2.487 2.487 0 1 1 0-4.974 2.487 2.487 0 0 1 0 4.974z" transform="translate(-6.926, 0)"></path>
              </svg>
              {t('airbnb')}
            </a>
            <a
              href="https://www.booking.com/Share-D1Mk1T"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-2 text-sm font-medium text-white transition-all bg-stone-800/50 backdrop-blur-sm border border-stone-700 rounded-full hover:bg-stone-700/50 focus:ring-2 focus:ring-stone-200 focus:outline-none cursor-pointer group"
            >
              <svg viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 fill-current transition-transform group-hover:scale-110" aria-hidden="true">
                <path d="M0 0h128v128H0z" fill="none"/>
                <path d="M12.5 30h37.4c16.2 0 25.2 8.7 25.2 21.3 0 7.8-3.7 13.7-10.7 17.5 9 3.5 13.8 11.1 13.8 20.3 0 14.6-11 23.9-28.7 23.9H12.5V30zm20 31.7h18.1c6 0 9.2-3.2 9.2-8.3s-3.2-8.4-9.2-8.4H32.5v16.7zm0 36h20.7c7.4 0 11.5-4 11.5-10 0-6-4.1-9.9-11.5-9.9H32.5v19.9z" fill="currentColor"/>
              </svg>
              {t('booking')}
            </a>
          </div>
          <p className="mt-4 text-stone-300 text-sm">{t('reviews')}</p>
        </motion.div>
      </div>
    </section>
  );
}
