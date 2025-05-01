import React from 'react';
import { X, Heart, ShoppingBag } from 'lucide-react';
import { Watch } from '../../types';
import { useCart } from '../../context/CartContext';
import { useWishlist } from '../../context/WishlistContext';

interface QuickViewModalProps {
  watch: Watch | null;
  onClose: () => void;
}

const QuickViewModal: React.FC<QuickViewModalProps> = ({ watch, onClose }) => {
  const { addItem: addToCart } = useCart();
  const { addItem: addToWishlist, isInWishlist, removeItem: removeFromWishlist } = useWishlist();

  if (!watch) return null;

  const toggleWishlist = () => {
    if (isInWishlist(watch.id)) {
      removeFromWishlist(watch.id);
    } else {
      addToWishlist(watch);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white w-full max-w-4xl rounded-lg shadow-xl overflow-hidden relative">
        {/* Close button */}
        <button 
          onClick={onClose}
          className="absolute top-3 left-3 z-10 bg-white rounded-full p-1.5 shadow-lg hover:bg-gray-100 transition-colors"
          aria-label="إغلاق"
        >
          <X size={20} className="text-gray-600" />
        </button>

        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2">
            <div className="relative h-96">
              <img 
                src={watch.image} 
                alt={watch.name} 
                className="w-full h-full object-cover"
              />
              {watch.featured && (
                <div className="absolute top-4 right-4 bg-amber-500 text-white px-3 py-1 rounded-full text-sm">
                  مميز
                </div>
              )}
            </div>
          </div>
          
          <div className="md:w-1/2 p-6 text-right">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">{watch.name}</h2>
            <p className="text-2xl text-amber-600 font-bold mb-4">{watch.price} دينار</p>
            
            <p className="text-gray-600 mb-6">{watch.description}</p>
            
            <div className="space-y-4">
              <button
                onClick={() => {
                  addToCart(watch);
                  onClose();
                }}
                className="w-full bg-amber-500 text-white py-3 rounded-lg hover:bg-amber-600 transition-colors flex items-center justify-center gap-2"
              >
                <ShoppingBag size={20} />
                <span>أضف إلى السلة</span>
              </button>
              
              <button
                onClick={() => {
                  toggleWishlist();
                  onClose();
                }}
                className={`w-full border py-3 rounded-lg flex items-center justify-center gap-2 transition-colors ${
                  isInWishlist(watch.id)
                    ? 'bg-red-50 text-red-600 border-red-200 hover:bg-red-100'
                    : 'text-gray-700 border-gray-300 hover:bg-gray-50'
                }`}
              >
                <Heart
                  size={20}
                  fill={isInWishlist(watch.id) ? 'currentColor' : 'none'}
                />
                <span>{isInWishlist(watch.id) ? 'إزالة من المفضلة' : 'أضف إلى المفضلة'}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickViewModal;