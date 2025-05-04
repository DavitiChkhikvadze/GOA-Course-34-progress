import React from "react";
import UserCard from "./UserCard";

function UsersList({ users }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
      {users.map((user) => (
        <UserCard key={user.id} name={user.name} age={user.age} />
      ))}
    </div>
  );
}

export default UsersList;
