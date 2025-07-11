
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
  const [isTextExpanded, setIsTextExpanded] = useState(false);

  const MAX_TEXT_LENGTH = 100;
  const shouldTruncate = post.caption.length > MAX_TEXT_LENGTH;
  const displayText = isTextExpanded || !shouldTruncate 
    ? post.caption 
    : post.caption.slice(0, MAX_TEXT_LENGTH);

  return (
    <div className="relative w-full h-screen bg-black flex items-center justify-center">
      {/* Main Media (Image or Video) */}
      <div className="relative w-full h-full">
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
            className="w-full h-full object-contain bg-black"
          />
        )}
        
        {/* Right side actions - TikTok style - moved higher up */}
        <div className="absolute right-3 bottom-56 flex flex-col items-center gap-4 z-20">
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
              className="w-12 h-12 rounded-full flex items-center justify-center"
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
            <button className="w-12 h-12 rounded-full flex items-center justify-center">
              <MessageCircle size={28} className="text-white" />
            </button>
            <span className="text-white text-xs font-semibold mt-1">124</span>
          </div>

          {/* Share Button */}
          <div className="flex flex-col items-center">
            <button className="w-12 h-12 rounded-full flex items-center justify-center">
              <Share size={28} className="text-white" />
            </button>
            <span className="text-white text-xs font-semibold mt-1">Share</span>
          </div>

          {/* Bookmark Button */}
          <div className="flex flex-col items-center">
            <button className="w-12 h-12 rounded-full flex items-center justify-center">
              <Bookmark size={28} className="text-white" />
            </button>
          </div>
        </div>

        {/* Bottom content with better spacing */}
        <div className="absolute bottom-0 left-0 right-0 pb-20 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
          {/* User info and caption */}
          <div className="px-4 mb-4 pr-16">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-white font-semibold text-lg">@{post.user.name}</span>
            </div>
            <div className="text-white text-sm leading-relaxed">
              <span>{displayText}</span>
              {shouldTruncate && !isTextExpanded && (
                <button 
                  onClick={() => setIsTextExpanded(true)}
                  className="text-gray-300 ml-1 font-medium"
                >
                  ...több
                </button>
              )}
              {shouldTruncate && isTextExpanded && (
                <button 
                  onClick={() => setIsTextExpanded(false)}
                  className="text-gray-300 ml-2 font-medium"
                >
                  kevesebb
                </button>
              )}
            </div>
          </div>

          {/* Product Strip with hidden scrollbar */}
          <div className="px-4">
            <div className="flex gap-3 overflow-x-auto pb-4 hide-scrollbar">
              {post.products.map((product) => (
                <button
                  key={product.id}
                  className="bg-white/95 backdrop-blur-sm rounded-xl p-3 min-w-[110px] shadow-xl hover:bg-white transition-all duration-200 hover:scale-105 flex-shrink-0"
                  onClick={() => onProductClick(product)}
                >
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-14 object-cover rounded-lg mb-2"
                  />
                  <div className="text-xs">
                    <p className="font-semibold text-gray-900 truncate mb-1">{product.name}</p>
                    <p className="text-gray-700 font-bold">{product.price}</p>
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
