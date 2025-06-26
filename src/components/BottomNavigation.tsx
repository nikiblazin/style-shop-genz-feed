
import { Heart, Search, User, Home, Plus } from "lucide-react";

const BottomNavigation = () => {
  const navItems = [
    { icon: Home, label: "Home", active: true },
    { icon: Search, label: "Discover", active: false },
    { icon: Plus, label: "Create", active: false, isCreate: true },
    { icon: Heart, label: "Inbox", active: false },
    { icon: User, label: "Profile", active: false }
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50">
      <div className="bg-black/90 backdrop-blur-sm border-t border-gray-800 px-4 py-2">
        <div className="flex items-center justify-around max-w-md mx-auto">
          {navItems.map((item, index) => (
            <button
              key={index}
              className={`flex flex-col items-center gap-1 px-3 py-2 transition-all duration-200 ${
                item.active 
                  ? 'text-white' 
                  : 'text-gray-500 hover:text-white'
              }`}
            >
              {item.isCreate ? (
                <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                  <item.icon size={16} className="text-black" />
                </div>
              ) : (
                <item.icon size={24} />
              )}
              <span className="text-xs font-medium">{item.label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BottomNavigation;
