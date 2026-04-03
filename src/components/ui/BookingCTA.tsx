'use client';

import posthog from 'posthog-js';
import { MessageCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

interface BookingCTAProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  phoneNumber: string;
  message?: string;
}

export function BookingCTA({ className, phoneNumber, message = "Hi! I'm interested in booking a stay.", ...props }: BookingCTAProps) {
  const handleBookingClick = () => {
    // 1. Track the event in PostHog
    posthog.capture('whatsapp_booking_click', {
      method: 'whatsapp',
      timestamp: new Date().toISOString()
    });

    // 2. Format WhatsApp URL
    // Remove any non-numeric characters from the phone number
    const cleanPhone = phoneNumber.replace(/\D/g, '');
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${cleanPhone}?text=${encodedMessage}`;

    // 3. Open WhatsApp in new tab
    window.open(whatsappUrl, '_blank');
  };

  return (
    <button
      onClick={handleBookingClick}
      className={cn(
        "inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-white transition-all bg-stone-900 rounded-full hover:bg-stone-800 focus:ring-4 focus:ring-stone-200 focus:outline-none",
        className
      )}
      {...props}
    >
      <MessageCircle className="w-5 h-5" />
      Book via WhatsApp
    </button>
  );
}
