import React from 'react';
import { Star, MapPin } from 'lucide-react';

const listings = [
  {
    id: 1,
    title: 'Skyline Penthouse',
    location: 'Downtown, Metropolis',
    price: '$2,450,000',
    rating: 4.9,
    image:
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=1600&auto=format&fit=crop',
  },
  {
    id: 2,
    title: 'Waterfront Residence',
    location: 'Bay Harbor, Coast City',
    price: '$1,980,000',
    rating: 4.8,
    image:
      'https://images.unsplash.com/photo-1501183638710-841dd1904471?q=80&w=1600&auto=format&fit=crop',
  },
  {
    id: 3,
    title: 'Modern Loft',
    location: 'Arts District, Neo York',
    price: '$1,250,000',
    rating: 4.7,
    image:
      'https://images.unsplash.com/photo-1521783988139-d658c00c81ea?q=80&w=1600&auto=format&fit=crop',
  },
];

const FeaturedListings = () => {
  return (
    <section id="listings" className="relative z-10 bg-neutral-950 py-20 text-white">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Featured Listings</h2>
            <p className="mt-2 text-white/70">Handpicked homes that embody modern luxury.</p>
          </div>
          <button className="hidden rounded-lg border border-white/15 px-4 py-2 text-sm text-white/90 transition hover:bg-white/10 md:block">View all</button>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {listings.map((item) => (
            <article key={item.id} className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5">
              <div className="relative h-64 w-full overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute left-3 top-3 flex items-center gap-1 rounded-full bg-black/60 px-2 py-1 text-xs backdrop-blur">
                  <Star className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" />
                  <span>{item.rating}</span>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <div className="mt-1 flex items-center gap-1 text-sm text-white/70">
                  <MapPin className="h-4 w-4" />
                  <span>{item.location}</span>
                </div>
                <div className="mt-3 flex items-center justify-between">
                  <p className="text-base font-semibold">{item.price}</p>
                  <button className="rounded-lg bg-white px-3 py-2 text-sm font-semibold text-neutral-900 transition hover:bg-white/90">Details</button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedListings;
