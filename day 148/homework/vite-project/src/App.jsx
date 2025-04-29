import React from 'react';
import ProfileCard from './ProfileCard';

function App() {
  const handleReceiveData = (data) => {
    console.log("შვილი კომპონენტიდან მიღებული ინფორმაცია:", data);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <ProfileCard
        name="დავით"
        surname="ჩხიკვაძე"
        image="./src/image1.png"
        description="React Developer, რომელიც სწავლობს კომპონენტებს და prop-ებს ❤"
        sendDataToParent={handleReceiveData}
      />
    </div>
  );
}

export default App;
