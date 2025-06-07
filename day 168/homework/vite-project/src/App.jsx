import { useState, useEffect } from "react";
import Login from "./components/Login";

export default function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  const handleRegister = (newUser) => {
    localStorage.setItem("user", JSON.stringify(newUser));
    setUser(newUser);
  };

  const handleLogout = () => {
    setUser(null);
  };

  const handleDelete = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  const handleUpdate = (updatedUser) => {
    localStorage.setItem("user", JSON.stringify(updatedUser));
    setUser(updatedUser);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-500 to-purple-600 text-white flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl font-bold mb-6">🎉 Welcome to Auth App 🎉</h1>
      <Login
        user={user}
        onRegister={handleRegister}
        onLogout={handleLogout}
        onDelete={handleDelete}
        onUpdate={handleUpdate}
      />
    </div>
  );
}