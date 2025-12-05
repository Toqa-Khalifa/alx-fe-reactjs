import React, { useState } from "react";
import { fetchUserData } from "../services/githubService";

function Search() {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false); // Required for tests

  const handleSubmit = async (event) => {
    event.preventDefault(); // Required
    setError("");
    setUser(null);

    if (!username.trim()) {
      setError("Please enter a username");
      return;
    }

    try {
      setLoading(true); // TEST requires "Loading"
      const data = await fetchUserData(username);

      if (!data || data.message === "Not Found") {
        setError("Looks like we cant find the user");
      } else {
        setUser(data); // Display search results
      }
    } catch (err) {
      setError("Looks like we cant find the user");
    } finally {
      setLoading(false); // Must end loading
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>GitHub User Search</h2>

      {/* FORM IS REQUIRED BY TESTS */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter GitHub username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={{ padding: "8px", marginRight: "10px" }}
        />

        <button type="submit" style={{ padding: "8px 15px" }}>
          Search
        </button>
      </form>

      {/* SHOW LOADING */}
      {loading && <p>Loading</p>}

      {/* SHOW ERROR */}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {/* SHOW USER RESULTS */}
      {user && (
        <div
          style={{
            marginTop: "20px",
            border: "1px solid #ccc",
            padding: "15px",
          }}
        >
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
