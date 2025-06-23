import { useEffect, useRef, useState } from "react";

export default function Timer() {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(true);
  const intervalRef = useRef();

  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        setSeconds((s) => s + 1);
      }, 1000);
    }
    return () => clearInterval(intervalRef.current);
  }, [isRunning]);

  const pause = () => setIsRunning(false);
  const restart = () => {
    setSeconds(0);
    setIsRunning(true);
  };

  return (
    <div className="bg-gray-100 p-6 rounded-xl shadow-md max-w-md mx-auto mt-10 text-center space-y-4 border border-gray-300">
      <h1 className="text-3xl font-bold text-gray-800">⏱ Timer: {seconds}s</h1>
      <div className="flex justify-center gap-4">
        <button
          onClick={pause}
          className="bg-yellow-400 text-black px-4 py-2 rounded-md hover:bg-yellow-500 transition"
        >
          Pause
        </button>
        <button
          onClick={restart}
          className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition"
        >
          Restart
        </button>
      </div>
    </div>
  );
}
