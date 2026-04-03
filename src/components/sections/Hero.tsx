'use client';

import { motion } from 'framer-motion';
import { BookingCTA } from '@/components/ui/BookingCTA';

export function Hero() {
  return (
    <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image - In a real app use next/image but for placeholder we use a div with gradient */}
      <div className="absolute inset-0 bg-stone-900 z-0">
        <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 to-transparent z-10" />
        <img 
          src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
          alt="Luxury Villa" 
          className="w-full h-full object-cover opacity-80"
        />
      </div>

      <div className="relative z-20 text-center px-4 max-w-4xl mx-auto mt-20">
        <motion.h1 
          className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Your Private Escape <br /> Awaits
        </motion.h1>
        
        <motion.p 
          className="text-lg md:text-xl text-stone-200 mb-10 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          Discover unparalleled comfort in out luxury rental property. Perfect for those who seek tranquility and modern elegance.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
        >
          <BookingCTA phoneNumber="1234567890" className="bg-white text-stone-900 hover:bg-stone-100" />
        </motion.div>
      </div>
    </section>
  );
}
