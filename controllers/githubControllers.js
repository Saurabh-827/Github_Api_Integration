const githubService = require("../services/gitApiServices.js");

const getUser = async (req, res) => {
	try {
		const data = await githubService.getUserData();
		res.json(data);
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};

const getRepo = async (req, res) => {
	try {
		const repoName = req.params.repo;
		const data = await githubService.getRepoData(repoName);
		res.json(data);
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};

const postIssue = async (req, res) => {
	try {
		const repoName = req.params.repo;
		const { title, body } = req.body;
		const data = await githubService.createIssue(repoName, title, body);
		res.json(data);
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};

module.exports = { getUser, getRepo, postIssue };
