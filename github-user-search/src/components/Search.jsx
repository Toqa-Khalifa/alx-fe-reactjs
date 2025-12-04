import { useState } from "react";
import { fetchAdvancedUsers } from "../services/githubService";

function Search() {
  const [query, setQuery] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setUsers([]);
    setPage(1);

    try {
      const data = await fetchAdvancedUsers(query, location, minRepos, 1);
      setUsers(data.items);
    } catch {
      setError("Looks like we cant find any users");
    } finally {
      setLoading(false);
    }
  };

  const loadMore = async () => {
    const nextPage = page + 1;
    setLoading(true);

    const data = await fetchAdvancedUsers(query, location, minRepos, nextPage);
    setUsers((prev) => [...prev, ...data.items]);
    setPage(nextPage);
    setLoading(false);
  };

  return (
    <div className="max-w-3xl mx-auto p-4">
      <form
        onSubmit={handleSearch}
        className="bg-white shadow-md rounded p-4 space-y-4"
      >
        <input
          className="w-full border p-2 rounded"
          placeholder="GitHub username"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          required
        />

        <input
          className="w-full border p-2 rounded"
          placeholder="Location (optional)"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />

        <input
          className="w-full border p-2 rounded"
          type="number"
          placeholder="Minimum repositories"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
        />

        <button
          className="w-full bg-black text-white p-2 rounded hover:bg-gray-800"
          type="submit"
        >
          Search
        </button>
      </form>

      {loading && <p className="text-center mt-4">Loading...</p>}
      {error && <p className="text-center text-red-500 mt-4">{error}</p>}

      <div className="mt-6 space-y-4">
        {users.map((user) => (
          <div
            key={user.id}
            className="flex gap-4 items-center border p-4 rounded"
          >
            <img
              src={user.avatar_url}
              alt={user.login}
              className="w-16 h-16 rounded-full"
            />
            <div>
              <h3 className="font-bold">{user.login}</h3>
              <p className="text-sm text-gray-600">
                Location: {user.location || "N/A"}
              </p>
              <p className="text-sm text-gray-600">
                Repositories: {user.public_repos ?? "N/A"}
              </p>
              <a
                href={user.html_url}
                target="_blank"
                rel="noreferrer"
                className="text-blue-600 underline"
              >
                View Profile
              </a>
            </div>
          </div>
        ))}
      </div>

      {users.length > 0 && (
        <button
          onClick={loadMore}
          className="mt-6 w-full bg-gray-700 text-white p-2 rounded"
        >
          Load More
        </button>
      )}
    </div>
  );
}

export default Search;
