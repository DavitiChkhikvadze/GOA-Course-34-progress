import { useState } from 'react';
import Name from './Name';
import Description from './Description';
import Avatar from './Avatar';

const ProfileCard = ({ fullName, description, imageUrl }) => {
  const [isFollowing, setIsFollowing] = useState(false);

  return (
    <div className="max-w-sm p-4 bg-white rounded-xl shadow-md flex flex-col items-center space-y-4">
      <Avatar imageUrl={imageUrl} />
      <Name fullName={fullName} />
      <Description text={description} />
      <button
        onClick={() => setIsFollowing(!isFollowing)}
        className={`px-4 py-2 rounded ${
          isFollowing ? 'bg-green-500' : 'bg-blue-500'
        } text-white`}
      >
        {isFollowing ? 'Following' : 'Follow'}
      </button>
    </div>
  );
};

export default ProfileCard;
