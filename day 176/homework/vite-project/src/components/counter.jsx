import { useState, useRef, useEffect } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  const prevCount = useRef(0);
  const [direction, setDirection] = useState("");

  useEffect(() => {
    if (count > prevCount.current) setDirection("up");
    else if (count < prevCount.current) setDirection("down");
    prevCount.current = count;
  }, [count]);

  return (
    <div className="p-4 border rounded-xl shadow-xl text-center max-w-sm mx-auto mt-6">
      <h1 className="text-3xl font-bold mb-4">{count}</h1>
      <div className="flex justify-center gap-4 mb-4">
        <button
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
          onClick={() => setCount(count + 1)}
        >
          Increase
        </button>
        <button
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
          onClick={() => setCount(count - 1)}
        >
          Decrease
        </button>
      </div>
      <p className="text-xl">{direction && `Direction: ${direction}`}</p>
    </div>
  );
}
