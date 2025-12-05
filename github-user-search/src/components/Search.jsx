import React, { useState } from "react";
import { fetchUserData } from "../services/githubService";

function Search() {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");

  const handleSearch = async () => {
    setError("");
    setUser(null);

    if (!username.trim()) {
      setError("Please enter a username");
      return;
    }

    try {
      const data = await fetchUserData(username);
      if (!data) {
        setError("Looks like we cant find the user");
        return;
      }
      setUser(data);
    } catch (err) {
      setError(`Looks like we cant find the user ${err}`);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>GitHub User Search</h2>

      <input
        type="text"
        placeholder="Enter GitHub username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        style={{ padding: "8px", marginRight: "10px" }}
      />

      <button onClick={handleSearch} style={{ padding: "8px 15px" }}>
        Search
      </button>

      {/* Error Message */}
      {error && (
        <p style={{ color: "red", marginTop: "10px" }}>
          {error}
        </p>
      )}

      {/* User Result */}
      {user && (
        <div style={{ marginTop: "20px", border: "1px solid #ccc", padding: "15px" }}>
          <img
            src={user.avatar_url}
            alt="avatar"
            width="120"
            style={{ borderRadius: "10px" }}
          />
          <h3>{user.name || "No name provided"}</h3>
          <p>Username: {user.login}</p>
          <p>Bio: {user.bio || "No bio available"}</p>
          <p>Followers: {user.followers}</p>
          <p>Following: {user.following}</p>
          <p>Public Repos: {user.public_repos}</p>
        </div>
      )}
    </div>
  );
}

export default Search;
