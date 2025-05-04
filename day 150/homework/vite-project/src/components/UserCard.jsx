import React from "react";

function UserCard({ name, age }) {
  return (
    <div className="bg-white shadow-md rounded-2xl p-4 text-center hover:scale-105 transition-transform">
      <h2 className="text-xl font-semibold text-gray-800">{name}</h2>
      <p className="text-gray-500">ასაკი: {age}</p>
    </div>
  );
}

export default UserCard;
