const UserStatus = ({ loggedIn }) => {
    return (
      <h2 className="text-xl font-semibold">
        {loggedIn ? 'Welcome back!' : 'Please Register'}
      </h2>
    );
  };
  
  export default UserStatus;
  