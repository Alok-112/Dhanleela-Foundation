import React, { useState } from "react";

export default function Donate() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    amount: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Later: Trigger backend API to send OTP & Razorpay
    alert("Feature coming soon!");
  };

  return (
    <div className="max-w-xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-center mb-6 text-green-700">Make a Donation</h1>

      <form onSubmit={handleSubmit} className="bg-white p-6 shadow-md rounded-lg space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={form.name}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border rounded"
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={form.phone}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border rounded"
        />
        <input
          type="number"
          name="amount"
          placeholder="Donation Amount (₹)"
          value={form.amount}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border rounded"
        />
        <textarea
          name="message"
          placeholder="Message (Optional)"
          value={form.message}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded"
          rows={3}
        />

        <button
          type="submit"
          className="bg-green-600 text-white w-full py-2 rounded font-medium hover:bg-green-700"
        >
          Donate & Verify
        </button>
      </form>
    </div>
  );
}
