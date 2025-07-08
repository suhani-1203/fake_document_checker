// src/pages/Home.jsx
import React from "react";
import { useNavigate } from "react-router-dom";


export default function Home() {
  const navigate = useNavigate();


  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-fuchsia-100 to-purple-100 text-gray-800">
      {/* Hero Section */}
      <section className="py-20 px-6 text-center max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-fuchsia-700 animate-fade-in-up">
          📄 Verify Documents with Confidence
        </h1>
        <p className="text-lg text-gray-600 mb-8 animate-fade-in delay-200">
          Upload your official PDFs. Let our AI spot fake places, grammar issues, and document clones.
        </p>
        <button
          onClick={() => navigate("/upload")}
          className="bg-gradient-to-r from-fuchsia-600 to-pink-500 text-white px-6 py-3 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition"
        >
          🚀 Get Started
        </button>
      </section>


      {/* How it works */}
      <section className="py-16 px-4 bg-white/80 rounded-t-3xl shadow-inner">
        <h2 className="text-3xl font-semibold text-center text-fuchsia-700 mb-8">How It Works</h2>
        <div className="grid sm:grid-cols-3 gap-8 max-w-5xl mx-auto text-center">
          <div>
            <div className="text-4xl mb-2">📤</div>
            <h3 className="font-semibold mb-1">1. Upload</h3>
            <p className="text-sm text-gray-600">Submit your PDF document securely.</p>
          </div>
          <div>
            <div className="text-4xl mb-2">🧠</div>
            <h3 className="font-semibold mb-1">2. Analyze</h3>
            <p className="text-sm text-gray-600">AI scans for location, grammar, and duplication issues.</p>
          </div>
          <div>
            <div className="text-4xl mb-2">✅</div>
            <h3 className="font-semibold mb-1">3. Result</h3>
            <p className="text-sm text-gray-600">Receive a detailed, trustworthy report instantly.</p>
          </div>
        </div>
      </section>


      {/* Features */}
      <section className="py-16 px-4">
        <h2 className="text-3xl font-semibold text-center text-fuchsia-700 mb-10">Why Choose Us?</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto text-center">
          {[
            ["🔐", "Secure Uploads"],
            ["⚡", "Fast AI Results"],
            ["📍", "Fake Location Detection"],
            ["✍️", "Grammar Analysis"],
            ["📅", "Date Validations"],
            ["🧾", "Clone Checks"],
            ["🎯", "Clean UI"],
            ["💬", "Easy Reports"],
          ].map(([icon, label], i) => (
            <div
              key={i}
              className="bg-white/70 border border-fuchsia-200 rounded-2xl p-6 shadow-md hover:shadow-xl transition transform hover:-translate-y-1 animate-fade-in"
            >
              <div className="text-3xl mb-2">{icon}</div>
              <p className="text-sm font-semibold">{label}</p>
            </div>
          ))}
        </div>
      </section>


      {/* Final CTA */}
      <div className="py-12 text-center">
        <h3 className="text-xl font-semibold text-gray-700 mb-4">Ready to verify a document?</h3>
        <button
          onClick={() => navigate("/upload")}
          className="bg-gradient-to-r from-fuchsia-600 to-pink-500 text-white px-6 py-3 rounded-xl shadow-md hover:shadow-lg hover:scale-105 transition"
        >
          Upload Now
        </button>
      </div>
    </div>
  );
}
