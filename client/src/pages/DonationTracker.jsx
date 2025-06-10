import React from "react";

const mockDonations = [
  {
    name: "Raj Bhargav",
    amount: 500,
    date: "2025-06-01",
    proof: "/images/proof11.jpg",
  },
  {
    name: "Ramesh Kumar",
    amount: 1100,
    date: "2025-06-02",
    proof: "/images/proof21.jpg",
  },
  {
    name: "Yashoda Bhati",
    amount: 300,
    date: "2025-06-04",
    proof: "/images/proof31.jpg",
  },
];

export default function DonationTracker() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-center text-green-700 mb-8">Donation Tracker</h1>
      <p className="text-center text-gray-600 mb-6">Every donation is tracked with proof. Thank you for your support!</p>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border rounded shadow-md">
          <thead>
            <tr className="bg-green-600 text-white">
              <th className="py-3 px-4 text-left">Donor</th>
              <th className="py-3 px-4 text-left">Amount (₹)</th>
              <th className="py-3 px-4 text-left">Date</th>
              <th className="py-3 px-4 text-left">Proof</th>
            </tr>
          </thead>
          <tbody>
            {mockDonations.map((donation, i) => (
              <tr key={i} className="border-b hover:bg-gray-50">
                <td className="py-2 px-4">{donation.name}</td>
                <td className="py-2 px-4">₹{donation.amount}</td>
                <td className="py-2 px-4">{donation.date}</td>
                <td className="py-2 px-4">
                  <a href={donation.proof} target="_blank" rel="noopener noreferrer">
                    <img src={donation.proof} alt="Proof" className="h-16 w-24 object-cover rounded" />
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
