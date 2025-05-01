import React, { useState, useEffect } from 'react';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import { Watch } from '../../types';
import WatchCard from './WatchCard';

interface FeaturedWatchesProps {
  watches: Watch[];
  onQuickView?: (watch: Watch) => void;
}

const FeaturedWatches: React.FC<FeaturedWatchesProps> = ({ watches, onQuickView }) => {
  const featuredWatches = watches.filter(watch => watch.featured);
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? featuredWatches.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === featuredWatches.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className="py-16 bg-gray-50" id="featured">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">ساعات مميزة</h2>
          <p className="text-gray-600">تشكيلة متميزة من أحدث الموديلات</p>
        </div>

        <div className="relative">
          <button 
            onClick={prevSlide} 
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 p-2 rounded-full shadow-md hover:bg-white"
          >
            <ChevronLeft size={24} className="text-gray-800" />
          </button>
          
          <button 
            onClick={nextSlide} 
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 p-2 rounded-full shadow-md hover:bg-white"
          >
            <ChevronRight size={24} className="text-gray-800" />
          </button>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-12">
            {featuredWatches.map((watch, index) => (
              <div 
                key={watch.id}
                className={`transition-opacity duration-500 ${
                  index === currentIndex || 
                  index === (currentIndex + 1) % featuredWatches.length || 
                  index === (currentIndex + 2) % featuredWatches.length 
                    ? 'opacity-100' : 'opacity-0 hidden md:block md:opacity-0'
                }`}
              >
                <WatchCard 
                  watch={watch} 
                  onQuickView={onQuickView}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedWatches;