import React, { useState, useTransition } from "react";

const HeavyProducts = () => {
  return (
    <div className="grid grid-cols-2 gap-2">
      {Array.from({ length: 1000 }, (_, i) => (
        <div key={i} className="p-2 border">
          პროდუქტი #{i + 1}
        </div>
      ))}
    </div>
  );
};

export default function Tabs() {
  const [tab, setTab] = useState("main");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (newTab) => {
    startTransition(() => {
      setTab(newTab);
    });
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-2">ტაბების გადართვა</h2>
      <div className="space-x-4 mb-4">
        <button onClick={() => handleTabChange("main")} className="px-4 py-2 bg-blue-500 text-white rounded">
          მთავარი
        </button>
        <button onClick={() => handleTabChange("products")} className="px-4 py-2 bg-green-500 text-white rounded">
          პროდუქტები
        </button>
      </div>

      {isPending && <p className="text-sm text-gray-500">იტვირთება...</p>}

      {tab === "main" && <p>მთავარი გვერდის შინაარსი</p>}
      {tab === "products" && <HeavyProducts />}
    </div>
  );
}
