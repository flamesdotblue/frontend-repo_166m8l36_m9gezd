import React from 'react';
import { Shield, Wifi, Dumbbell, Car, Sprout } from 'lucide-react';

const items = [
  {
    icon: Shield,
    title: '24/7 Security',
    desc: 'Peace of mind with concierge and smart access control.',
  },
  { icon: Wifi, title: 'Fiber Internet', desc: 'Ultra-fast connectivity for work and entertainment.' },
  { icon: Dumbbell, title: 'Fitness & Wellness', desc: 'State-of-the-art gym, yoga studio, and spa.' },
  { icon: Car, title: 'Private Parking', desc: 'Secure EV-ready parking with direct access.' },
  { icon: Sprout, title: 'Green Spaces', desc: 'Terrace gardens and biophilic common areas.' },
];

const Amenities = () => {
  return (
    <section id="amenities" className="relative z-10 bg-neutral-950 py-20 text-white">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Amenities</h2>
        <p className="mt-2 max-w-2xl text-white/70">
          Designed for modern living with thoughtful features that elevate everyday life.
        </p>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-base font-semibold">{title}</h3>
                  <p className="text-sm text-white/70">{desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Amenities;
