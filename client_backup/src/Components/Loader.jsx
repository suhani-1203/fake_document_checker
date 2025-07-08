// components/Loader.jsx
import React from "react";
import { Loader2 } from "lucide-react";

export default function Loader({ message = "Analyzing document..." }) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-pink-50 via-fuchsia-50 to-purple-100 animate-fade-in">
      <Loader2 className="h-12 w-12 text-fuchsia-600 animate-spin mb-4" />
      <p className="text-lg font-semibold text-gray-700">{message}</p>
    </div>
  );
}
