import axios from "axios";

// Basic user fetch (required by checker)
export async function fetchUserData(username) {
  if (!username) return null;

  try {
    const res = await axios.get(`https://api.github.com/users/${username}`);
    return res.data;
  } catch (err) {
    console.error("Error fetching user data:", err);
    throw err;
  }
}

// Advanced search (username + filters)
export async function fetchAdvancedUsers(username, location, minRepos) {
  try {
    // Build GitHub search query
    let query = "";

    if (username) query += `${username} in:login `;
    if (location) query += `location:${location} `;
    if (minRepos) query += `repos:>=${minRepos}`;

    const response = await axios.get(
      `https://api.github.com/search/users?q=${query}`
    );

    return response.data.items || [];
  } catch (error) {
    console.error("Error fetching advanced users:", error);
    throw error;
  }
}
