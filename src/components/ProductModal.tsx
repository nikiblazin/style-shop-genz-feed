
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
    <div className="fixed inset-0 z-50 bg-white">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b">
        <button onClick={onClose} className="p-2">
          <X size={24} className="text-black" />
        </button>
        <h1 className="text-lg font-semibold">Product</h1>
        <div className="w-10" /> {/* Spacer for centering */}
      </div>

      {/* Product Image */}
      <div className="flex-1 flex items-center justify-center bg-gray-50 p-8">
        {product.image && (
          <img 
            src={product.image} 
            alt={product.name}
            className="max-w-full max-h-96 object-contain"
          />
        )}
      </div>

      {/* Product Info */}
      <div className="p-6 space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <h2 className="text-xl font-bold text-black mb-1">{product.name}</h2>
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
        
        <div className="text-2xl font-bold text-black">{product.price}</div>
        
        <p className="text-gray-600 text-sm">UNREALCUT</p>
      </div>

      {/* Action Button */}
      <div className="p-6 pt-0">
        <button className="w-full bg-black text-white py-4 rounded-lg font-semibold text-lg hover:bg-gray-800 transition-colors">
          BUY WITH KLARNA
        </button>
      </div>
    </div>
  );
};

export default ProductModal;
