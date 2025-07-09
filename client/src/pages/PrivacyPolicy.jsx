// src/pages/PrivacyPolicy.jsx
import React from "react";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-fuchsia-100 to-purple-100 p-8 flex items-center justify-center">
      <div className="bg-white/80 backdrop-blur-lg p-6 rounded-3xl max-w-3xl w-full shadow-lg border border-fuchsia-200">
        <h1 className="text-3xl font-bold text-fuchsia-700 mb-4">Privacy Policy</h1>
        <p className="text-gray-700 text-sm">
          We respect your privacy. All documents uploaded are processed securely and are not stored
          or shared with any third-party.
        </p>
        <p className="mt-4 text-gray-700 text-sm">
          We do not track, sell, or retain personal information. Your data is yours alone — and is
          only used for analysis during your session.
        </p>
      </div>
    </div>
  );
}
