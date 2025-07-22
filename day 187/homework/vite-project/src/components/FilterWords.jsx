import React, { useState, useTransition } from "react";

const words = Array.from({ length: 10000 }, (_, i) => `სიტყვა-${i}`);

export default function FilterWords() {
  const [input, setInput] = useState("");
  const [filtered, setFiltered] = useState(words);
  const [isPending, startTransition] = useTransition();

  const handleChange = (e) => {
    const value = e.target.value;
    setInput(value);

    startTransition(() => {
      const result = words.filter((word) => word.includes(value));
      setFiltered(result);
    });
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-2">სიტყვების ფილტრაცია</h2>
      <input
        type="text"
        value={input}
        onChange={handleChange}
        placeholder="იპოვე სიტყვა..."
        className="border p-2 w-full mb-2"
      />
      {isPending && <p className="text-sm text-gray-500">მიმდინარეობს ძიება...</p>}
      <ul className="h-60 overflow-auto border p-2">
        {filtered.map((word, index) => (
          <li key={index}>{word}</li>
        ))}
      </ul>
    </div>
  );
}
