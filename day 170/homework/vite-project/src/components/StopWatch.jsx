import { useState, useEffect } from "react";

const StopWatch = () => {
  const [seconds, setSeconds] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let interval;
    if (running) {
      interval = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
    }

    // cleanup ფუნქცია
    return () => clearInterval(interval);
  }, [running]);

  return (
    <div>
      <h2>Stopwatch</h2>
      <p>{seconds} წამი</p>
      <button onClick={() => setRunning(true)}>დაწყება</button>
      <button onClick={() => setRunning(false)}>გაჩერება</button>
      <button onClick={() => setSeconds(0)}>გადატვირთვა</button>
    </div>
  );
};

export default StopWatch;
