import { useEffect, useState } from "react";

export default function Timer() {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let interval;
    if (running) {
      interval = setInterval(() => setTime((t) => t + 1), 1000);
    }
    return () => clearInterval(interval);
  }, [running]);

  return (
    <div className="p-4 bg-gray-100 rounded-xl shadow-md m-4 text-center">
      <h2 className="text-lg font-bold">⏱ Timer: {time}s</h2>
      <div className="flex gap-2 mt-3 justify-center">
        <button onClick={() => setRunning(false)} className="px-3 py-1 bg-red-500 text-white rounded">Pause</button>
        <button onClick={() => setRunning(true)} className="px-3 py-1 bg-green-500 text-white rounded">Resume</button>
        <button onClick={() => {setTime(0); setRunning(false);}} className="px-3 py-1 bg-blue-500 text-white rounded">Restart</button>
      </div>
    </div>
  );
}
