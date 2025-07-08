export default function TodoItem({ todo, dispatch }) {
  return (
    <div className="flex items-center justify-between bg-white dark:bg-gray-800 p-3 rounded shadow mb-2">
      <span
        onClick={() => dispatch({ type: 'TOGGLE', payload: todo.id })}
        className={`cursor-pointer text-lg ${
          todo.completed ? 'line-through text-gray-400' : ''
        }`}
      >
        {todo.text}
      </span>
      <button
        onClick={() => dispatch({ type: 'REMOVE', payload: todo.id })}
        className="text-red-500 hover:text-red-700 font-bold"
      >
        ×
      </button>
    </div>
  );
}
