import React, { useState } from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import HeroSection from '../components/ui/HeroSection';
import FeaturedWatches from '../components/ui/FeaturedWatches';
import WatchGallery from '../components/ui/WatchGallery';
import ContactSection from '../components/ui/ContactSection';
import QuickViewModal from '../components/ui/QuickViewModal';
import { watches } from '../data/watches';
import { Watch } from '../types';

const HomePage: React.FC = () => {
  const [quickViewWatch, setQuickViewWatch] = useState<Watch | null>(null);

  const handleQuickView = (watch: Watch) => {
    setQuickViewWatch(watch);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <div id="featured">
          <FeaturedWatches watches={watches} onQuickView={handleQuickView} />
        </div>
        <div id="watches">
          <WatchGallery watches={watches} onQuickView={handleQuickView} />
        </div>
        <div id="contact">
          <ContactSection />
        </div>
      </main>
      <Footer />
      <QuickViewModal
        watch={quickViewWatch}
        onClose={() => setQuickViewWatch(null)}
      />
    </div>
  );
};

export default HomePage;