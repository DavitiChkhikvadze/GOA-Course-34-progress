import { useEffect, useState } from "react";

const Timer = () => {
  const [seconds, setSeconds] = useState(0);
  const [active, setActive] = useState(true);

  useEffect(() => {
    let interval;
    if (active) {
      interval = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [active]);

  const handleReset = () => {
    setSeconds(0);
    setActive(false);
  };

  const handleStop = () => setActive(false);
  const handleResume = () => setActive(true);

  return (
    <div className="p-4 bg-white rounded-xl shadow-md max-w-md mx-auto my-6 text-center">
      <h2 className="text-2xl font-bold mb-4">⏱️ ტაიმერი: {seconds} წამი</h2>
      <div className="space-x-4">
        <button
          onClick={handleReset}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
        >
          Reset
        </button>
        <button
          onClick={handleStop}
          className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600"
        >
          Stop
        </button>
        <button
          onClick={handleResume}
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          Resume
        </button>
      </div>
    </div>
  );
};

export default Timer;
