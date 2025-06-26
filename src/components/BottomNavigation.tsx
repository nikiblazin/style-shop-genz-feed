
import { Heart, Search, User } from "lucide-react";

const BottomNavigation = () => {
  const navItems = [
    { icon: Search, label: "Discover", active: true },
    { icon: Heart, label: "Favorites", active: false },
    { icon: User, label: "Profile", active: false }
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50">
      <div className="bg-white border-t border-gray-200 px-6 py-4">
        <div className="flex items-center justify-around max-w-md mx-auto">
          {navItems.map((item, index) => (
            <button
              key={index}
              className={`flex flex-col items-center gap-1 px-4 py-2 rounded-lg transition-all duration-300 ${
                item.active 
                  ? 'bg-black text-white' 
                  : 'text-gray-500 hover:text-black hover:bg-gray-100'
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
