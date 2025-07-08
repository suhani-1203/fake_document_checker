// components/Footer.jsx
import React from "react";
import { Github, Instagram, Mail } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="w-full bg-gradient-to-br from-fuchsia-100 via-pink-100 to-purple-100 text-gray-700 border-t border-fuchsia-200 shadow-inner">
      <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col sm:flex-row justify-between items-center gap-4">
        {/* Branding */}
        <Link
          to="/"
          className="text-xl font-bold text-fuchsia-700 hover:text-fuchsia-900 transition"
        >
          © 2025 Fake Document Checker
        </Link>

        {/* Socials */}
        <div className="flex gap-6">
          <a
            href="https://github.com/your-repo"
            target="_blank"
            rel="noreferrer"
            className="hover:text-fuchsia-600 transition"
          >
            <Github />
          </a>
          <a
            href="https://instagram.com/yourhandle"
            target="_blank"
            rel="noreferrer"
            className="hover:text-pink-600 transition"
          >
            <Instagram />
          </a>
          <a
            href="mailto:contact@docuguard.com"
            className="hover:text-purple-600 transition"
          >
            <Mail />
          </a>
        </div>
      </div>

      {/* Bottom Links */}
      <div className="text-center text-sm text-gray-500 pb-6">
        <Link
          to="/about"
          className="hover:text-fuchsia-600 mx-2 transition duration-150"
        >
          About Us
        </Link>
        |
        <Link
          to="/terms"
          className="hover:text-fuchsia-600 mx-2 transition duration-150"
        >
          Terms
        </Link>
        |
        <Link
          to="/privacy"
          className="hover:text-fuchsia-600 mx-2 transition duration-150"
        >
          Privacy Policy
        </Link>
      </div>
    </footer>
  );
}
