
import { useState } from "react";
import { Heart, MessageCircle, Share, Bookmark } from "lucide-react";

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
  type: "image" | "video";
  media: string;
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
    <div className="relative w-full h-screen bg-black">
      {/* Main Media (Image or Video) */}
      <div className="w-full h-full relative">
        {post.type === "video" ? (
          <video 
            src={post.media}
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
          />
        ) : (
          <img 
            src={post.media} 
            alt="Fashion post"
            className="w-full h-full object-cover"
          />
        )}
        
        {/* Right side actions - TikTok style */}
        <div className="absolute right-4 bottom-32 flex flex-col items-center gap-6">
          {/* User Avatar */}
          <div className="relative">
            <img 
              src={post.user.avatar} 
              alt={post.user.name}
              className="w-12 h-12 rounded-full border-2 border-white"
            />
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
              <span className="text-white text-xs font-bold">+</span>
            </div>
          </div>

          {/* Like Button */}
          <div className="flex flex-col items-center">
            <button 
              onClick={() => setIsLiked(!isLiked)}
              className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-200 ${
                isLiked ? 'bg-red-500/20' : 'bg-black/20'
              }`}
            >
              <Heart 
                size={28} 
                className={isLiked ? 'text-red-500' : 'text-white'} 
                fill={isLiked ? 'currentColor' : 'none'} 
              />
            </button>
            <span className="text-white text-xs font-semibold mt-1">
              {(post.likes + (isLiked ? 1 : 0)).toLocaleString()}
            </span>
          </div>

          {/* Comment Button */}
          <div className="flex flex-col items-center">
            <button className="w-12 h-12 rounded-full bg-black/20 flex items-center justify-center">
              <MessageCircle size={28} className="text-white" />
            </button>
            <span className="text-white text-xs font-semibold mt-1">124</span>
          </div>

          {/* Share Button */}
          <div className="flex flex-col items-center">
            <button className="w-12 h-12 rounded-full bg-black/20 flex items-center justify-center">
              <Share size={28} className="text-white" />
            </button>
            <span className="text-white text-xs font-semibold mt-1">Share</span>
          </div>

          {/* Bookmark Button */}
          <button className="w-12 h-12 rounded-full bg-black/20 flex items-center justify-center">
            <Bookmark size={28} className="text-white" />
          </button>
        </div>

        {/* Bottom content */}
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
          {/* User info and caption */}
          <div className="mb-4">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-white font-semibold text-lg">@{post.user.name}</span>
            </div>
            <p className="text-white text-sm leading-relaxed">{post.caption}</p>
          </div>

          {/* Product Strip */}
          <div className="mb-4">
            <div className="flex gap-3 overflow-x-auto pb-2">
              {post.products.map((product) => (
                <button
                  key={product.id}
                  className="bg-white/90 backdrop-blur-sm rounded-lg p-3 min-w-[100px] shadow-lg hover:bg-white transition-all"
                  onClick={() => onProductClick(product)}
                >
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-12 object-cover rounded mb-2"
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
      </div>
    </div>
  );
};

export default FeedPost;
