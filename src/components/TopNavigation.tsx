
import { useState } from "react";

const TopNavigation = () => {
  const [activeTab, setActiveTab] = useState("Neked");

  const tabs = ["Neked", "Felfedezés"];

  return (
    <div className="absolute top-0 left-0 right-0 z-30">
      <div className="flex justify-center items-center pt-12 pb-4">
        {tabs.map((tab) => (
          <div key={tab} className="relative mx-6">
            <button
              onClick={() => setActiveTab(tab)}
              className={`text-lg font-semibold transition-colors ${
                activeTab === tab ? "text-white" : "text-white/70"
              }`}
            >
              {tab}
            </button>
            {activeTab === tab && (
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-8 h-0.5 bg-white rounded-full"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopNavigation;
