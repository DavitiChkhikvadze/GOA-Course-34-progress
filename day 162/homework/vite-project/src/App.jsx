import { useState } from "react";

export default function App() {
  const [name, setName] = useState("");
  const [info, setInfo] = useState("");
  const [cards, setCards] = useState([]);

  const handleSubmit = () => {
    if (name.trim() && info.trim()) {
      setCards([...cards, { name, info }]);
      setName("");
      setInfo("");
    }
  };

  const handleRemove = (indexToRemove) => {
    setCards(cards.filter((_, index) => index !== indexToRemove));
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-400 to-purple-500 p-6">
      <div className="max-w-xl mx-auto bg-white rounded-2xl shadow-xl p-6">
        <h1 className="text-3xl font-bold text-center text-indigo-700 mb-6">Მინი პროექტი 💻</h1>

        {/* Input ველები */}
        <div className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="შეიყვანე სახელი"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="px-4 py-2 rounded-lg border border-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <input
            type="text"
            placeholder="შეიყვანე ინფორმაცია"
            value={info}
            onChange={(e) => setInfo(e.target.value)}
            className="px-4 py-2 rounded-lg border border-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <button
            onClick={handleSubmit}
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 rounded-lg transition"
          >
            Submit
          </button>
        </div>
      </div>

      {/* Card-ების სია */}
      <div className="max-w-3xl mx-auto mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {cards.map((card, index) => (
          <div
            key={index}
            className="relative bg-white rounded-2xl shadow-lg p-4 hover:scale-105 transform transition"
          >
            <button
              onClick={() => handleRemove(index)}
              className="absolute top-2 right-2 text-red-500 hover:text-red-700 text-sm font-bold"
            >
              ❌
            </button>
            <h2 className="text-xl font-bold text-indigo-600">{card.name}</h2>
            <p className="text-gray-700 mt-2">{card.info}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
