import { MapPin } from 'lucide-react';
import { BookingCTA } from '../ui/BookingCTA';

export function Location() {
  return (
    <section className="py-24 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-6">Prime Location</h2>
            <p className="text-lg text-stone-600 mb-8 max-w-lg">
              Nestled in the heart of the city, our property offers the perfect balance of serene escape and vibrant city life. You&apos;re just minutes away from the best restaurants, parks, and attractions.
            </p>
            <div className="space-y-4 mb-10">
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-stone-900 mt-1" />
                <div>
                  <h4 className="font-medium text-stone-900">Downtown District</h4>
                  <p className="text-stone-500">123 Tranquil Lane, Cityville</p>
                </div>
              </div>
            </div>
            
            <BookingCTA phoneNumber="1234567890" message="I'm interested in booking your property!" />
          </div>
          
          <div className="relative aspect-square md:aspect-video lg:aspect-square rounded-2xl overflow-hidden shadow-sm bg-stone-200">
            {/* A static map placeholder image */}
            <img 
              src="https://images.unsplash.com/photo-1524661135-423995f22d0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
              alt="Map Location" 
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
