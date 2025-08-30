import { useState } from "react";

export default function UsersLoader() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);

  const loadUsers = async () => {
    try {
      setError(null);
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      if (!res.ok) throw new Error("Request failed");
      const data = await res.json();
      setUsers(data);
    } catch (err) {
      setError("მონაცემების წამოღება ვერ მოხერხდა ❌");
    }
  };

  return (
    <div className="p-4">
      <button
        onClick={loadUsers}
        className="bg-blue-600 text-white px-4 py-2 rounded-xl shadow hover:bg-blue-700"
      >
        Load Users
      </button>

      {error && <p className="text-red-500 mt-2">{error}</p>}

      <ul className="mt-4 space-y-2">
        {users.map((u) => (
          <li
            key={u.id}
            className="p-2 bg-gray-100 rounded-lg shadow hover:bg-gray-200"
          >
            {u.name} – {u.email}
          </li>
        ))}
      </ul>
    </div>
  );
}
