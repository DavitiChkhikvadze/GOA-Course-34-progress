import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [prevCount, setPrevCount] = useState(0);
  const [history, setHistory] = useState([]);

  const updateCount = (newCount) => {
    setPrevCount(count);
    setCount(newCount);
    setHistory((prevHistory) => {
      const updated = [newCount, ...prevHistory];
      return updated.slice(0, 5);
    });
  };

  const increment = () => updateCount(count + 1);
  const decrement = () => updateCount(count - 1);
  const reset = () => updateCount(0);

  const countColor =
    count > prevCount
      ? "text-green-500"
      : count < prevCount
      ? "text-red-500"
      : "text-black";

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <div className="bg-white p-8 rounded-2xl shadow-xl text-center">
        <h1 className="text-3xl font-bold mb-6">Simple Counter App</h1>
        <p className={`text-6xl font-extrabold mb-6 transition-colors duration-300 ${countColor}`}>
          {count}
        </p>
        <div className="space-x-4 mb-6">
          <button
            onClick={decrement}
            className="bg-red-400 hover:bg-red-500 text-white px-4 py-2 rounded-xl transition"
          >
            Decrement
          </button>
          <button
            onClick={reset}
            className="bg-gray-400 hover:bg-gray-500 text-white px-4 py-2 rounded-xl transition"
          >
            Reset
          </button>
          <button
            onClick={increment}
            className="bg-green-400 hover:bg-green-500 text-white px-4 py-2 rounded-xl transition"
          >
            Increment
          </button>
        </div>

        <div className="mt-4 text-left">
          <h2 className="text-xl font-semibold mb-2">History (Last 5 changes):</h2>
          {history.length === 0 ? (
            <p className="text-gray-500">No changes yet.</p>
          ) : (
            <ul className="list-disc list-inside text-gray-700">
              {history.map((item, index) => (
                <li key={index}>Value: {item}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
