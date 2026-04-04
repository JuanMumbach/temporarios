'use client';

import { useState } from 'react';
import posthog from 'posthog-js';
import { useTranslations } from 'next-intl';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

export function Gallery() {
  const t = useTranslations('Gallery');
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const images = Array.from({ length: 9 }, (_, i) => `/images/${i + 1}.png`);

  const handleImageClick = (idx: number) => {
    posthog.capture('gallery_image_clicked', {
      image_index: idx + 1,
      total_images: images.length,
    });
    setSelectedIndex(idx);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % images.length);
    }
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex - 1 + images.length) % images.length);
    }
  };

  const visibleImages = images.slice(0, 4);

  return (
    <section className="py-24 bg-stone-900 text-center flex flex-col items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <span className="text-sm font-semibold text-stone-400 uppercase tracking-wider mb-2 block">{t('badge')}</span>
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-4">{t('title')}</h2>
        <p className="text-stone-400 max-w-2xl mx-auto mb-12">{t('description')}</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {visibleImages.map((src, idx) => (
            <div
              key={idx}
              className="relative aspect-[4/3] rounded-xl overflow-hidden bg-stone-800 cursor-pointer group"
              onClick={() => handleImageClick(idx)}
            >
              <img
                src={src}
                alt={`Property Photo ${idx + 1}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
            </div>
          ))}
        </div>

        {images.length > 4 && (
          <div className="mt-8">
            <button
              onClick={() => handleImageClick(0)}
              className="inline-flex items-center justify-center px-6 py-3 border border-stone-700 shadow-sm text-base font-medium rounded-md text-stone-200 bg-stone-800 hover:bg-stone-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-stone-500 transition-colors"
            >
              {t('seeMore')} ({images.length})
            </button>
          </div>
        )}
      </div>

      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
            onClick={() => setSelectedIndex(null)}
          >
            <button
              className="absolute top-4 right-4 p-2 text-white/70 hover:text-white transition-colors"
              onClick={() => setSelectedIndex(null)}
            >
              <X className="w-8 h-8" />
            </button>

            <button
              className="absolute left-4 top-1/2 -translate-y-1/2 p-2 text-white/70 hover:text-white transition-colors z-10"
              onClick={handlePrev}
            >
              <ChevronLeft className="w-10 h-10" />
            </button>

            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 p-2 text-white/70 hover:text-white transition-colors z-10"
              onClick={handleNext}
            >
              <ChevronRight className="w-10 h-10" />
            </button>

            <div className="max-w-5xl w-full max-h-[80vh] px-12 outline-none flex items-center justify-center relative">
              <motion.img
                key={selectedIndex}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                src={images[selectedIndex]}
                alt={`Property Photo ${selectedIndex + 1}`}
                className="max-w-full max-h-[80vh] object-contain"
                onClick={(e) => e.stopPropagation()}
              />
            </div>
            
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/70 text-sm">
              {selectedIndex + 1} / {images.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
