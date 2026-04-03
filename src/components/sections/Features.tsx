import { Wifi, Wind, Car, Tv, Coffee, Utensils } from 'lucide-react';
import { useTranslations } from 'next-intl';

const featureKeys = [
  { key: 'wifi', icon: Wifi },
  { key: 'ac', icon: Wind },
  { key: 'parking', icon: Car },
  { key: 'tv', icon: Tv },
  { key: 'kitchenette', icon: Coffee },
  { key: 'dining', icon: Utensils },
] as const;

export function Features() {
  const t = useTranslations('Features');

  return (
    <section className="py-24 px-4 max-w-6xl mx-auto">
      <div className="mb-16 text-center">
        <span className="text-sm font-semibold text-stone-500 uppercase tracking-wider mb-2 block">{t('badge')}</span>
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">{t('title')}</h2>
        <p className="text-stone-500 max-w-2xl mx-auto">
          {t('description')}
        </p>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-3 gap-y-12 gap-x-8">
        {featureKeys.map((feature, i) => {
          const Icon = feature.icon;
          return (
            <div key={i} className="flex flex-col items-center text-center group">
              <div className="w-16 h-16 rounded-full bg-stone-100 flex items-center justify-center mb-4 transition-colors group-hover:bg-stone-200">
                <Icon className="w-7 h-7 text-stone-700" />
              </div>
              <h3 className="font-medium text-stone-900 mb-2">{t(`items.${feature.key}.title`)}</h3>
              <p className="text-sm text-stone-500">{t(`items.${feature.key}.description`)}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
