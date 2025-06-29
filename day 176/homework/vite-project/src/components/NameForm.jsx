import { useRef, useState } from "react";

export default function NameForm() {
  const [name, setName] = useState("");
  const hasSubmitted = useRef(false);

  const handleSubmit = () => {
    localStorage.setItem("username", name);
    hasSubmitted.current = true;
  };

  return (
    <div className="p-4 border rounded-xl shadow-xl text-center max-w-sm mx-auto mt-6">
      <input
        type="text"
        placeholder="Enter your name"
        className="border p-2 rounded w-full mb-4"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button
        onClick={handleSubmit}
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Save Name
      </button>
      {hasSubmitted.current && (
        <p className="mt-2 text-green-600 font-semibold">Name saved!</p>
      )}
    </div>
  );
}
