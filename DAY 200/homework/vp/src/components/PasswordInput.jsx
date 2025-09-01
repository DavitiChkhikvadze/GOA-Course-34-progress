import { useState } from "react";

export default function PasswordInput() {
  const [show, setShow] = useState(false);
  const [password, setPassword] = useState("");

  return (
    <div className="flex items-center gap-2 p-4">
      <input
        type={show ? "text" : "password"}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter password"
        className="border rounded-lg p-2"
      />
      <button
        onClick={() => setShow(!show)}
        className="bg-blue-500 text-white px-3 py-1 rounded-lg"
      >
        {show ? "Hide" : "Show"}
      </button>
    </div>
  );
}
