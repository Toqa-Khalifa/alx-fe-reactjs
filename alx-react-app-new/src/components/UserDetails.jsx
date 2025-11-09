// 1. Import the useContext hook
import React, { useContext } from 'react';
// 2. Import the UserContext
import UserContext from './UserContext'; // Adjust path if UserContext.js is not in the same directory

// This component no longer accepts props
function UserDetails() {
  // 3. Consume the context to get the userData
  const userData = useContext(UserContext);

  // Add a guard clause in case context isn't provided (good practice)
  if (!userData) {
    return <div>Loading user data...</div>;
  }

  return (
    <div>
      <p>Name: {userData.name}</p>
      <p>Email: {userData.email}</p>
    </div>
  );
}

export default UserDetails;