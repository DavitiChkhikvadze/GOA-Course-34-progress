import React, { useState } from "react";
import usersData from "./Data";

function ProfileCard() {
  const [users, setUsers] = useState(usersData);

  const toggleFollow = (id) => {
    const updatedUsers = users.map((user) =>
      user.id === id ? { ...user, following: !user.following } : user
    );
    setUsers(updatedUsers);
  };

  return (
    <div className="p-4 grid gap-4">
      {users.map((user) => (
        <div key={user.id} className="border p-4 rounded-xl shadow-md">
          <h2 className="text-xl font-semibold">{user.name}</h2>
          <p>Age: {user.age}</p>
          <button
            onClick={() => toggleFollow(user.id)}
            className={`mt-2 px-4 py-1 rounded ${
              user.following ? "bg-green-500 text-white" : "bg-blue-500 text-white"
            }`}
          >
            {user.following ? "Following" : "Follow"}
          </button>
        </div>
      ))}
    </div>
  );
}

export default ProfileCard;
