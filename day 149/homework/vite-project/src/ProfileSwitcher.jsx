import React, { useState } from 'react';
import ProfileCard from './ProfileCard';

const profiles = [
  { name: "Daviti", age: 15, job: "Programmer" },
  { name: "Nika", age: 16, job: "Designer" },
  { name: "Luka", age: 14, job: "Web Developer" }
];

function ProfileSwitcher() {
  const [index, setIndex] = useState(0);

  const nextProfile = () => {
    setIndex((index + 1) % profiles.length);
  };

  return (
    <div>
      <ProfileCard {...profiles[index]} />
      <button onClick={nextProfile}>შემდეგი პროფილი</button>
    </div>
  );
}

export default ProfileSwitcher;
