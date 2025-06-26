
import { useState } from "react";
import { Heart, MessageCircle, Share } from "lucide-react";

interface Product {
  id: number;
  name: string;
  price: string;
  image: string;
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

  return (
    <div className="feed-card">
      {/* User Header */}
      <div className="flex items-center gap-3 p-4">
        <img 
          src={post.user.avatar} 
          alt={post.user.name}
          className="w-10 h-10 rounded-full"
        />
        <span className="font-semibold text-black">{post.user.name}</span>
      </div>

      {/* Image */}
      <div className="w-full">
        <img 
          src={post.image} 
          alt="Fashion post"
          className="w-full h-96 object-cover"
        />
      </div>

      {/* Actions */}
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center gap-4">
          <button 
            onClick={() => setIsLiked(!isLiked)}
            className={`transition-all duration-200 ${isLiked ? 'text-red-500' : 'text-black'}`}
          >
            <Heart size={24} fill={isLiked ? 'currentColor' : 'none'} />
          </button>
          <button className="text-black">
            <MessageCircle size={24} />
          </button>
          <button className="text-black">
            <Share size={24} />
          </button>
        </div>
      </div>

      {/* Likes */}
      <div className="px-4 pb-2">
        <span className="text-black font-semibold">
          {(post.likes + (isLiked ? 1 : 0)).toLocaleString()} likes
        </span>
      </div>

      {/* Caption */}
      <div className="px-4 pb-4">
        <p className="text-black text-sm">
          <span className="font-semibold mr-2">{post.user.name}</span>
          {post.caption}
        </p>
      </div>

      {/* Product Strip */}
      <div className="product-strip">
        <h4 className="text-sm font-semibold text-gray-800 mb-3">Shop this look</h4>
        <div className="flex gap-3 overflow-x-auto pb-2">
          {post.products.map((product) => (
            <button
              key={product.id}
              className="product-item hover:shadow-md transition-shadow"
              onClick={() => onProductClick(product)}
            >
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-16 object-cover rounded mb-2"
              />
              <div className="text-xs">
                <p className="font-medium text-gray-900 truncate">{product.name}</p>
                <p className="text-gray-600 font-semibold">{product.price}</p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeedPost;
