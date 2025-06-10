const express = require("express");
const router = express.Router();
const { uploadDonation, getAllDonations } = require("../controllers/donationController");
const authMiddleware = require("../middleware/authMiddleware");
const multer = require("multer");

const storage = multer.memoryStorage();
const upload = multer({ storage });

// 🟢 Protected upload route
router.post("/", authMiddleware, upload.single("proof"), uploadDonation);

// 🟢 Public fetch route
router.get("/", getAllDonations);

module.exports = router;
