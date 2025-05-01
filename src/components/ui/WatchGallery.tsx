import React, { useState } from 'react';
import { Watch } from '../../types';
import WatchCard from './WatchCard';
import CategoryFilter from './CategoryFilter';

interface WatchGalleryProps {
  watches: Watch[];
  onQuickView?: (watch: Watch) => void;
}

const WatchGallery: React.FC<WatchGalleryProps> = ({ watches, onQuickView }) => {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredWatches = activeCategory === 'all' 
    ? watches 
    : watches.filter(watch => watch.category === activeCategory);

  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">معرض الساعات</h2>
          <p className="text-gray-600">استكشف تشكيلتنا الواسعة من الساعات الفاخرة</p>
        </div>

        <CategoryFilter 
          activeCategory={activeCategory} 
          setActiveCategory={setActiveCategory} 
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredWatches.length > 0 ? (
            filteredWatches.map(watch => (
              <WatchCard 
                key={watch.id} 
                watch={watch} 
                onQuickView={onQuickView}
              />
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-gray-500 text-lg">لا توجد ساعات في هذه الفئة حالياً</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default WatchGallery;