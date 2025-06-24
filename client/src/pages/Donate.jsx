import React, { useState } from "react";

export default function Donate() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    amount: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const loadScript = (src) =>
    new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => resolve(true);
      document.body.appendChild(script);
    });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleDonate = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (!form.name || !form.phone || !form.amount) {
      alert("Please fill in all required fields.");
      setLoading(false);
      return;
    }

    await loadScript("https://checkout.razorpay.com/v1/checkout.js");

    try {
      const res = await fetch("http://localhost:5000/api/payments/create-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount: form.amount, name: form.name }),
      });

      const data = await res.json();

      const options = {
        key: data.key,
        amount: form.amount * 100,
        currency: "INR",
        name: "Dhanleela Foundation",
        description: "Donation",
        order_id: data.orderId,
        handler: async function (response) {
          const verifyRes = await fetch("http://localhost:5000/api/payments/verify", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              razorpay_order_id: response.razorpay_order_id,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature: response.razorpay_signature,
              name: form.name,
              phone: form.phone,
              amount: form.amount,
              message: form.message,
            }),
          });

          const verifyData = await verifyRes.json();
          if (verifyData.success) {
            alert("🎉 Thank you for your donation!");
            setForm({ name: "", phone: "", amount: "", message: "" });
          } else {
            alert("Payment verification failed.");
          }
        },
        prefill: {
          name: form.name,
          contact: form.phone,
        },
        theme: {
          color: "#16a34a",
        },
      };

      const paymentObject = new window.Razorpay(options);
      paymentObject.open();
    } catch (err) {
      console.error("Payment error:", err);
      alert("Something went wrong while processing your payment.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-center mb-6 text-green-700">Make a Donation</h1>

      <form onSubmit={handleDonate} className="bg-white p-6 shadow-md rounded-lg space-y-4">
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
          disabled={loading}
        >
          {loading ? "Processing..." : "Donate & Pay"}
        </button>
      </form>
    </div>
  );
}
