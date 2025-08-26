import { useEffect, useState } from "react";

export default function ColorChanger() {
  const colors = ["red", "blue", "green", "yellow"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const handleClick = () => {
      setIndex((prev) => (prev + 1) % colors.length);
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return (
    <div
      className="h-40 flex items-center justify-center rounded-xl shadow-md m-4 text-white font-bold"
      style={{ backgroundColor: colors[index] }}
    >
      Background Color: {colors[index]}
    </div>
  );
}
