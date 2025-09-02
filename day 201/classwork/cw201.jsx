import { useState } from "react";

export default function ProductSearch() {
  const [query, setQuery] = useState("");
  const products = ["Apple", "Banana", "Orange"];

  const filtered = products.filter((p) =>
    p.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="p-4">
      <input
        type="text"
        placeholder="Search product..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="border rounded-lg p-2 w-full"
      />
      <ul className="mt-2">
        {filtered.map((item) => (
          <li key={item} className="p-1">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}