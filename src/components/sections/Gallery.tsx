'use client';

import posthog from 'posthog-js';

export function Gallery() {
  const images = [
    "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1502672260266-1c1de2d9d00c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
  ];

  const handleImageClick = (idx: number) => {
    posthog.capture('gallery_image_clicked', {
      image_index: idx + 1,
      total_images: images.length,
    });
  };

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-center mb-12">Take a tour</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {images.map((src, idx) => (
            <div
              key={idx}
              className="relative aspect-video rounded-xl overflow-hidden bg-stone-100 cursor-pointer"
              onClick={() => handleImageClick(idx)}
            >
              <img
                src={src}
                alt={`Property Photo ${idx + 1}`}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
