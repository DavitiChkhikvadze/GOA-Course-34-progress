import React, { useState } from "react";

const App = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleClick = (value) => {
    if (value === "C") {
      setInput("");
      setResult("");
    } else if (value === "=") {
      try {
        setResult(eval(input).toString());
      } catch {
        setResult("შეცდომა");
      }
    } else {
      setInput(input + value);
    }
  };

  const buttons = [
    "7", "8", "9", "+",
    "4", "5", "6", "-",
    "1", "2", "3", "*",
    "0", "%", "C", "=",
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="bg-gray-800 p-6 rounded-2xl shadow-xl w-80">
        <div className="bg-black text-white text-right text-2xl rounded-lg p-4 mb-4 h-16">
          <div>{input || "0"}</div>
          {result && <div className="text-green-400 text-lg">{result}</div>}
        </div>
        <div className="grid grid-cols-4 gap-3">
          {buttons.map((btn) => (
            <button
              key={btn}
              onClick={() => handleClick(btn)}
              className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-3 rounded-xl text-xl"
            >
              {btn}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
