import React, { useState } from 'react';

function ToggleFunction() {
  const [status, setStatus] = useState("OFF");

  const toggleStatus = () => {
    setStatus(prev => prev === "ON" ? "OFF" : "ON");
  };

  return (
    <div>
      <h2>სტატუსი: {status}</h2>
      <button onClick={toggleStatus}>
        გადართვა
      </button>
    </div>
  );
}

export default ToggleFunction;
