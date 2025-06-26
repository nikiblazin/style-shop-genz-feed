
import { useState } from "react";
import { Heart, Search } from "lucide-react";
import FeedPost from "../components/FeedPost";
import BottomNavigation from "../components/BottomNavigation";
import ProductModal from "../components/ProductModal";

const Index = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const feedData = [
    {
      id: 1,
      user: {
        name: "StyleInfluencer",
        avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150"
      },
      image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=600",
      likes: 2847,
      caption: "Street style vibes ✨ #ootd #streetfashion",
      products: [
        { id: 1, name: "Oversized Blazer", price: "$89", x: 40, y: 30 },
        { id: 2, name: "Gold Chain Necklace", price: "$45", x: 60, y: 25 },
        { id: 3, name: "High-waist Jeans", price: "$79", x: 45, y: 65 }
      ]
    },
    {
      id: 2,
      user: {
        name: "FashionGuru",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150"
      },
      image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600",
      likes: 1923,
      caption: "Minimalist autumn look 🍂",
      products: [
        { id: 4, name: "Wool Coat", price: "$129", x: 50, y: 40 },
        { id: 5, name: "Leather Boots", price: "$95", x: 30, y: 80 }
      ]
    },
    {
      id: 3,
      user: {
        name: "TrendSetter",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150"
      },
      image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=600",
      likes: 3156,
      caption: "Party ready! 💃 #nightout #glam",
      products: [
        { id: 6, name: "Sequin Dress", price: "$149", x: 45, y: 50 },
        { id: 7, name: "Statement Earrings", price: "$29", x: 65, y: 20 },
        { id: 8, name: "Clutch Bag", price: "$69", x: 70, y: 60 }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-900 pb-20">
      {/* Header */}
      <div className="sticky top-0 z-40 glass-card border-0 border-b border-white/10 px-4 py-3 mb-4">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold gradient-text">StyleFeed</h1>
          <div className="flex items-center gap-3">
            <button className="glass-button p-2 rounded-full">
              <Search size={20} className="text-white" />
            </button>
            <button className="glass-button p-2 rounded-full">
              <Heart size={20} className="text-white" />
            </button>
          </div>
        </div>
      </div>

      {/* Feed */}
      <div className="space-y-6 px-4">
        {feedData.map((post) => (
          <FeedPost 
            key={post.id} 
            post={post} 
            onProductClick={setSelectedProduct}
          />
        ))}
      </div>

      <BottomNavigation />
      
      {selectedProduct && (
        <ProductModal 
          product={selectedProduct} 
          onClose={() => setSelectedProduct(null)} 
        />
      )}
    </div>
  );
};

export default Index;
