
import { useState } from "react";
import { Heart, Search, ShoppingBag } from "lucide-react";
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
        { id: 1, name: "Oversized Blazer", price: "$89", image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=150" },
        { id: 2, name: "Gold Chain Necklace", price: "$45", image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=150" },
        { id: 3, name: "High-waist Jeans", price: "$79", image: "https://images.unsplash.com/photo-1582418702059-97ebafb35d09?w=150" }
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
        { id: 4, name: "Wool Coat", price: "$129", image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=150" },
        { id: 5, name: "Leather Boots", price: "$95", image: "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?w=150" }
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
        { id: 6, name: "Sequin Dress", price: "$149", image: "https://images.unsplash.com/photo-1566479179817-40d4c3e2b701?w=150" },
        { id: 7, name: "Statement Earrings", price: "$29", image: "https://images.unsplash.com/photo-1635767798036-3e4eedcfb917?w=150" },
        { id: 8, name: "Clutch Bag", price: "$69", image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=150" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white pb-20">
      {/* Header */}
      <div className="sticky top-0 z-40 bg-white border-b border-gray-200 px-4 py-3">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-black">StyleFeed</h1>
          <div className="flex items-center gap-3">
            <button className="p-2 rounded-full hover:bg-gray-100">
              <Search size={20} className="text-black" />
            </button>
            <button className="p-2 rounded-full hover:bg-gray-100">
              <ShoppingBag size={20} className="text-black" />
            </button>
          </div>
        </div>
      </div>

      {/* Feed */}
      <div>
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
