const BASE_URL = "https://api.github.com";

const githubService = {
  searchUsers: async (query) => {
    const response = await fetch(`${BASE_URL}/search/users?q=${query}`);
    const data = await response.json();
    return data.items;
  },
  getUserDetails: async (username) => {
    const response = await fetch(`${BASE_URL}/users/${username}`);
    const data = await response.json();
    return data;
  },
};

export default githubService;
