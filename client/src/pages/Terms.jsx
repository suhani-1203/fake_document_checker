// src/pages/Terms.jsx
import React from "react";

export default function Terms() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-fuchsia-100 to-purple-100 p-8 flex items-center justify-center">
      <div className="bg-white/80 backdrop-blur-lg p-6 rounded-3xl max-w-3xl w-full shadow-lg border border-fuchsia-200">
        <h1 className="text-3xl font-bold text-fuchsia-700 mb-4">Terms & Conditions</h1>
        <p className="text-gray-700 text-sm">
          By using our platform, you agree to use the document checking service responsibly. You
          shall not upload malicious or unlawful content.
        </p>
        <p className="mt-4 text-gray-700 text-sm">
          We are not liable for any incorrect flagging or document decisions made using this tool.
          Use of this platform is at your discretion.
        </p>
      </div>
    </div>
  );
}
