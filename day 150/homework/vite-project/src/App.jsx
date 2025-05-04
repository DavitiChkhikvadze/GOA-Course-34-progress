import React from "react";
import UsersList from "./components/UsersList";

function App() {
  const users = [
    { id: 1, name: "Daviti", age: 15 },
    { id: 2, name: "Luka", age: 16 },
    { id: 3, name: "Lasha", age: 16 },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-6">მომხმარებლები</h1>
      <UsersList users={users} />
    </div>
  );
}

export default App;
