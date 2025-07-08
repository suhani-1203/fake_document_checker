// src/pages/NotFound.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-100 via-rose-50 to-pink-100 flex flex-col justify-center items-center text-center px-6 animate-fade-in">
      <h1 className="text-5xl font-bold text-rose-600 mb-4">404</h1>
      <h2 className="text-xl font-semibold text-rose-500 mb-2">Page Not Found</h2>
      <p className="text-gray-600 mb-6">Oops! The page you’re looking for doesn’t exist.</p>

      <button
        onClick={() => navigate("/")}
        className="bg-gradient-to-r from-fuchsia-600 to-pink-500 hover:from-pink-600 hover:to-fuchsia-500 text-white px-6 py-2 rounded-xl shadow-md hover:shadow-lg transition"
      >
        ⬅️ Back to Home
      </button>
    </div>
  );
}
