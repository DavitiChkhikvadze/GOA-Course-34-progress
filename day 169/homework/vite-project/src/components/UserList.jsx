import React, { useEffect, useState } from "react";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await res.json();
        setUsers(data);
      } catch (err) {
        console.error("Failed to fetch users:", err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) {
    return <p className="text-center text-blue-500 text-xl mt-10">Loading...</p>;
  }

  if (error) {
    return <p className="text-center text-red-500 text-xl mt-10">Error loading users</p>;
  }

  return (
    <div className="max-w-4xl mx-auto mt-10 p-4 bg-white shadow-xl rounded-xl">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">User List</h1>
      <ul className="space-y-4">
        {users.map((user) => (
          <li
            key={user.id}
            className="p-4 border rounded-lg hover:bg-gray-100 transition"
          >
            <p className="text-lg font-semibold text-gray-800">
              {user.name}
            </p>
            <p className="text-gray-600">{user.email}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
