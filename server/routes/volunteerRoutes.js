const express = require("express");
const router = express.Router();
const Volunteer = require("../models/Volunteer");

router.post("/", async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;

    if (!name || !email || !phone) {
      return res.status(400).json({ error: "All fields are required." });
    }

    const volunteer = new Volunteer({ name, email, phone, message });
    await volunteer.save();
    res.status(201).json({ message: "Volunteer info submitted!" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;
