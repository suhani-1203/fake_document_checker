// App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";         // ✅ Add this
import Upload from "./pages/Upload";
import Results from "./pages/Results";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col justify-between bg-gradient-to-br from-pink-50 via-fuchsia-50 to-purple-100">
        <Navbar />

        <div className="flex-1 pt-24 px-4 sm:px-6 md:px-8">
          <Routes>
            <Route path="/" element={<Home />} />           {/* ✅ New route */}
            <Route path="/upload" element={<Upload />} />   {/* 🔁 Was root, now /upload */}
            <Route path="/results" element={<Results />} />
            <Route path="*" element={<NotFound />} /> {/* 🆕 Catch-all route */}
          </Routes>
        </div>

        <Footer />
      </div>
    </Router>
  );
}
