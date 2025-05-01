import React from 'react';
import HomePage from './pages/HomePage';
import { CartProvider } from './context/CartContext';
import { WishlistProvider } from './context/WishlistContext';
import { SearchProvider } from './context/SearchContext';
import './index.css';

function App() {
  React.useEffect(() => {
    document.documentElement.dir = 'rtl';
    document.title = '𝑹𝒂𝒏𝒅𝒐𝒛𝒂𝒔𝒉𝒐𝒑 | متجر ساعات مميزة';
  }, []);

  return (
    <SearchProvider>
      <CartProvider>
        <WishlistProvider>
          <div className="font-sans">
            <HomePage />
          </div>
        </WishlistProvider>
      </CartProvider>
    </SearchProvider>
  );
}

export default App