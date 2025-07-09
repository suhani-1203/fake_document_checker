// src/pages/GetStartedOptions.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

export default function GetStartedOptions() {
  const navigate = useNavigate();

  const options = [
    { label: "Upload Document", route: "/upload", icon: "📄" },
    { label: "Suspicious Image", route: "/report", icon: "🚨" },
    { label: "View Image Report", route: "/view-report", icon: "🔍" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-fuchsia-100 to-purple-100 flex flex-col items-center justify-center px-6 py-16 text-center">
      <h1 className="text-3xl sm:text-4xl font-bold text-fuchsia-700 mb-6 animate-fade-in-up">
        Where do you want to go?
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl w-full animate-fade-in-up">
        {options.map((opt, i) => (
          <button
            key={i}
            onClick={() => navigate(opt.route)}
            className="bg-white/70 border border-fuchsia-200 rounded-2xl shadow-md hover:shadow-xl hover:scale-105 transition px-6 py-8 text-lg font-semibold text-fuchsia-800 flex flex-col items-center gap-2"
          >
            <span className="text-3xl">{opt.icon}</span>
            {opt.label}
          </button>
        ))}
      </div>
    </div>
  );
}
