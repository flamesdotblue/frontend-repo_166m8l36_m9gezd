import React from 'react';
import Spline from '@splinetool/react-spline';
import { Search } from 'lucide-react';
import SearchBar from './SearchBar';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-neutral-950 text-white">
      {/* 3D Background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/1VHYoewWfi45VYZ5/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient overlays for contrast */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-neutral-950/70" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col px-6 pb-16 pt-8 sm:px-8 md:pt-10">
        {/* Top bar */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 backdrop-blur">
              <span className="text-xl font-black tracking-tight">RE</span>
            </div>
            <div>
              <p className="text-lg font-semibold">Residency</p>
              <p className="text-xs text-white/70">Modern Living, Redefined</p>
            </div>
          </div>
          <div className="hidden items-center gap-6 md:flex">
            <a href="#listings" className="text-sm text-white/80 transition hover:text-white">Listings</a>
            <a href="#amenities" className="text-sm text-white/80 transition hover:text-white">Amenities</a>
            <a href="#contact" className="text-sm text-white/80 transition hover:text-white">Contact</a>
            <button className="rounded-lg bg-white px-4 py-2 text-sm font-semibold text-neutral-900 shadow/50 transition hover:bg-white/90">Book a Tour</button>
          </div>
        </div>

        {/* Headline */}
        <div className="mt-20 max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs text-white/80 backdrop-blur">
            <Search className="h-3.5 w-3.5" />
            Discover luxury homes with skyline views
          </div>
          <h1 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Elevate your lifestyle in contemporary urban spaces
          </h1>
          <p className="mt-4 max-w-xl text-white/80 md:text-lg">
            Explore curated residences that blend modern design, comfort, and breathtaking city panoramas.
          </p>
        </div>

        {/* Search Bar */}
        <div className="mt-8 max-w-3xl">
          <SearchBar />
          <p className="mt-3 text-xs text-white/70">Popular: Penthouse • Waterfront • Furnished • Pet-friendly</p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
