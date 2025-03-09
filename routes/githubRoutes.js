const express = require("express");
const {
	getUser,
	getRepo,
	postIssue,
} = require("../controllers/githubControllers.js");

const router = express.Router();

router.get("/", getUser);
router.get("/:repo", getRepo);
router.post("/:repo/issues", postIssue);

module.exports = router;
