import React from "react";
import { Loader2 } from "lucide-react";

export default function Loader({ message = "Analyzing your document..." }) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-pink-50 via-fuchsia-50 to-purple-100 animate-fade-in">
      <Loader2 className="h-14 w-14 text-fuchsia-600 animate-spin mb-6" />
      <p className="text-xl font-semibold text-gray-700 animate-pulse">
        {message}
      </p>
      <div className="text-sm text-gray-500 mt-2 animate-bounce">
        Please wait while we scan for anomalies...
      </div>
    </div>
  );
}
