import { Star } from 'lucide-react';

export function Testimonials() {
  const reviews = [
    {
      name: "Sarah Jenkins",
      date: "October 2024",
      content: "Absolutely stunning property! The attention to detail in the design made our weekend getaway perfect. Host was very responsive via WhatsApp.",
    },
    {
      name: "Michael Chen",
      date: "September 2024",
      content: "The location can't be beaten. It was incredibly easy to walk to everything we needed, yet peaceful enough at night to sleep perfectly.",
    },
    {
      name: "Emma Williams",
      date: "August 2024",
      content: "Immaculately clean and beautifully decorated. It really felt like a luxury hotel but with all the comforts of a private home.",
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">What our guests say</h2>
          <div className="flex justify-center items-center gap-2 text-lg font-medium text-stone-900">
            <Star className="w-5 h-5 fill-current text-stone-900" />
            <span>4.96</span>
            <span className="text-stone-500 font-normal">· 124 reviews</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, i) => (
            <div key={i} className="p-8 rounded-2xl bg-stone-50 border border-stone-100">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, idx) => (
                  <Star key={idx} className="w-4 h-4 fill-current text-stone-900" />
                ))}
              </div>
              <p className="text-stone-700 mb-6 line-clamp-4">&quot;{review.content}&quot;</p>
              <div>
                <h4 className="font-semibold text-stone-900">{review.name}</h4>
                <span className="text-sm text-stone-500">{review.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
