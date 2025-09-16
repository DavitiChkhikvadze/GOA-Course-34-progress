import { createContext, useState } from "react";

export const UserContext = createContext();

export function UserProvider({ children }) {
  const [user, setUser] = useState({ name: "Temuri", age: 20 });

  const changeName = () => {
    setUser((prev) => ({ ...prev, name: "Giorgi" }));
  };

  return (
    <UserContext.Provider value={{ user, changeName }}>
      {children}
    </UserContext.Provider>
  );
}
