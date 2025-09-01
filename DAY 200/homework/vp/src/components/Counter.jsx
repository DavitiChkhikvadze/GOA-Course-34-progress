import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  return (
    <div className="flex flex-col items-center gap-3 p-4">
      <h2 className="text-xl font-bold">Count: {count}</h2>
      <div className="flex gap-2">
        <button
          onClick={() => setCount(count - step)}
          className="bg-red-500 text-white px-3 py-1 rounded-lg"
        >
          -
        </button>
        <button
          onClick={() => setCount(count + step)}
          className="bg-green-500 text-white px-3 py-1 rounded-lg"
        >
          +
        </button>
      </div>
      <input
        type="number"
        value={step}
        onChange={(e) => setStep(Number(e.target.value))}
        className="border rounded-lg p-2 w-20 text-center"
      />
    </div>
  );
}
