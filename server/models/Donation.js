const mongoose = require("mongoose");

const DonationSchema = new mongoose.Schema({
  name: String,
  phone: String,
  amount: Number,
  message: String,
  paymentId: String,
  orderId: String,
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Donation", DonationSchema);
