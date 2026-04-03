"use client";

import { useLocale } from 'next-intl';
import { usePathname, useRouter } from '@/i18n/routing';
import { useTransition, useState } from 'react';
import { Globe } from 'lucide-react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

const LOCALES = [
  { code: 'es', label: 'ES' },
  { code: 'pt', label: 'PT' },
  { code: 'en', label: 'EN' }
];

export function LanguageSelector() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();
  const [isOpen, setIsOpen] = useState(false);

  const onChange = (nextLocale: string) => {
    setIsOpen(false);
    startTransition(() => {
      router.replace(pathname, { locale: nextLocale });
    });
  };

  return (
    <div className="fixed top-4 right-4 z-50">
      <div className="relative">
        <button
          onClick={() => setIsOpen(!isOpen)}
          disabled={isPending}
          className="flex items-center gap-2 px-3 py-2 bg-white/90 backdrop-blur-md rounded-full border border-stone-200 shadow-sm hover:shadow-md transition-all text-sm font-medium text-stone-700"
        >
          <Globe className="w-4 h-4 text-stone-500" />
          <span>{locale.toUpperCase()}</span>
        </button>

        {isOpen && (
          <div className="absolute top-full right-0 mt-2 bg-white border border-stone-200 rounded-xl shadow-lg p-1 min-w-[100px] flex flex-col overflow-hidden animate-in fade-in slide-in-from-top-2">
            {LOCALES.map((l) => (
              <button
                key={l.code}
                onClick={() => onChange(l.code)}
                className={twMerge(
                  "px-4 py-2 text-sm text-left rounded-lg transition-colors hover:bg-stone-100",
                  locale === l.code && "bg-stone-100 font-semibold text-stone-900"
                )}
              >
                {l.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
