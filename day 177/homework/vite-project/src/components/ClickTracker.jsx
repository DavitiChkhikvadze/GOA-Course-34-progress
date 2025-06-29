import { useState } from "react";

export default function ClickTracker() {
  const [clicks, setClicks] = useState(0);

  const handleClick = () => {
    setClicks(prev => {
      const newCount = prev + 1;
      console.log("Site clicked:", newCount);
      return newCount;
    });
  };

  return (
    // Catch all clicks anywhere in this div subtree
    <div
      onClick={handleClick}
      className="p-4 border rounded-xl shadow-xl max-w-sm mx-auto mt-6 cursor-pointer select-none"
    >
      <h2 className="text-xl font-semibold mb-2">Site clicks: {clicks}</h2>
      <p className="text-gray-600">Click anywhere inside this box to increase count.</p>
    </div>
  );
}
