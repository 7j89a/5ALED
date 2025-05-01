import React, { createContext, useContext, useState, useEffect } from 'react';
import { Watch, WishlistItem, WishlistContextType } from '../types';

const WishlistContext = createContext<WishlistContextType | undefined>(undefined);

export const WishlistProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<WishlistItem[]>(() => {
    const savedWishlist = localStorage.getItem('wishlist');
    return savedWishlist ? JSON.parse(savedWishlist) : [];
  });

  useEffect(() => {
    localStorage.setItem('wishlist', JSON.stringify(items));
  }, [items]);

  const addItem = (watch: Watch) => {
    setItems(currentItems => {
      const exists = currentItems.some(item => item.watch.id === watch.id);
      if (!exists) {
        return [...currentItems, { watch }];
      }
      return currentItems;
    });
  };

  const removeItem = (watchId: string) => {
    setItems(currentItems => currentItems.filter(item => item.watch.id !== watchId));
  };

  const isInWishlist = (watchId: string) => {
    return items.some(item => item.watch.id === watchId);
  };

  return (
    <WishlistContext.Provider value={{ items, addItem, removeItem, isInWishlist }}>
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => {
  const context = useContext(WishlistContext);
  if (context === undefined) {
    throw new Error('useWishlist must be used within a WishlistProvider');
  }
  return context;
};