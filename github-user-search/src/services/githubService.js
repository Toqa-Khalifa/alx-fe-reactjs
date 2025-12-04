import axios from "axios";

export const fetchAdvancedUsers = async (
  query,
  location,
  minRepos,
  page = 1
) => {
  let q = query;

  if (location) q += ` location:${location}`;
  if (minRepos) q += ` repos:>=${minRepos}`;

  const searchResponse = await axios.get(
    "https://api.github.com/search/users",
    {
      params: {
        q,
        page,
        per_page: 5,
      },
    }
  );

  const detailedUsers = await Promise.all(
    searchResponse.data.items.map(async (user) => {
      const detailResponse = await axios.get(
        `https://api.github.com/users/${user.login}`
      );
      return detailResponse.data;
    })
  );

  return {
    items: detailedUsers,
  };
};
