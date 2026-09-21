import React from 'react';

export default function Navbar() {
  return (
    <nav className="bg-sky-600 p-4 shadow-md text-white sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold tracking-wider uppercase cursor-pointer">
          PitchPerfect
        </div>
        <ul className="hidden md:flex space-x-8 font-medium">
          <li className="hover:text-sky-200 cursor-pointer transition-colors">Home</li>
          <li className="hover:text-sky-200 cursor-pointer transition-colors">Jerseys</li>
          <li className="hover:text-sky-200 cursor-pointer transition-colors">Boots</li>
          <li className="hover:text-sky-200 cursor-pointer transition-colors">Balls</li>
        </ul>
        <button className="md:hidden p-2 text-sky-100 hover:text-white">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>
    </nav>
  );
}