import React from "react";
import ProfilePage from "./ProfilePage";
import UserContext from "./UserContext";

function App() {
  const userData = {
    name: "Sara Ahmed",
    email: "sara.ahmed@example.com",
  };

  return (
    <UserContext.Provider value={userData}>
      <ProfilePage />
    </UserContext.Provider>
  );
}

export default App;
