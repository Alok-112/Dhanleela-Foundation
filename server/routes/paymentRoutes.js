const express = require("express");
const router = express.Router();
const razorpay = require("../utils/razorpayInstance");
const crypto = require("crypto");
const Donation = require("../models/Donation");

// Create Order
router.post("/create-order", async (req, res) => {
  const { amount, name } = req.body;

  const options = {
    amount: amount * 100, // convert ₹ to paise
    currency: "INR",
    receipt: `receipt_${Date.now()}`,
  };

  try {
    const order = await razorpay.orders.create(options);
    res.json({ orderId: order.id, key: process.env.RAZORPAY_KEY_ID, name });
  } catch (err) {
    res.status(500).json({ error: "Failed to create Razorpay order" });
  }
});

// Save donation (after successful payment)
router.post("/verify", async (req, res) => {
  const {
    razorpay_order_id,
    razorpay_payment_id,
    razorpay_signature,
    name,
    amount,
    phone,
    message,
  } = req.body;

  const body = razorpay_order_id + "|" + razorpay_payment_id;

  const expectedSignature = crypto
    .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET) // ✅ Correct key
    .update(body)
    .digest("hex");

  if (expectedSignature === razorpay_signature) {
    const newDonation = new Donation({
      name,
      phone,
      amount,
      message,
      date: new Date(),
    });
    await newDonation.save();

    res.json({ success: true });
  } else {
    res.status(400).json({ error: "Payment verification failed" });
  }
});

module.exports = router;
