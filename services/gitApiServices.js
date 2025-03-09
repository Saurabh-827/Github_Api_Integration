const githubApi = require("../lib/axios.lib.js");
const GITHUB_USERNAME = process.env.GITHUB_USERNAME;

const getUserData = async () => {
	const { data } = await githubApi.get(`/users/${GITHUB_USERNAME}`);
	return {
		username: data.login,
		followers: data.followers,
		following: data.following,
		public_repos: data.public_repos,
		repos_url: data.repos_url,
	};
};

const getRepoData = async (repoName) => {
	const { data } = await githubApi.get(`/repos/${GITHUB_USERNAME}/${repoName}`);
	return {
		name: data.name,
		description: data.description,
		stars: data.stargazers_count,
		forks: data.forks_count,
		url: data.html_url,
	};
};

const createIssue = async (repoName, title, body) => {
	const { data } = await githubApi.post(
		`/repos/${GITHUB_USERNAME}/${repoName}/issues`,
		{ title, body }
	);
	return { issue_url: data.html_url };
};

module.exports = { getUserData, getRepoData, createIssue };
