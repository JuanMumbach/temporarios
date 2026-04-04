'use client';

import posthog from 'posthog-js';
import { MessageCircle } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useTranslations } from 'next-intl';

interface BookingCTAProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

export function BookingCTA({ className, ...props }: BookingCTAProps) {
  const t = useTranslations('BookingCTA');
  const message = t('whatsappText');

  const handleBookingClick = () => {
    // 1. Track the event in PostHog
    posthog.capture('whatsapp_booking_click', {
      method: 'whatsapp',
      timestamp: new Date().toISOString()
    });

    // 2. Retrieve and Decode WhatsApp Number
    const encoded = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '';
    
    // Obfuscation: Decode the base64 string on click
    let phoneNumber = '';
    try {
      phoneNumber = atob(encoded).replace(/\D/g, '');
    } catch (e) {
      console.error('Error decoding phone number:', e);
      return;
    }

    // 3. Format WhatsApp URL
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    // 4. Open WhatsApp in new tab
    window.open(whatsappUrl, '_blank');
  };

  return (
    <button
      onClick={handleBookingClick}
      className={cn(
        "inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-white transition-all bg-brand rounded-full hover:bg-brand-light focus:ring-4 focus:ring-stone-200 focus:outline-none",
        className
      )}
      {...props}
    >
      <MessageCircle className="w-5 h-5" />
      {t('cta')}
    </button>
  );
}
