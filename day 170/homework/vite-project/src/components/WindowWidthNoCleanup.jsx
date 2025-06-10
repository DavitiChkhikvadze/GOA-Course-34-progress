import { useState, useEffect } from "react";

const WindowWidthNoCleanup = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    // არ დავწერეთ cleanup ფუნქცია
  }, []);

  return (
    <div>
      <h2>ფანჯრის სიგანე (cleanup გარეშე)</h2>
      <p>{width}px</p>
    </div>
  );
};

export default WindowWidthNoCleanup;
