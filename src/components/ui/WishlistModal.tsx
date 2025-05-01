import React from 'react';
import { X, Heart, ShoppingBag } from 'lucide-react';
import { useWishlist } from '../../context/WishlistContext';
import { useCart } from '../../context/CartContext';

interface WishlistModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const WishlistModal: React.FC<WishlistModalProps> = ({ isOpen, onClose }) => {
  const { items, removeItem } = useWishlist();
  const { addItem: addToCart } = useCart();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
      <div className="bg-white w-full max-w-md rounded-lg shadow-xl mx-4">
        <div className="p-4 border-b flex items-center justify-between">
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X size={20} />
          </button>
          <div className="flex items-center gap-2">
            <h2 className="text-xl font-bold">المفضلة</h2>
            <Heart size={20} className="text-red-500" />
          </div>
        </div>

        <div className="max-h-96 overflow-y-auto p-4">
          {items.length === 0 ? (
            <p className="text-center text-gray-500 py-8">قائمة المفضلة فارغة</p>
          ) : (
            items.map(item => (
              <div key={item.watch.id} className="flex items-center gap-4 p-2 border-b">
                <img src={item.watch.image} alt={item.watch.name} className="w-20 h-20 object-cover rounded" />
                <div className="flex-1 text-right">
                  <h4 className="font-semibold">{item.watch.name}</h4>
                  <p className="text-amber-600">{item.watch.price} دينار</p>
                  <div className="flex items-center justify-between mt-2">
                    <button
                      onClick={() => removeItem(item.watch.id)}
                      className="text-red-500 hover:text-red-600"
                    >
                      <X size={18} />
                    </button>
                    <button
                      onClick={() => {
                        addToCart(item.watch);
                        onClose();
                      }}
                      className="flex items-center gap-1 text-green-600 hover:text-green-700"
                    >
                      <ShoppingBag size={18} />
                      <span>أضف للسلة</span>
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default WishlistModal