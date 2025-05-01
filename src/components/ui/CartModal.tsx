import React from 'react';
import { X, Minus, Plus, ShoppingBag, Trash2 } from 'lucide-react';
import { useCart } from '../../context/CartContext';

interface CartModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CartModal: React.FC<CartModalProps> = ({ isOpen, onClose }) => {
  const { items, removeItem, updateQuantity, total } = useCart();

  if (!isOpen) return null;

  const handleWhatsAppCheckout = () => {
    const message = `مرحباً، أرغب بطلب:\n${items.map(item => 
      `- ${item.watch.name} (${item.quantity} قطعة) - ${item.watch.price * item.quantity} دينار`
    ).join('\n')}\n\nالمجموع: ${total} دينار`;
    
    const whatsappUrl = `https://wa.me/962780790849?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
      <div className="bg-white w-full max-w-md rounded-lg shadow-xl mx-4">
        <div className="p-4 border-b flex items-center justify-between">
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X size={20} />
          </button>
          <div className="flex items-center gap-2">
            <h2 className="text-xl font-bold">سلة التسوق</h2>
            <ShoppingBag size={20} className="text-amber-500" />
          </div>
        </div>

        <div className="max-h-96 overflow-y-auto p-4">
          {items.length === 0 ? (
            <p className="text-center text-gray-500 py-8">سلة التسوق فارغة</p>
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
                      <Trash2 size={18} />
                    </button>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => updateQuantity(item.watch.id, item.quantity - 1)}
                        className="p-1 rounded-full bg-gray-100 hover:bg-gray-200"
                      >
                        <Minus size={16} />
                      </button>
                      <span className="w-8 text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.watch.id, item.quantity + 1)}
                        className="p-1 rounded-full bg-gray-100 hover:bg-gray-200"
                      >
                        <Plus size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {items.length > 0 && (
          <div className="p-4 border-t">
            <div className="flex justify-between items-center mb-4">
              <span className="text-xl font-bold text-amber-600">{total} دينار</span>
              <span className="font-semibold">المجموع:</span>
            </div>
            <button
              onClick={handleWhatsAppCheckout}
              className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition-colors flex items-center justify-center gap-2"
            >
              <span>إتمام الطلب عبر واتساب</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartModal