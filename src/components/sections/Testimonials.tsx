import { Star } from 'lucide-react';
import { useTranslations } from 'next-intl';

export function Testimonials() {
  const t = useTranslations('Testimonials');
  const reviews = [
    {
      name: "Candela",
      date: "Córdoba",
      content: t('review1'),
    },
    {
      name: "Alina",
      date: "Tucumán",
      content: t('review2'),
    }
  ];

  return (
    <section className="py-24 bg-stone-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-4">{t('title')}</h2>
          <p className="text-stone-400 max-w-2xl mx-auto mb-6">{t('description')}</p>
          <div className="flex justify-center items-center gap-2 text-lg font-medium text-stone-100">
            <Star className="w-5 h-5 fill-brand text-brand" />
            <span>5.0</span>
            <span className="text-stone-400 font-normal">· Airbnb</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {reviews.map((review, i) => (
            <div key={i} className="p-8 rounded-2xl bg-stone-900 border border-stone-800">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, idx) => (
                  <Star key={idx} className="w-4 h-4 fill-brand text-brand" />
                ))}
              </div>
              <p className="text-stone-300 mb-6 line-clamp-4">&quot;{review.content}&quot;</p>
              <div>
                <h4 className="font-semibold text-stone-100">{review.name}</h4>
                <span className="text-sm text-stone-400">{review.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
