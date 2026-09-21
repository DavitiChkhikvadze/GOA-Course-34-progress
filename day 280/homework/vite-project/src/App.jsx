import React from 'react';
import Navbar from './components/navbar';
import Jerseys from './components/Jerseys';
import Boots from './components/Boots';
import Balls from './components/Balls';

function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-sky-200">
      <Navbar />
      <main>
        <header className="bg-sky-50 border-b border-sky-100 text-center py-20 px-4">
          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-800 mb-6 tracking-tight">
            Gear Up for the <span className="text-sky-500">Match</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto font-medium mb-8">
            The ultimate destination for premium football kits, cutting-edge boots, and professional match balls
          </p>
          <button className="bg-sky-600 hover:bg-sky-700 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
            Shop the Collection
          </button>
        </header>
        <div className="pb-20">
          <Jerseys />
          <Boots />
          <Balls />
        </div>
      </main>
      <footer className="bg-slate-900 text-slate-400 py-8 text-center">
        <p className="text-sm">2026 website - PitchPerfect. Built for the beautiful game. built by Daviti Cxikva</p>
      </footer>
    </div>
  );
}

export default App;