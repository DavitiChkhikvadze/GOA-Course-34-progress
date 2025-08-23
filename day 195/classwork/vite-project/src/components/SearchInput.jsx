import { useState, useEffect } from "react";
import { useDebounce } from "../hooks/useDebounce";

export default function SearchInput() {
  const [text, setText] = useState("");
  const debouncedText = useDebounce(text, 500);

  useEffect(() => {
    if (debouncedText) {
      console.log("Debounced value:", debouncedText);
    }
  }, [debouncedText]);

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type something..."
      />
      <p>
        Debounced value: <span>{debouncedText}</span>
      </p>
    </div>
  );
}
