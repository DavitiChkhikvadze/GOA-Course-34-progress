import { useState } from 'react';

const Task = ({ title, time }) => {
  const [completed, setCompleted] = useState(false);

  return (
    <div className="p-4 border rounded-lg shadow-sm">
      <h3 className="font-bold">{title}</h3>
      <p>{time}</p>
      <p>Status: {completed ? 'Completed' : 'Pending'}</p>
      <button
        onClick={() => setCompleted(true)}
        className="mt-2 px-3 py-1 bg-green-500 text-white rounded"
      >
        Complete
      </button>
    </div>
  );
};

export default Task;
