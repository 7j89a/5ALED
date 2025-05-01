import React from 'react';
import { Watch } from '../../types';
import { Phone, ShoppingBag, Heart, Eye } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { useWishlist } from '../../context/WishlistContext';

interface WatchCardProps {
  watch: Watch;
  onQuickView?: (watch: Watch) => void;
}

const WatchCard: React.FC<WatchCardProps> = ({ watch, onQuickView }) => {
  const { addItem: addToCart } = useCart();
  const { addItem: addToWishlist, isInWishlist, removeItem: removeFromWishlist } = useWishlist();

  const handleWhatsAppOrder = () => {
    const message = `مرحباً، أرغب بطلب: ${watch.name} بسعر ${watch.price} دينار`;
    const whatsappUrl = `https://wa.me/962780790849?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const toggleWishlist = () => {
    if (isInWishlist(watch.id)) {
      removeFromWishlist(watch.id);
    } else {
      addToWishlist(watch);
    }
  };

  return (
    <div id={`watch-${watch.id}`} className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg rtl group">
      <div className="relative h-64 overflow-hidden">
        <img 
          src={watch.image} 
          alt={watch.name} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {watch.featured && (
          <div className="absolute top-2 right-2 bg-amber-500 text-white px-2 py-1 rounded-md text-xs font-semibold">
            مميز
          </div>
        )}
        
        {/* Quick actions */}
        <div className="absolute top-2 left-2 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <button
            onClick={toggleWishlist}
            className="p-2 bg-white rounded-full shadow-md hover:bg-gray-50 transition-colors"
          >
            <Heart
              size={18}
              className={isInWishlist(watch.id) ? 'text-red-500 fill-current' : 'text-gray-600'}
            />
          </button>
          <button
            onClick={() => onQuickView?.(watch)}
            className="p-2 bg-white rounded-full shadow-md hover:bg-gray-50 transition-colors"
          >
            <Eye size={18} className="text-gray-600" />
          </button>
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-xl font-bold text-right mb-2 text-gray-800">{watch.name}</h3>
        <p className="text-gray-600 text-right mb-4 text-sm h-20 overflow-hidden">{watch.description}</p>
        <div className="flex justify-between items-center">
          <button 
            onClick={handleWhatsAppOrder}
            className="bg-green-600 text-white px-4 py-2 rounded-md flex items-center gap-2 hover:bg-green-700 transition-colors"
          >
            <Phone size={18} />
            <span>طلب عبر واتساب</span>
          </button>
          <button
            onClick={() => addToCart(watch)}
            className="p-2 text-amber-600 hover:text-amber-700 transition-colors"
          >
            <ShoppingBag size={20} />
          </button>
          <div className="text-amber-600 font-bold text-lg">{watch.price} دينار</div>
        </div>
      </div>
    </div>
  );
};

export default WatchCard;