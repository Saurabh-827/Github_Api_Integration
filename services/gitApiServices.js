const githubApi = require("../lib/axios.lib.js");
const GITHUB_USERNAME = process.env.GITHUB_USERNAME;

const getUserData = async () => {
	const { data } = await githubApi.get(`/users/${GITHUB_USERNAME}`);
	const repoData = await githubApi.get(`/users/${GITHUB_USERNAME}/repos`);
	return {
		username: data.login,
		followers: data.followers,
		following: data.following,
		public_repos: data.public_repos,
		repositories: repoData.data.map((repo) => ({
			name: repo.name,
			url: repo.html_url,
			description: repo.description,
			language: repo.language,
		})),
	};
};

const getRepoData = async (repoName) => {
	const { data } = await githubApi.get(`/repos/${GITHUB_USERNAME}/${repoName}`);
	return {
		name: data.name,
		description: data.description,
		language: data.language,
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
