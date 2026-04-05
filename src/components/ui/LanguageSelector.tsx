"use client";

import { useLocale } from 'next-intl';
import { usePathname, useRouter } from '@/i18n/routing';
import { useTransition, useState } from 'react';
import { Globe } from 'lucide-react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

const LOCALES = [
  {
    code: 'es',
    label: 'ES',
    flag: (
      <svg className="w-5 h-4 rounded-sm shadow-sm" viewBox="0 0 840 540" xmlns="http://www.w3.org/2000/svg">
        <rect width="840" height="540" fill="#74acdf" />
        <rect width="840" height="180" y="180" fill="#fff" />
        <circle cx="420" cy="270" r="45" fill="#f6b40e" />
      </svg>
    )
  },
  {
    code: 'pt',
    label: 'PT',
    flag: (
      <svg className="w-5 h-4 rounded-sm shadow-sm" viewBox="0 0 1000 700" xmlns="http://www.w3.org/2000/svg">
        <rect width="1000" height="700" fill="#009739" />
        <path d="M500 70L930 350L500 630L70 350Z" fill="#ffdf00" />
        <circle cx="500" cy="350" r="175" fill="#002278" />
      </svg>
    )
  },
  {
    code: 'en',
    label: 'EN',
    flag: (
      <svg className="w-5 h-4 rounded-sm shadow-sm" viewBox="0 0 60 30" xmlns="http://www.w3.org/2000/svg">
        <clipPath id="s">
          <path d="M0,0 v30 h60 v-30 z" />
        </clipPath>
        <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" stroke-width="6" />
        <path d="M0,0 L60,30 M60,0 L0,30" stroke="#012169" stroke-width="4" />
        <path d="M30,0 v30 M0,15 h60" stroke="#fff" stroke-width="10" />
        <path d="M30,0 v30 M0,15 h60" stroke="#c8102e" stroke-width="6" />
      </svg>
    )
  }
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

  const currentLocale = LOCALES.find(l => l.code === locale) || LOCALES[0];

  return (
    <div className="fixed top-4 right-4 z-50">
      <div className="relative">
        <button
          onClick={() => setIsOpen(!isOpen)}
          disabled={isPending}
          className="flex items-center gap-2.5 px-3.5 py-1.5 bg-stone-900/80 backdrop-blur-md rounded-full border border-stone-800 shadow-sm hover:shadow-md transition-all text-sm font-medium text-stone-200 cursor-pointer hover:bg-stone-800"
        >
          {currentLocale.flag}
          <span>{currentLocale.label}</span>
        </button>

        {isOpen && (
          <div className="absolute top-full right-0 mt-2 bg-stone-900 border border-stone-800 rounded-xl shadow-lg p-1.5 min-w-[120px] flex flex-col gap-1 overflow-hidden animate-in fade-in slide-in-from-top-2">
            {LOCALES.map((l) => (
              <button
                key={l.code}
                onClick={() => onChange(l.code)}
                className={twMerge(
                  "flex items-center gap-3 px-3 py-2 text-sm text-left rounded-lg transition-colors hover:bg-stone-800 text-stone-400 cursor-pointer",
                  locale === l.code && "bg-stone-800 font-semibold text-stone-50"
                )}
              >
                {l.flag}
                {l.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
