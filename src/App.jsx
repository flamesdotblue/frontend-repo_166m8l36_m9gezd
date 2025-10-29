import React from 'react';
import HeroSection from './components/HeroSection';
import FeaturedListings from './components/FeaturedListings';
import Amenities from './components/Amenities';
import FooterCTA from './components/FooterCTA';

function App() {
  return (
    <div className="min-h-screen bg-neutral-950 antialiased">
      <HeroSection />
      <FeaturedListings />
      <Amenities />
      <FooterCTA />
    </div>
  );
}

export default App;
