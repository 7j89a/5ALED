export interface Watch {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'men' | 'women' | 'sport';
  image: string;
  featured?: boolean;
}

export interface CartItem {
  watch: Watch;
  quantity: number;
}

export interface WishlistItem {
  watch: Watch;
}

export interface SearchContextType {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  isSearchOpen: boolean;
  setIsSearchOpen: (isOpen: boolean) => void;
}

export interface CartContextType {
  items: CartItem[];
  addItem: (watch: Watch) => void;
  removeItem: (watchId: string) => void;
  updateQuantity: (watchId: string, quantity: number) => void;
  clearCart: () => void;
  total: number;
}

export interface WishlistContextType {
  items: WishlistItem[];
  addItem: (watch: Watch) => void;
  removeItem: (watchId: string) => void;
  isInWishlist: (watchId: string) => boolean;
}