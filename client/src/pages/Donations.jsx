import React, { useEffect, useState } from "react";

export default function Donations() {
  const [donations, setDonations] = useState([]);

  useEffect(() => {
    const fetchDonations = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/donations");
        const data = await res.json();
        setDonations(data);
      } catch (err) {
        console.error("Failed to fetch donations", err);
      }
    };
    fetchDonations();
  }, []);

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-center mb-8 text-green-700">Recent Donations</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {donations.map((donation) => (
          <div key={donation._id} className="bg-white rounded-lg shadow p-4 border">
            <img
              src={donation.proofUrl}
              alt="Donation proof"
              className="h-52 w-full object-cover rounded"
            />
            <div className="mt-4 space-y-1">
              <h3 className="text-lg font-semibold">{donation.name}</h3>
              <p className="text-sm text-gray-600">Amount: ₹{donation.amount}</p>
              <p className="text-sm text-gray-500">Date: {donation.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
