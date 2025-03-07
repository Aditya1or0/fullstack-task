const express = require("express");
const app = express();
const port = 3000;

const cors = require("cors");
app.use(cors());

// Endpoint to handle greeting
app.get("/api/greet", (req, res) => {
  const name = req.query.name;

  if (!name) {
    return res.status(400).json({ error: "Name is required." });
  }

  res.json({ message: `Hello, ${name}! Welcome to Younglabs.` });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
