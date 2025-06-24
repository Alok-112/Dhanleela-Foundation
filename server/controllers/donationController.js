const Donation = require("../models/Donation");

// POST Upload Donation
exports.uploadDonation = async (req, res) => {
  try {
    const { name, amount, date } = req.body;
    const proof = req.file;

    if (!proof) {
      return res.status(400).json({ error: "Proof image is required" });
    }

    const donation = new Donation({
      name,
      amount,
      date,
      proof: {
        data: proof.buffer,
        contentType: proof.mimetype,
      },
    });

    await donation.save();
    res.status(201).json({ message: "Donation uploaded successfully", donation });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to upload donation" });
  }
};

// GET all donations
exports.getAllDonations = async (req, res) => {
  try {
    const donations = await Donation.find().sort({ date: -1 });
    res.json(donations);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
};

// DELETE by ID
exports.deleteDonation = async (req, res) => {
  try {
    await Donation.findByIdAndDelete(req.params.id);
    res.json({ message: "Donation deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: "Failed to delete donation" });
  }
};
