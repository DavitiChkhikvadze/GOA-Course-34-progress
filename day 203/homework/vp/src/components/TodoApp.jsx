import { useState } from "react";

export default function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const addTodo = () => {
    if (!input.trim()) return;
    setTodos([...todos, { id: Date.now(), text: input }]);
    setInput("");
  };

  const removeTodo = (id) => {
    setTodos(todos.filter((t) => t.id !== id));
  };

  return (
    <div className="p-4 border rounded shadow">
      <h2 className="text-lg font-bold">Todo App</h2>
      <input
        className="border p-1 mr-2"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button className="bg-blue-500 text-white px-2 py-1" onClick={addTodo}>
        Add
      </button>
      <ul>
        {todos.map((t) => (
          <li key={t.id} className="flex justify-between mt-2">
            {t.text}
            <button
              className="bg-red-500 text-white px-2"
              onClick={() => removeTodo(t.id)}
            >
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
