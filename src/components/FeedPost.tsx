
import { useState } from "react";
import { Heart } from "lucide-react";

interface Product {
  id: number;
  name: string;
  price: string;
  x: number;
  y: number;
}

interface Post {
  id: number;
  user: {
    name: string;
    avatar: string;
  };
  image: string;
  likes: number;
  caption: string;
  products: Product[];
}

interface FeedPostProps {
  post: Post;
  onProductClick: (product: Product) => void;
}

const FeedPost = ({ post, onProductClick }: FeedPostProps) => {
  const [isLiked, setIsLiked] = useState(false);
  const [showProducts, setShowProducts] = useState(false);

  return (
    <div className="glass-card p-4 animate-slide-up">
      {/* User Header */}
      <div className="flex items-center gap-3 mb-3">
        <img 
          src={post.user.avatar} 
          alt={post.user.name}
          className="w-10 h-10 rounded-full border-2 border-purple-400"
        />
        <span className="font-semibold text-white">{post.user.name}</span>
      </div>

      {/* Image with Product Tags */}
      <div 
        className="relative rounded-xl overflow-hidden mb-3 cursor-pointer"
        onClick={() => setShowProducts(!showProducts)}
      >
        <img 
          src={post.image} 
          alt="Fashion post"
          className="w-full h-96 object-cover"
        />
        
        {/* Product Tags Overlay */}
        {showProducts && (
          <div className="absolute inset-0 bg-black/20">
            {post.products.map((product) => (
              <button
                key={product.id}
                className="product-tag animate-bounce-soft"
                style={{ left: `${product.x}%`, top: `${product.y}%` }}
                onClick={(e) => {
                  e.stopPropagation();
                  onProductClick(product);
                }}
              >
                <div className="w-3 h-3 bg-white rounded-full mb-1 mx-auto"></div>
                <div className="text-xs font-medium">
                  {product.name}
                </div>
                <div className="text-xs text-purple-300">
                  {product.price}
                </div>
              </button>
            ))}
          </div>
        )}
        
        {/* Tap to see products indicator */}
        {!showProducts && (
          <div className="absolute bottom-4 right-4 glass-button px-3 py-1 rounded-full text-xs text-white">
            Tap to see products
          </div>
        )}
      </div>

      {/* Actions */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-4">
          <button 
            onClick={() => setIsLiked(!isLiked)}
            className={`transition-all duration-200 ${isLiked ? 'text-red-500 scale-110' : 'text-white'}`}
          >
            <Heart size={24} fill={isLiked ? 'currentColor' : 'none'} />
          </button>
          <span className="text-white font-semibold">
            {(post.likes + (isLiked ? 1 : 0)).toLocaleString()} likes
          </span>
        </div>
        
        <button className="glass-button px-4 py-2 rounded-full text-sm font-semibold text-white hover:scale-105 transition-transform">
          Shop Look
        </button>
      </div>

      {/* Caption */}
      <p className="text-white text-sm leading-relaxed">
        <span className="font-semibold mr-2">{post.user.name}</span>
        {post.caption}
      </p>
    </div>
  );
};

export default FeedPost;
