import { useEffect, useState, useRef } from "react";

export default function ScrollDirection() {
  const [direction, setDirection] = useState("");
  const lastScroll = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      if (currentScroll > lastScroll.current) {
        setDirection("down");
      } else if (currentScroll < lastScroll.current) {
        setDirection("up");
      }
      lastScroll.current = currentScroll;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-4 right-4 bg-gray-800 text-white p-2 rounded shadow">
      Scrolling: {direction}
    </div>
  );
}
