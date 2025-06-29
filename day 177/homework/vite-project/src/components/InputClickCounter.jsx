import { useState, useRef } from "react";

export default function InputClickCounter() {
  const [count, setCount] = useState(0);
  const inputRef = useRef(null);

  const handleInputClick = () => {
    setCount(prev => {
      const newCount = prev + 1;
      console.log("Input clicked:", newCount);
      return newCount;
    });
  };

  return (
    <div className="p-4 border rounded-xl shadow-xl max-w-sm mx-auto mt-6">
      <label className="block mb-2 font-semibold" htmlFor="inputClick">
        Input clicked: {count} times
      </label>
      <input
        id="inputClick"
        ref={inputRef}
        type="text"
        placeholder="Click inside me"
        onClick={handleInputClick}
        className="w-full p-2 border rounded"
      />
    </div>
  );
}
