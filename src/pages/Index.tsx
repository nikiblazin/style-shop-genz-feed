import { useState } from "react";
import FeedPost from "../components/FeedPost";
import BottomNavigation from "../components/BottomNavigation";
import TopNavigation from "../components/TopNavigation";
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
      type: "video" as const,
      media: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
      likes: 2847,
      caption: "Street style vibes ✨ #ootd #streetfashion #trending",
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
      type: "image" as const,
      media: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600",
      likes: 1923,
      caption: "Minimalist autumn look 🍂 #minimal #cozy #fall",
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
      type: "image" as const,
      media: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=600",
      likes: 3156,
      caption: "Gen Z vibes! 💫 #genz #streetstyle #trendy",
      products: [
        { id: 6, name: "Sequin Dress", price: "$149", image: "https://images.unsplash.com/photo-1566479179817-40d4c3e4b701?w=150" },
        { id: 7, name: "Statement Earrings", price: "$29", image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=150" },
        { id: 8, name: "Clutch Bag", price: "$69", image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=150" }
      ]
    },
    {
      id: 4,
      user: {
        name: "OutfitDaily",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150"
      },
      type: "image" as const,
      media: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=600",
      likes: 4230,
      caption: "Casual Friday outfit inspo 👔 #workwear #casual #friday",
      products: [
        { id: 9, name: "Denim Shirt", price: "$65", image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=150" },
        { id: 10, name: "Brown Belt", price: "$35", image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=150" }
      ]
    }
  ];

  return (
    <div className="h-screen bg-black overflow-hidden">
      <TopNavigation />
      
      {/* TikTok-style full screen feed with hidden scrollbar */}
      <div className="h-full overflow-y-scroll snap-y snap-mandatory hide-scrollbar">
        {feedData.map((post) => (
          <div key={post.id} className="snap-start">
            <FeedPost 
              post={post} 
              onProductClick={setSelectedProduct}
            />
          </div>
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
