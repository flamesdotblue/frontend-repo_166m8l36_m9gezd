import React from 'react';
import { MapPin, Home, DollarSign, Search } from 'lucide-react';

const SearchBar = () => {
  return (
    <div className="w-full rounded-2xl border border-white/10 bg-white/5 p-2 backdrop-blur-md">
      <div className="grid grid-cols-1 gap-2 sm:grid-cols-4">
        <div className="flex items-center gap-2 rounded-xl bg-black/30 px-3 py-3 ring-1 ring-white/10">
          <MapPin className="h-4 w-4 text-white/80" />
          <input
            type="text"
            placeholder="Location"
            className="w-full bg-transparent text-sm text-white placeholder-white/50 outline-none"
          />
        </div>
        <div className="flex items-center gap-2 rounded-xl bg-black/30 px-3 py-3 ring-1 ring-white/10">
          <Home className="h-4 w-4 text-white/80" />
          <select className="w-full bg-transparent text-sm text-white outline-none">
            <option className="bg-neutral-900">Apartment</option>
            <option className="bg-neutral-900">Condo</option>
            <option className="bg-neutral-900">Townhouse</option>
            <option className="bg-neutral-900">Villa</option>
          </select>
        </div>
        <div className="flex items-center gap-2 rounded-xl bg-black/30 px-3 py-3 ring-1 ring-white/10">
          <DollarSign className="h-4 w-4 text-white/80" />
          <input
            type="text"
            placeholder="Budget"
            className="w-full bg-transparent text-sm text-white placeholder-white/50 outline-none"
          />
        </div>
        <button className="flex items-center justify-center gap-2 rounded-xl bg-white px-4 py-3 font-semibold text-neutral-900 transition hover:bg-white/90">
          <Search className="h-4 w-4" />
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
