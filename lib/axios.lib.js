require("dotenv").config();
const axios = require("axios");

const githubApi = axios.create({
	baseURL: "https://api.github.com",
	headers: {
		Authorization: `token ${process.env.GITHUB_TOKEN}`,
		Accept: "application/vnd.github.v3+json",
	},
});

module.exports = githubApi;
