import { MapPin } from 'lucide-react';
import { BookingCTA } from '../ui/BookingCTA';
import { useTranslations } from 'next-intl';

export function Location() {
  const t = useTranslations('Location');
  return (
    <section className="py-24 bg-stone-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-sm font-semibold text-stone-400 uppercase tracking-wider mb-2 block">{t('badge')}</span>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-6">{t('title')}</h2>
            <p className="text-lg text-stone-300 mb-8 max-w-lg">
              {t('description')}
            </p>
            <div className="space-y-4 mb-10">
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-brand mt-1" />
                <div>
                  <h4 className="font-medium text-stone-100">{t('address')}</h4>
                </div>
              </div>
            </div>

            <BookingCTA />
          </div>

          <div className="relative aspect-square md:aspect-video lg:aspect-square rounded-2xl overflow-hidden shadow-sm bg-stone-800">
            <iframe
              src="https://maps.google.com/maps?q=-29.714776,-57.089452&hl=es&z=15&output=embed"
              className="w-full h-full border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Map Location"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
