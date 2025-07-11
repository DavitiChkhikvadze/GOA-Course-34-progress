import { useState } from 'react';

export default function TextForm({ onSubmit }) {
  const [value, setValue] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (value.trim() === '') return;
    onSubmit(value.trim());
    setValue('');
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        type="text"
        placeholder="Type something..."
        value={value}
        onChange={e => setValue(e.target.value)}
        className="flex-1 px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <button
        type="submit"
        className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
      >
        Submit
      </button>
    </form>
  );
}
