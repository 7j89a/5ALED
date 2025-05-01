import React, { useState, useEffect } from 'react';
import { Menu, Watch, X, ShoppingBag, Search, Heart } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { useSearch } from '../../context/SearchContext';
import CartModal from '../ui/CartModal';
import WishlistModal from '../ui/WishlistModal';
import SearchModal from '../ui/SearchModal';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const { items: cartItems } = useCart();
  const { setIsSearchOpen } = useSearch();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <Watch
                size={28}
                className={`${isScrolled ? 'text-amber-600' : 'text-white'}`}
              />
              <div className="flex flex-col items-end">
                <span
                  className={`text-xl font-bold ${
                    isScrolled ? 'text-gray-800' : 'text-white'
                  }`}
                >
                  𝑹𝒂𝒏𝒅𝒐𝒛𝒂𝒔𝒉𝒐𝒑
                </span>
                <span
                  className={`text-sm ${
                    isScrolled ? 'text-gray-600' : 'text-gray-200'
                  }`}
                >
                  متجر ساعات مميزة
                </span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              <a
                href="#"
                className={`font-medium ${
                  isScrolled
                    ? 'text-gray-700 hover:text-amber-600'
                    : 'text-white hover:text-amber-300'
                } transition-colors`}
              >
                الرئيسية
              </a>
              <a
                href="#watches"
                className={`font-medium ${
                  isScrolled
                    ? 'text-gray-700 hover:text-amber-600'
                    : 'text-white hover:text-amber-300'
                } transition-colors`}
              >
                المنتجات
              </a>
              <a
                href="#featured"
                className={`font-medium ${
                  isScrolled
                    ? 'text-gray-700 hover:text-amber-600'
                    : 'text-white hover:text-amber-300'
                } transition-colors`}
              >
                ساعات مميزة
              </a>
              <a
                href="#contact"
                className={`font-medium ${
                  isScrolled
                    ? 'text-gray-700 hover:text-amber-600'
                    : 'text-white hover:text-amber-300'
                } transition-colors`}
              >
                تواصل معنا
              </a>
            </nav>

            {/* Icons */}
            <div className="flex items-center gap-4">
              <button
                onClick={() => setIsSearchOpen(true)}
                className={`p-2 rounded-full ${
                  isScrolled
                    ? 'text-gray-700 hover:bg-gray-100'
                    : 'text-white hover:bg-white/10'
                } transition-colors`}
              >
                <Search size={20} />
              </button>

              <button
                onClick={() => setIsWishlistOpen(true)}
                className={`p-2 rounded-full ${
                  isScrolled
                    ? 'text-gray-700 hover:bg-gray-100'
                    : 'text-white hover:bg-white/10'
                } transition-colors`}
              >
                <Heart size={20} />
              </button>

              <button
                onClick={() => setIsCartOpen(true)}
                className={`p-2 rounded-full relative ${
                  isScrolled
                    ? 'text-gray-700 hover:bg-gray-100'
                    : 'text-white hover:bg-white/10'
                } transition-colors`}
              >
                <ShoppingBag size={20} />
                {cartItems.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-amber-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                    {cartItems.length}
                  </span>
                )}
              </button>

              {/* Mobile menu toggle */}
              <button
                className="md:hidden p-2"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? (
                  <X
                    size={24}
                    className={isScrolled ? 'text-gray-700' : 'text-white'}
                  />
                ) : (
                  <Menu
                    size={24}
                    className={isScrolled ? 'text-gray-700' : 'text-white'}
                  />
                )}
              </button>
            </div>
          </div>

          {/* Mobile navigation */}
          {isMenuOpen && (
            <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-md p-4 flex flex-col gap-4 text-right">
              <a
                href="#"
                className="block p-2 text-gray-700 hover:bg-gray-100 rounded-md"
              >
                الرئيسية
              </a>
              <a
                href="#watches"
                className="block p-2 text-gray-700 hover:bg-gray-100 rounded-md"
              >
                المنتجات
              </a>
              <a
                href="#featured"
                className="block p-2 text-gray-700 hover:bg-gray-100 rounded-md"
              >
                ساعات مميزة
              </a>
              <a
                href="#contact"
                className="block p-2 text-gray-700 hover:bg-gray-100 rounded-md"
              >
                تواصل معنا
              </a>
            </div>
          )}
        </div>
      </header>

      <CartModal isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
      <WishlistModal
        isOpen={isWishlistOpen}
        onClose={() => setIsWishlistOpen(false)}
      />
      <SearchModal />
    </>
  );
};

export default Header;