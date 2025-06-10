import { useState, useEffect } from "react";

const WindowWidth = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    // cleanup ფუნქცია - წაიშლება eventListener როდესაც კომპონენტი გაქრება
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      <h2>ფანჯრის სიგანე:</h2>
      <p>{width}px</p>
    </div>
  );
};

export default WindowWidth;
