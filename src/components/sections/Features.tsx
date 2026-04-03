import { Wifi, Tv, Coffee, Wind, Car, Users } from 'lucide-react';

const features = [
  { name: 'High-speed Wi-Fi', icon: Wifi },
  { name: 'Smart TV (Netflix, Max)', icon: Tv },
  { name: 'Coffee Machine', icon: Coffee },
  { name: 'Air Conditioning', icon: Wind },
  { name: 'Free Parking', icon: Car },
  { name: 'Fits 6 Guests', icon: Users },
];

export function Features() {
  return (
    <section className="py-24 px-4 max-w-6xl mx-auto">
      <div className="mb-16 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">Everything you need</h2>
        <p className="text-stone-500 max-w-2xl mx-auto">
          We&apos;ve thoughtfully equipped our space with premium amenities to ensure your stay is comfortable and worry-free.
        </p>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-3 gap-y-12 gap-x-8">
        {features.map((feature, i) => {
          const Icon = feature.icon;
          return (
            <div key={i} className="flex flex-col items-center text-center group">
              <div className="w-16 h-16 rounded-full bg-stone-100 flex items-center justify-center mb-4 transition-colors group-hover:bg-stone-200">
                <Icon className="w-7 h-7 text-stone-700" />
              </div>
              <h3 className="font-medium text-stone-900">{feature.name}</h3>
            </div>
          );
        })}
      </div>
    </section>
  );
}
