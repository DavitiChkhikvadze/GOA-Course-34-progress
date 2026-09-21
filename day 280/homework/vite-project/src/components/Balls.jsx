import React from 'react';

export default function Balls() {
  const balls = [
    { id: 1, name: "Champions League", type: "Match Ball", price: "$130.00" },
    { id: 2, name: "LaLiga Training", type: "Training Ball", price: "$35.00" },
    { id: 3, name: "Street Freestyle", type: "Street Ball", price: "$25.00" },
  ];

  return (
    <section className="py-10 px-4 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-slate-800 mb-6 border-b-2 border-sky-200 inline-block pb-2">
        Match Balls
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {balls.map((item) => (
          <div key={item.id} className="bg-white rounded-xl shadow-sm border border-slate-100 p-5 hover:shadow-lg hover:border-sky-300 transition-all duration-300">
            <div className="h-48 bg-sky-50 rounded-lg mb-4 flex items-center justify-center text-sky-300/50">
              <span className="text-5xl">⚽</span>
            </div>
            <p className="text-xs text-slate-400 uppercase tracking-wide font-semibold">{item.type}</p>
            <h3 className="text-lg font-bold text-slate-700 mt-1">{item.name}</h3>
            <div className="flex justify-between items-center mt-4">
              <p className="text-sky-600 font-black text-xl">{item.price}</p>
              <button className="bg-sky-50 text-sky-600 hover:bg-sky-500 hover:text-white px-4 py-2 rounded-lg font-medium transition-colors">
                Add
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}