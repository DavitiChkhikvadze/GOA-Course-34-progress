import { useState } from "react";

export default function Profile({ profile }) {
  const [isFavorite, setIsFavorite] = useState(profile.isFavorite);

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <div className="border p-4 m-2 rounded shadow flex items-center gap-4">
      <div>
        <h3>{profile.name}</h3>
        <p> {profile.phone}</p>
        <p> {profile.email}</p>
      </div>
      <span
        onClick={toggleFavorite}
        style={{ cursor: "pointer", fontSize: "24px", color: isFavorite ? "gold" : "black" }}
      >
        ★
      </span>
    </div>
  );
}
