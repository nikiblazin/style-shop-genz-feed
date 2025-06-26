
import { X, Heart, Share } from "lucide-react";

interface Product {
  id: number;
  name: string;
  price: string;
  image?: string;
}

interface ProductModalProps {
  product: Product;
  onClose: () => void;
}

const ProductModal = ({ product, onClose }: ProductModalProps) => {
  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50"
        onClick={onClose}
      />
      
      {/* Modal Content */}
      <div className="relative bg-white rounded-t-3xl p-6 w-full max-w-md animate-slide-up">
        <div className="w-12 h-1 bg-gray-300 rounded-full mx-auto mb-6"></div>
        
        <div className="text-center">
          {product.image && (
            <img 
              src={product.image} 
              alt={product.name}
              className="w-32 h-32 object-cover rounded-lg mx-auto mb-4"
            />
          )}
          
          <div className="flex items-center justify-between mb-4">
            <div className="flex-1">
              <h3 className="text-xl font-bold text-black mb-1">{product.name}</h3>
              <p className="text-gray-600 text-sm">UNREAL</p>
            </div>
            <div className="flex items-center gap-3">
              <button className="p-2">
                <Heart size={20} className="text-gray-400" />
              </button>
              <button className="p-2">
                <Share size={20} className="text-gray-400" />
              </button>
            </div>
          </div>
          
          <div className="text-2xl font-bold text-black mb-2">{product.price}</div>
          <p className="text-gray-600 text-sm mb-6">UNREALCUT</p>
          
          <div className="space-y-3">
            <button className="w-full bg-black text-white py-4 rounded-lg font-semibold text-lg hover:bg-gray-800 transition-colors">
              BUY WITH KLARNA
            </button>
            
            <button 
              onClick={onClose}
              className="w-full bg-gray-100 text-black py-3 rounded-lg font-medium hover:bg-gray-200 transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
