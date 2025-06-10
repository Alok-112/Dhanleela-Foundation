const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const User = require("../models/User");

// Login route
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  // Hardcoded login OR use DB check
  if (email === "admin@ngo.com" && password === "admin123") {
    const token = jwt.sign({ email }, process.env.JWT_SECRET, { expiresIn: "1d" });
    return res.json({ token });
  }

  res.status(401).json({ error: "Invalid credentials" });
});

module.exports = router;
