const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/authMiddleware");
const {
  uploadDonation,
  getAllDonations,
  deleteDonation,
} = require("../controllers/donationController");
const multer = require("multer");

const storage = multer.memoryStorage();
const upload = multer({ storage });

// POST: Upload (admin only)
router.post("/", authMiddleware, upload.single("proof"), uploadDonation);

// GET: Fetch all donations
router.get("/", getAllDonations);

// DELETE: Delete donation by ID (admin only)
router.delete("/:id", authMiddleware, deleteDonation);

module.exports = router;
