// components/DocSummaryCard.jsx
import React from "react";
import { FileText, CalendarDays, FileSignature } from "lucide-react";


export default function DocSummaryCard({ fileName, docType, uploadDate, size, status }) {
  return (
   <div className="bg-white/70 backdrop-blur-md border border-fuchsia-200 shadow-md rounded-2xl p-6 flex flex-col gap-4 text-sm text-gray-700 mb-6 animate-fade-in hover:scale-[1.01] transition duration-300">
      <div className="flex items-center gap-3">
        <FileText className="text-fuchsia-600" />
        <span className="font-medium">File: </span>
        <span>{fileName}</span>
      </div>
      <div className="flex items-center gap-3">
        <FileSignature className="text-fuchsia-600" />
        <span className="font-medium">Type: </span>
        <span>{docType}</span>
      </div>
      <div className="flex items-center gap-3">
        <CalendarDays className="text-fuchsia-600" />
        <span className="font-medium">Uploaded: </span>
        <span>{uploadDate}</span>
      </div>
      <div className="flex items-center gap-3">
        <span className="text-fuchsia-600 font-medium">Size:</span>
        <span>{size}</span>
      </div>
      <div className="flex items-center gap-3">
        <span className="text-fuchsia-600 font-medium">Status:</span>
        <span
          className={`text-xs px-2 py-1 rounded-md font-semibold ${
            status === "Suspicious"
              ? "bg-rose-100 text-rose-700"
              : "bg-emerald-100 text-emerald-700"
          }`}
        >
          {status}
        </span>
      </div>
    </div>
  );
}


