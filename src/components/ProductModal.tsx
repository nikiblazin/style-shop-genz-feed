
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
          <h3 className="text-2xl font-bold text-black mb-2">{product.name}</h3>
          <p className="text-3xl font-bold text-black mb-6">{product.price}</p>
          
          <div className="space-y-3">
            <button className="w-full bg-black text-white py-4 rounded-lg font-semibold text-lg hover:bg-gray-800 transition-colors">
              Add to Cart
            </button>
            
            <button 
              onClick={onClose}
              className="w-full bg-gray-100 text-black py-3 rounded-lg font-medium hover:bg-gray-200 transition-colors"
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
