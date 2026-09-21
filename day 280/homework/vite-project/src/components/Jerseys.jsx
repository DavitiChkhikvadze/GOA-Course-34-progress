import React from 'react';

export default function Jerseys() {
  const jerseys = [
    { id: 1, name: "Real Madrid - Home", brand: "Nike", price: "$89.99" },
    { id: 2, name: "Real Madrid - Away", brand: "Adidas", price: "$89.99" },
    { id: 3, name: "Real Madrid - Retro classic", brand: "Puma", price: "$110.00" },
  ];

  return (
    <section className="py-10 px-4 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-slate-800 mb-6 border-b-2 border-sky-200 inline-block pb-2">
        Official Jerseys
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {jerseys.map((item) => (
          <div key={item.id} className="bg-white rounded-xl shadow-sm border border-slate-100 p-5 hover:shadow-lg hover:border-sky-300 transition-all duration-300">
            <div className="h-48 bg-sky-50 rounded-lg mb-4 flex items-center justify-center text-sky-300/50">
              <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24"><path d="M21.99 7.42l-4.52-2.12c-.93-.44-1.92-.68-2.92-.72L12 4.5l-2.55.08c-1 .04-1.99.28-2.92.72L2.01 7.42C1.4 7.71 1 8.32 1 8.99v9.51c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V8.99c0-.67-.4-1.28-1.01-1.57zM12 20H4v-8.5l3.86-1.81c.64-.3 1.32-.47 2.01-.5V11c0 .55.45 1 1 1s1-.45 1-1V9.19c.69.03 1.37.2 2.01.5L17.74 11.5v8.5z" /></svg>
            </div>
            <p className="text-xs text-slate-400 uppercase tracking-wide font-semibold">{item.brand}</p>
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