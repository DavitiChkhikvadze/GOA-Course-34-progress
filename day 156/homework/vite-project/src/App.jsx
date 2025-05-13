import React from "react";
import ProfileCard from "./components/ProfileCard";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-6">User Profiles</h1>
      <ProfileCard />
    </div>
  );
}

export default App;
