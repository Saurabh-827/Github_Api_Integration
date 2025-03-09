require("dotenv").config();
const express = require("express");
const cors = require("cors");
const githubRoutes = require("./routes/githubRoutes.js");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Use GitHub routes
app.use("/github", githubRoutes);

// Start the server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
