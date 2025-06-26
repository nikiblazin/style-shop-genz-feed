
interface Product {
  id: number;
  name: string;
  price: string;
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
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal Content */}
      <div className="relative glass-card rounded-t-3xl p-6 w-full max-w-md animate-slide-up">
        <div className="w-12 h-1 bg-white/30 rounded-full mx-auto mb-6"></div>
        
        <div className="text-center">
          <h3 className="text-2xl font-bold text-white mb-2">{product.name}</h3>
          <p className="text-3xl font-bold gradient-text mb-6">{product.price}</p>
          
          <div className="space-y-3">
            <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-4 rounded-2xl font-semibold text-lg hover:scale-105 transition-transform neon-glow">
              Add to Cart
            </button>
            
            <button 
              onClick={onClose}
              className="w-full glass-button text-white py-3 rounded-2xl font-medium"
            >
              View Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
