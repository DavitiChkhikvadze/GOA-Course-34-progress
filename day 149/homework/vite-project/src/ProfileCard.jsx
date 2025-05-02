import React from 'react';

function ProfileCard({ name, age, job }) {
  return (
    <div style={{ border: "1px solid gray", padding: "10px", borderRadius: "10px" }}>
      <h3>{name}</h3>
      <p>ასაკი: {age}</p>
      <p>პოზიცია: {job}</p>
    </div>
  );
}

export default ProfileCard;
