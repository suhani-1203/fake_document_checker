// components/ResultsViewer.jsx
import React from "react";
import { BadgeCheck, AlertTriangle } from "lucide-react";
import DocSummaryCard from "./DocSummaryCard";
import AnomalyBadge from "./AnomalyBadge";

export default function ResultsViewer({ verdict, fileName, docType, anomalies = [] }) {
  const isSuspicious = verdict === "Suspicious";

  return (
    <div className="bg-white/80 rounded-3xl shadow-2xl p-8 max-w-3xl w-full border border-gray-200 animate-fade-in">
      <div className="flex items-center gap-4 mb-6">
        {isSuspicious ? (
          <AlertTriangle className="text-rose-600 w-8 h-8" />
        ) : (
          <BadgeCheck className="text-emerald-600 w-8 h-8" />
        )}
        <h2
          className={`text-2xl font-bold ${
            isSuspicious ? "text-rose-600" : "text-emerald-600"
          }`}
        >
          Verdict: {verdict}
        </h2>
      </div>

      {/* Summary Section */}
      <DocSummaryCard
        fileName={fileName}
        docType={docType}
        uploadDate="July 7, 2025"
        size="342 KB"
        status={verdict}
      />

      {/* Anomalies Section */}
      <div>
        <h3 className="text-lg font-semibold text-gray-700 mb-3">Detected Anomalies:</h3>
        {anomalies.length === 0 ? (
          <p className="text-sm text-gray-500">No anomalies detected.</p>
        ) : (
          <div className="flex flex-wrap gap-2">
            {anomalies.map((a, i) => (
              <AnomalyBadge key={i} message={a.message} type={a.type} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
