import { useState } from "react";

export default function LiveInput() {
  const [text, setText] = useState("");

  return (
    <div className="p-4 bg-gray-100 rounded-xl shadow-md m-4">
      <h2 className="text-lg font-bold mb-2">Live Input</h2>
      <input
        type="text"
        className="border p-2 w-full rounded"
        placeholder="დაწერე ტექსტი..."
        onChange={(e) => setText(e.target.value)}
      />
      <p className="mt-3 text-blue-600 font-medium">{text}</p>
    </div>
  );
}
