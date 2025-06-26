
import { Heart, Search } from "lucide-react";

const BottomNavigation = () => {
  const navItems = [
    { icon: Search, label: "Discover", active: true },
    { icon: Heart, label: "Favorites", active: false },
    { icon: Search, label: "Profile", active: false }
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50">
      <div className="glass-card border-0 border-t border-white/10 rounded-t-3xl px-6 py-4">
        <div className="flex items-center justify-around max-w-md mx-auto">
          {navItems.map((item, index) => (
            <button
              key={index}
              className={`flex flex-col items-center gap-1 px-4 py-2 rounded-2xl transition-all duration-300 ${
                item.active 
                  ? 'bg-purple-600/30 text-purple-300 neon-glow' 
                  : 'text-white/60 hover:text-white hover:bg-white/5'
              }`}
            >
              <item.icon size={20} />
              <span className="text-xs font-medium">{item.label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BottomNavigation;
