import React from 'react';
import ToggleFunction from './ToggleFunction';
import ThemeSwitcher from './ThemeSwitcher';
import ScoreGame from './ScoreGame';
import ProfileSwitcher from './ProfileSwitcher';

function App() {
  return (
    <div className="p-6 font-sans bg-gray-100 dark:bg-gray-900 dark:text-white min-h-screen transition-colors duration-300">
      <h1 className="text-3xl font-bold mb-8 text-center text-blue-600 dark:text-blue-300">
        React სავარჯიშოები
      </h1>

      <section className="mb-10 bg-white dark:bg-gray-800 p-4 rounded-xl shadow">
        <h2 className="text-xl font-semibold mb-2">1. ფუნქციის გადართვა</h2>
        <ToggleFunction />
      </section>

      <section className="mb-10 bg-white dark:bg-gray-800 p-4 rounded-xl shadow">
        <h2 className="text-xl font-semibold mb-2">2. თემის გადართვა</h2>
        <ThemeSwitcher />
      </section>

      <section className="mb-10 bg-white dark:bg-gray-800 p-4 rounded-xl shadow">
        <h2 className="text-xl font-semibold mb-2">3. ქულების თამაში</h2>
        <ScoreGame />
      </section>

      <section className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow">
        <h2 className="text-xl font-semibold mb-2">4. პროფილის გადართვა</h2>
        <ProfileSwitcher />
      </section>
    </div>
  );
}

export default App