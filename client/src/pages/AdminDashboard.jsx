import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function AdminDashboard() {
  const [form, setForm] = useState({
    name: "",
    amount: "",
    date: "",
    proof: null,
  });

  const navigate = useNavigate();

  useEffect(() => {
    const auth = localStorage.getItem("admin-auth");
    if (!auth) navigate("/admin-login");
  }, [navigate]);

  const handleSubmit = async (e) => {
  e.preventDefault();

  if (!form.proof) {
    alert("Please upload a proof image.");
    return;
  }

  const formData = new FormData();
  formData.append("name", form.name);
  formData.append("amount", form.amount);
  formData.append("date", form.date);
  formData.append("proof", form.proof);

  const token = localStorage.getItem("admin-auth");

  try {
    const res = await fetch("http://localhost:5000/api/donations", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: formData,
    });

    if (res.ok) {
      const data = await res.json();
      alert("Donation uploaded successfully.");
      setForm({ name: "", amount: "", date: "", proof: null });
    } else {
      const err = await res.json();
      alert("Error uploading: " + (err?.error || "Unknown error"));
    }
  } catch (err) {
    alert("Server error: " + err.message);
  }
};


  return (
    <div className="max-w-xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold text-center text-green-700 mb-6">Admin Dashboard</h1>
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow space-y-4">
        <input
          type="text"
          placeholder="Donor Name"
          className="w-full px-4 py-2 border rounded"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          required
        />
        <input
          type="number"
          placeholder="Amount (₹)"
          className="w-full px-4 py-2 border rounded"
          value={form.amount}
          onChange={(e) => setForm({ ...form, amount: e.target.value })}
          required
        />
        <input
          type="date"
          className="w-full px-4 py-2 border rounded"
          value={form.date}
          onChange={(e) => setForm({ ...form, date: e.target.value })}
          required
        />
        <input
          type="file"
          accept="image/*"
          className="w-full"
          onChange={(e) => setForm({ ...form, proof: e.target.files[0] })}
          required
        />
        <button className="w-full py-2 bg-green-600 text-white rounded hover:bg-green-700">
          Upload Donation
        </button>
      </form>
    </div>
  );
}
