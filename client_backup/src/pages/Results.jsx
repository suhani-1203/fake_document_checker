// Results.jsx
import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function Results() {
  const location = useLocation();
  const navigate = useNavigate();

  const resultData = location.state?.resultData;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!resultData) {
    return (
      <div className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 bg-gradient-to-br from-pink-100 via-fuchsia-100 to-purple-100">
        <h2 className="text-xl font-bold text-red-600">⚠️ No Result Found</h2>
        <p className="text-sm text-gray-600 mt-2">Please upload a document first.</p>
        <button
          onClick={() => navigate("/")}
          className="mt-4 bg-fuchsia-600 hover:bg-fuchsia-700 text-white px-4 py-2 rounded-xl transition"
        >
          Upload Now
        </button>
      </div>
    );
  }

  const { fileName, docType, verdict, anomalies } = resultData;

  const getIcon = (type) => {
    switch (type) {
      case "location":
        return "📍";
      case "grammar":
        return "✍️";
      case "date":
        return "📆";
      case "duplicate":
        return "🧾";
      default:
        return "⚠️";
    }
  };

  const handleDownload = () => {
    const text = `
      📄 File: ${fileName}
      🗂️ Type: ${docType}
      ✅ Verdict: ${verdict}

      ⚠️ Anomalies:
      ${anomalies.map((a, i) => `${i + 1}. ${a.type} - ${a.message}`).join("\n")}
    `;

    const blob = new Blob([text], { type: "text/plain" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = `${fileName.replace(".pdf", "")}_analysis.txt`;
    link.click();
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-pink-100 via-fuchsia-100 to-purple-100 flex justify-center items-center p-6 overflow-hidden">
      {/* Blurred background blobs */}
      <div className="absolute top-[-80px] left-[-100px] w-[300px] h-[300px] bg-purple-300 opacity-30 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-[-100px] right-[-100px] w-[300px] h-[300px] bg-pink-300 opacity-30 rounded-full blur-3xl animate-pulse" />
      <div className="absolute top-[40%] right-[50%] w-[200px] h-[200px] bg-fuchsia-200 opacity-20 rounded-full blur-2xl animate-pulse" />

      <div className="bg-white/70 backdrop-blur-xl shadow-2xl rounded-3xl p-8 w-full max-w-2xl border border-fuchsia-200 animate-fade-in z-10">
        <h2 className="text-2xl font-bold text-fuchsia-700 mb-4 text-center">📊 Document Analysis Result</h2>

        <div className="mb-4">
          <p className="text-gray-700"><span className="font-semibold">📄 File:</span> {fileName}</p>
          <p className="text-gray-700"><span className="font-semibold">🗂️ Type:</span> {docType}</p>
          <p className="text-gray-700">
            <span className="font-semibold">✅ Verdict:</span>{" "}
            <span
              className={`inline-block px-2 py-1 rounded-full text-sm font-medium ${
                verdict === "Clear" ? "bg-green-100 text-green-600" : "bg-red-100 text-red-600"
              }`}
            >
              {verdict}
            </span>
          </p>
        </div>

        <div className="mt-6">
          <h3 className="text-lg font-semibold text-fuchsia-600 mb-2">⚠️ Detected Anomalies</h3>
          {anomalies.length > 0 ? (
            <ul className="space-y-3">
              {anomalies.map((a, i) => (
                <li
                  key={i}
                  className="bg-fuchsia-50 border border-fuchsia-200 rounded-xl px-4 py-2 flex items-start gap-3 shadow-sm"
                >
                  <span className="text-xl">{getIcon(a.type)}</span>
                  <div className="text-sm text-gray-700">
                    <p><strong className="capitalize">{a.type}:</strong> {a.message}</p>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-green-600">🎉 No anomalies found. The document looks clean!</p>
          )}
        </div>

        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
          <button
            onClick={handleDownload}
            className="bg-white border border-fuchsia-400 hover:bg-fuchsia-100 text-fuchsia-700 px-4 py-2 rounded-xl shadow-md transition"
          >
            ⬇️ Download Report
          </button>
          <button
            onClick={() => navigate("/")}
            className="bg-gradient-to-r from-fuchsia-600 to-pink-500 hover:from-pink-600 hover:to-fuchsia-500 text-white px-6 py-2 rounded-xl shadow-md hover:shadow-lg transition"
          >
            Upload Another
          </button>
        </div>
      </div>
    </div>
  );
}
