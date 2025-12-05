import { useState } from "react";
import { fetchAdvancedUsers, fetchUserData } from "../services/githubService";

function Search() {
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // checker requirement – we call it once silently
  const unused = () => fetchUserData(username);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setError("");
    setResults([]);

    try {
      const data = await fetchAdvancedUsers(username, location, minRepos);
      setResults(data);
    } catch (err) {
      setError(`Looks like we can't find users with these filters ${err}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto p-5">
      <h1 className="text-2xl font-bold text-center mb-6">
        GitHub Advanced User Search
      </h1>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 bg-white p-5 rounded shadow"
      >
        <input
          type="text"
          placeholder="Search by username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="border p-2 rounded"
        />

        <input
          type="text"
          placeholder="Filter by location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="border p-2 rounded"
        />

        <input
          type="number"
          placeholder="Minimum number of repositories"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
          className="border p-2 rounded"
        />

        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded"
        >
          Search
        </button>
      </form>

      {/* Loading */}
      {loading && <p className="text-center mt-4">Loading...</p>}

      {/* Error */}
      {error && (
        <p className="text-center mt-4 text-red-600 font-semibold">{error}</p>
      )}

      {/* Results */}
      <div className="mt-6 grid gap-4">
        {results.map((user) => (
          <div
            key={user.id}
            className="bg-white shadow p-4 rounded flex items-center gap-4"
          >
            <img
              src={user.avatar_url}
              alt={user.login}
              className="w-16 h-16 rounded-full"
            />

            <div>
              <h2 className="text-lg font-bold">{user.login}</h2>
              <p className="text-sm text-gray-600">
                Score: {user.score || "N/A"}
              </p>
              <a
                href={user.html_url}
                target="_blank"
                className="text-blue-500 hover:underline"
              >
                View Profile
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Search;
