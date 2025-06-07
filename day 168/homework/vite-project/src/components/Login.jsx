import { useState } from "react";

export default function Login({ user, onRegister, onLogout, onDelete, onUpdate }) {
  const [form, setForm] = useState({ username: "", password: "" });
  const [editing, setEditing] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onRegister(form);
    setForm({ username: "", password: "" });
  };

  const handleEdit = () => {
    onUpdate(form);
    setEditing(false);
    setForm({ username: "", password: "" });
  };

  if (user) {
    return (
      <div className="bg-white text-black p-6 rounded-2xl shadow-xl w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4">Hello, {user.username} 👋</h2>
        {editing ? (
          <form onSubmit={(e) => { e.preventDefault(); handleEdit(); }} className="space-y-3">
            <input
              type="text"
              name="username"
              placeholder="New Username"
              value={form.username}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
            <input
              type="password"
              name="password"
              placeholder="New Password"
              value={form.password}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded w-full">
              Save Changes
            </button>
          </form>
        ) : (
          <div className="space-y-3">
            <button onClick={() => setEditing(true)} className="bg-yellow-400 px-4 py-2 rounded w-full">Edit Account</button>
            <button onClick={onLogout} className="bg-blue-600 px-4 py-2 rounded w-full text-white">Log Out</button>
            <button onClick={onDelete} className="bg-red-600 px-4 py-2 rounded w-full text-white">Delete Account</button>
          </div>
        )}
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white text-black p-6 rounded-2xl shadow-xl w-full max-w-md space-y-4">
      <h2 className="text-2xl font-bold">Register</h2>
      <input
        type="text"
        name="username"
        placeholder="Username"
        value={form.username}
        onChange={handleChange}
        className="w-full p-2 border rounded"
        required
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={form.password}
        onChange={handleChange}
        className="w-full p-2 border rounded"
        required
      />
      <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded w-full">
        Register
      </button>
    </form>
  );
}
