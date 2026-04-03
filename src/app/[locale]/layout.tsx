import {Inter} from 'next/font/google';
import {NextIntlClientProvider} from 'next-intl';
import {getMessages, getTranslations} from 'next-intl/server';
import {notFound} from 'next/navigation';
import {routing} from '@/i18n/routing';
import {PostHogProvider} from '@/components/analytics/PostHogProvider';
import '../globals.css';

const inter = Inter({ subsets: ['latin'] });

export async function generateMetadata({
  params
}: {
  params: Promise<{locale: string}>;
}) {
  const { locale } = await params;
  const t = await getTranslations({locale, namespace: 'Metadata'});
  
  return {
    title: t('title'),
    description: t('description'),
    alternates: {
      canonical: `https://luxury-retreat.com/${locale}`,
      languages: {
        'en': 'https://luxury-retreat.com/en',
        'es': 'https://luxury-retreat.com/es',
        'pt': 'https://luxury-retreat.com/pt'
      }
    }
  };
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({locale}));
}

import {LanguageSelector} from '@/components/ui/LanguageSelector';

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{locale: string}>;
}) {
  const { locale } = await params;
  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale} className="scroll-smooth">
      <body className={`${inter.className} min-h-screen bg-stone-50 text-stone-900 antialiased flex flex-col`}>
        <NextIntlClientProvider messages={messages}>
          <PostHogProvider>
            <LanguageSelector />
            {children}
          </PostHogProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
