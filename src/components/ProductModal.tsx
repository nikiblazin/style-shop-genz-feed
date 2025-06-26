
import { Heart, Share } from "lucide-react";

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
      
      {/* Modal Content - Full width and extends higher */}
      <div className="relative bg-white rounded-t-3xl p-6 w-full h-3/4 animate-slide-up">
        <div className="w-12 h-1 bg-gray-300 rounded-full mx-auto mb-6"></div>
        
        <div className="text-center h-full flex flex-col">
          {product.image && (
            <img 
              src={product.image} 
              alt={product.name}
              className="w-40 h-40 object-cover rounded-lg mx-auto mb-6"
            />
          )}
          
          <div className="flex items-center justify-between mb-4">
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-black mb-1">{product.name}</h3>
              <p className="text-gray-600 text-sm">UNREAL</p>
            </div>
            <div className="flex items-center gap-3">
              <button className="p-2">
                <Heart size={24} className="text-gray-400" />
              </button>
              <button className="p-2">
                <Share size={24} className="text-gray-400" />
              </button>
            </div>
          </div>
          
          <div className="text-3xl font-bold text-black mb-2">{product.price}</div>
          <p className="text-gray-600 text-sm mb-8">UNREALCUT</p>
          
          <div className="mt-auto">
            <button className="w-full bg-black text-white py-4 rounded-lg font-semibold text-xl hover:bg-gray-800 transition-colors">
              BUY WITH BLAZIN
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
