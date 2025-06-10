import React from "react";

export default function OtpModal({ isOpen, onClose, onVerify, otp, setOtp }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-[90%] max-w-md">
        <h2 className="text-lg font-bold text-gray-800 mb-4">Enter OTP</h2>
        <input
          type="text"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          className="w-full px-4 py-2 border rounded mb-4"
          placeholder="6-digit OTP"
        />
        <div className="flex justify-end gap-2">
          <button onClick={onClose} className="px-4 py-2 bg-gray-300 rounded">Cancel</button>
          <button onClick={onVerify} className="px-4 py-2 bg-green-600 text-white rounded">Verify</button>
        </div>
      </div>
    </div>
  );
}
