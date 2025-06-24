const express = require("express");
const router = express.Router();
const { protect, adminOnly } = require("../middleware/authMiddleware");
const Donation = require("../models/Donation");

// Get all donations (Admin only)
router.get("/donations", protect, adminOnly, async (req, res) => {
  try {
    const donations = await Donation.find().sort({ date: -1 });
    res.json(donations);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;
