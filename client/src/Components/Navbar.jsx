import React from "react";
import { useLocation, Link } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <header className="w-full px-6 py-4 fixed top-0 left-0 z-50">
      <nav className="max-w-7xl mx-auto flex items-center justify-between rounded-xl px-6 py-3 backdrop-blur-md bg-white/50 shadow-md border border-fuchsia-200">
        <Link to="/" className="text-2xl font-bold text-fuchsia-600 tracking-wide">
          FakeDoc
        </Link>

        {!isHome && (
          <div className="flex items-center gap-6 text-sm font-medium text-gray-700">
            <Link to="/" className="hover:text-fuchsia-600 transition">Home</Link>
            <Link to="/upload" className="hover:text-fuchsia-600 transition">Docs</Link>
            <Link to="/report" className="hover:text-fuchsia-600 transition">Report</Link>
            <Link to="/view-report" className="hover:text-fuchsia-600 transition">View</Link>
          </div>
        )}
      </nav>
    </header>
  );
}
