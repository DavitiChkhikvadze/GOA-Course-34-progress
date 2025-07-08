import { useReducer, useState } from 'react';
import { todoReducer, initialState } from '../reducer';
import TodoItem from './TodoItem';

export default function TodoList() {
  const [state, dispatch] = useReducer(todoReducer, initialState);
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim() === '') return;
    dispatch({ type: 'ADD', payload: input });
    setInput('');
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      <h1 className="text-3xl font-bold text-center text-blue-600 dark:text-blue-300 mb-6">To-Do List</h1>
      <form onSubmit={handleSubmit} className="flex mb-4">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter a task..."
          className="flex-grow p-2 border border-gray-300 rounded-l dark:bg-gray-700 dark:text-white"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-r hover:bg-blue-600"
        >
          Add
        </button>
      </form>

      {state.length === 0 ? (
        <p className="text-center text-gray-500">No tasks yet.</p>
      ) : (
        state.map((todo) => (
          <TodoItem key={todo.id} todo={todo} dispatch={dispatch} />
        ))
      )}
    </div>
  );
}
