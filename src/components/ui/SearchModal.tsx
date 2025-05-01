import React, { useEffect, useRef } from 'react';
import { X, Search as SearchIcon } from 'lucide-react';
import { useSearch } from '../../context/SearchContext';
import { watches } from '../../data/watches';
import { Watch } from '../../types';

const SearchModal: React.FC = () => {
  const { searchQuery, setSearchQuery, isSearchOpen, setIsSearchOpen } = useSearch();
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isSearchOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isSearchOpen]);

  const filteredWatches = watches.filter(watch =>
    watch.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    watch.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleWatchClick = (watch: Watch) => {
    setIsSearchOpen(false);
    setSearchQuery('');
    
    // Find the watch element and scroll to it
    const watchElement = document.getElementById(`watch-${watch.id}`);
    if (watchElement) {
      watchElement.scrollIntoView({ behavior: 'smooth' });
      // Add a highlight effect
      watchElement.classList.add('ring-4', 'ring-amber-500', 'ring-opacity-50');
      setTimeout(() => {
        watchElement.classList.remove('ring-4', 'ring-amber-500', 'ring-opacity-50');
      }, 2000);
    }
  };

  return isSearchOpen ? (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-start justify-center pt-20">
      <div className="bg-white w-full max-w-2xl rounded-lg shadow-xl mx-4">
        <div className="p-4 border-b flex items-center">
          <SearchIcon size={20} className="text-gray-400" />
          <input
            ref={inputRef}
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="ابحث عن الساعات..."
            className="flex-1 mx-4 p-2 outline-none text-right"
          />
          <button
            onClick={() => setIsSearchOpen(false)}
            className="text-gray-500 hover:text-gray-700"
          >
            <X size={20} />
          </button>
        </div>
        
        <div className="max-h-96 overflow-y-auto p-4">
          {searchQuery && filteredWatches.map((watch: Watch) => (
            <div 
              key={watch.id} 
              onClick={() => handleWatchClick(watch)}
              className="flex items-center gap-4 p-2 hover:bg-gray-50 rounded-lg cursor-pointer transition-all duration-200"
            >
              <img src={watch.image} alt={watch.name} className="w-16 h-16 object-cover rounded" />
              <div className="flex-1 text-right">
                <h4 className="font-semibold text-gray-800">{watch.name}</h4>
                <p className="text-gray-600 text-sm">{watch.price} دينار</p>
              </div>
            </div>
          ))}
          
          {searchQuery && filteredWatches.length === 0 && (
            <p className="text-center text-gray-500 py-4">لا توجد نتائج للبحث</p>
          )}
        </div>
      </div>
    </div>
  ) : null;
};

export default SearchModal;