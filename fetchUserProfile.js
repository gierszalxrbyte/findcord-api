// shitcord leak?
const axios = require('axios');

const fetchUserProfile = async (userId, headers) => {
  const url = `https://discord.com/api/v9/users/${userId}/profile?with_mutual_guilds=true&with_mutual_friends=true&with_mutual_friends_count=false`;
  const { data } = await axios.get(url, { headers });
  return data;
};

module.exports = { fetchUserProfile };
