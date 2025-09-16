import { useContext } from "react";
import { UserContext } from "./UserContext";

export default function UserProfile() {
  const { user, changeName } = useContext(UserContext);

  return (
    <div className="p-4 border rounded w-60">
      <h2 className="text-lg font-bold">User Profile</h2>
      <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>
      <button
        onClick={changeName}
        className="mt-2 px-3 py-1 bg-blue-500 text-white rounded"
      >
        Change Name
      </button>
    </div>
  );
}
