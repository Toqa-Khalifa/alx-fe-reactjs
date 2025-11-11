import React, { useContext } from "react";
import UserContext from "../UserContext";

function UserProfile() {
  const userData = useContext(UserContext);

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h2>User Profile</h2>
      <p>Name: {userData?.name}</p>
      <p>Email: {userData?.email}</p>
    </div>
  );
}

export default UserProfile;
