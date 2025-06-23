import { useRef } from "react";

export default function ScrollBoxes() {
  const box2Ref = useRef();

  const scrollToBox2 = () => {
    box2Ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="flex justify-between p-6 h-[200vh]">
      <div
        className="w-40 h-40 bg-blue-500 hover:bg-blue-700 text-white flex items-center justify-center rounded-lg shadow-lg cursor-pointer transition-all duration-300"
        onClick={scrollToBox2}
        onMouseEnter={scrollToBox2}
      >
        Box 1
      </div>
      <div
        ref={box2Ref}
        className="w-40 h-40 bg-green-500 text-white flex items-center justify-center rounded-lg shadow-lg"
      >
        Box 2
      </div>
    </div>
  );
}
