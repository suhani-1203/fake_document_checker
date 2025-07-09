// src/pages/About.jsx
import React from "react";

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-fuchsia-100 to-purple-100 p-8 flex items-center justify-center">
      <div className="bg-white/80 backdrop-blur-lg p-6 rounded-3xl max-w-3xl w-full shadow-lg border border-fuchsia-200">
        <h1 className="text-3xl font-bold text-fuchsia-700 mb-4">About Us</h1>
        <p className="text-gray-700 text-sm">
          Welcome to our Fake Document Checker — built with ❤️ to help organizations verify
          uploaded documents with ease and speed. Our mission is to ensure digital document
          authenticity using smart and privacy-focused tools.
        </p>
        <p className="mt-4 text-gray-700 text-sm">
          Whether it's resumes, ID proofs, or certificates — our AI flags suspicious content so you
          can trust what you receive. We believe in security, speed, and simplicity.
        </p>
      </div>
    </div>
  );
}
