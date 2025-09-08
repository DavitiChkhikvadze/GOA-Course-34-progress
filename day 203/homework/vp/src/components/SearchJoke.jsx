import { useState, useEffect } from "react";
import { useDebounce } from "../hooks/useDebounce";

export default function SearchJoke() {
  const [query, setQuery] = useState("");
  const debounced = useDebounce(query, 500);
  const [joke, setJoke] = useState(null);

  useEffect(() => {
    if (!debounced) return;
    fetch("https://official-joke-api.appspot.com/random_joke")
      .then((res) => res.json())
      .then((data) => setJoke(data));
  }, [debounced]);

  return (
    <div className="p-4 border rounded shadow">
      <h2 className="text-lg font-bold">Joke Search</h2>
      <input
        className="border p-1"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Type something..."
      />
      {joke && (
        <p className="mt-2">
          {joke.setup} — <strong>{joke.punchline}</strong>
        </p>
      )}
    </div>
  );
}
