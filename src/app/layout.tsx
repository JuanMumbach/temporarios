import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { PostHogProvider } from '@/components/analytics/PostHogProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Luxury Retreat - Premium Short-Term Rental',
  description: 'Experience an unforgettable stay at our premium short-term rental. Perfect location, modern amenities, and comfort guaranteed.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} min-h-screen bg-stone-50 text-stone-900 antialiased flex flex-col`}>
        <PostHogProvider>{children}</PostHogProvider>
      </body>
    </html>
  );
}
