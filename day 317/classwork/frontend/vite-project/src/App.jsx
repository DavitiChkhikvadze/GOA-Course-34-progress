import React, { useState } from 'react';
import LogIn from './components/logIn';
import SignUp from './components/signUp';

function App() {
  const [currentView, setCurrentView] = useState('signup');

  return (
    <div className="relative min-h-screen bg-slate-950 select-none">
      <div className="absolute top-6 right-6 z-50 bg-slate-900/80 backdrop-blur border border-slate-800 rounded-full p-1 flex items-center shadow-lg">
        <button
          onClick={() => setCurrentView('signup')}
          className={`px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all duration-200 ${
            currentView === 'signup'
              ? 'bg-violet-600 text-white shadow-md'
              : 'text-slate-400 hover:text-slate-200'
          }`}
        >
          Sign Up
        </button>
        <button
          onClick={() => setCurrentView('login')}
          className={`px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all duration-200 ${
            currentView === 'login'
              ? 'bg-violet-600 text-white shadow-md'
              : 'text-slate-400 hover:text-slate-200'
          }`}
        >
          Log In
        </button>
      </div>

      <main className="transition-opacity duration-300">
        {currentView === 'signup' ? (
          <SignUp />
        ) : (
          <LogIn />
        )}
      </main>
      
    </div>
  );
}

export default App;