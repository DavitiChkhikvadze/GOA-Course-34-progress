import React, { useEffect } from 'react';

function ProfileCard({ name, surname, image, description, sendDataToParent }) {
  useEffect(() => {
    sendDataToParent({ name, surname, description });
  }, [name, surname, description, sendDataToParent]);

  return (
    <div className="bg-white shadow-xl rounded-2xl p-6 w-80 text-center">
      <img
        className="w-24 h-24 rounded-full mx-auto mb-4"
        src={image}
        alt={`${name} ${surname}`}
      />
      <h2 className="text-xl font-bold">{name} {surname}</h2>
      <p className="text-gray-600 mt-2">{description}</p>
    </div>
  );
}

export default ProfileCard;
