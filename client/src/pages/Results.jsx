import jsPDF from "jspdf";
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

  const { fileName, docType, verdict, anomalies, confidence } = resultData;

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
  const doc = new jsPDF();

  doc.setFont("helvetica", "bold");
  doc.setFontSize(16);
  doc.text("📄 Fake Document Analysis Report", 20, 20);

  doc.setFontSize(10);
  doc.setFont("helvetica", "normal");
  doc.text(`Generated on: ${new Date().toLocaleString()}`, 20, 30);

  let y = 45;

  doc.setFont("helvetica", "bold");
  doc.text("Document Details", 20, y);
  y += 10;

  doc.setFont("helvetica", "normal");
  doc.text(`• File Name: ${fileName}`, 20, y); y += 8;
  doc.text(`• Document Type: ${docType}`, 20, y); y += 8;
  doc.text(`• Verdict: ${verdict === "Clear" ? "✅ Clear (99%)" : "❌ Suspicious (82%)"}`, 20, y); y += 12;

  if (anomalies.length > 0) {
    doc.setFont("helvetica", "bold");
    doc.text("Detected Anomalies", 20, y);
    y += 10;

    anomalies.forEach((a, i) => {
      const iconMap = {
        location: "📍",
        grammar: "✍️",
        date: "📆",
        duplicate: "🧾"
      };
      const icon = iconMap[a.type] || "⚠️";

      doc.setFont("helvetica", "normal");
      doc.text(`${i + 1}. ${icon} ${a.type.toUpperCase()}: ${a.message}`, 20, y);
      y += 8;
if (a.confidence) {
  doc.text(`Confidence: ${Math.round(a.confidence * 100)}%`, 26, y);
  y += 8;
}

if (a.sentence) {
  doc.text(`Sentence: "${a.sentence}"`, 26, y);
  y += 8;
}

if (a.suggestion) {
  doc.text(`Suggestion: "${a.suggestion}"`, 26, y);
  y += 10;
}
    });
  } else {
    doc.text("🎉 No anomalies found. The document looks clean!", 20, y);
  }

  doc.save(`${fileName.replace(".pdf", "")}_report.pdf`);
};

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-pink-100 via-fuchsia-100 to-purple-100 flex justify-center items-center p-6 overflow-hidden">
      {/* Blurred background blobs */}
      <div className="absolute top-[-80px] left-[-100px] w-[300px] h-[300px] bg-purple-300 opacity-30 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-[-100px] right-[-100px] w-[300px] h-[300px] bg-pink-300 opacity-30 rounded-full blur-3xl animate-pulse" />
      <div className="absolute top-[40%] right-[50%] w-[200px] h-[200px] bg-fuchsia-200 opacity-20 rounded-full blur-2xl animate-pulse" />

      <div className="bg-white/70 backdrop-blur-xl shadow-2xl rounded-3xl p-8 w-full max-w-2xl border border-fuchsia-200 animate-fade-in z-10">
        <h2 className="text-2xl font-bold text-fuchsia-700 mb-4 text-center">
          📊 Document Analysis Result
        </h2>

        {/* Summary Table */}
        <div className="mb-6">
          <table className="w-full text-sm text-left border-collapse rounded-lg overflow-hidden">
            <tbody>
              <tr className="border-b border-fuchsia-200">
                <td className="py-2 font-semibold text-gray-700 w-1/3">📄 File</td>
                <td className="py-2 text-gray-800">{fileName}</td>
              </tr>
              <tr className="border-b border-fuchsia-200">
                <td className="py-2 font-semibold text-gray-700">🗂️ Document Type</td>
                <td className="py-2 text-gray-800">{docType}</td>
              </tr>
              <tr>
                <td className="py-2 font-semibold text-gray-700">✅ Verdict</td>
                <td className="py-2 text-gray-800 flex items-center gap-2">
                  {verdict === "Clear" ? (
                    <span className="bg-emerald-100 text-emerald-700 px-2 py-1 rounded-lg font-medium">
                      ✅ Clear ({Math.round((confidence ?? 0.99) * 100)}% confidence)
                    </span>
                  ) : (
                    <span className="bg-rose-100 text-rose-700 px-2 py-1 rounded-lg font-medium">
                      ❌ Suspicious ({Math.round((confidence ?? 0.82) * 100)}% confidence)
                    </span>
                  )}
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Anomaly Section */}
        <div className="mt-6">
          <h3 className="text-lg font-semibold text-fuchsia-600 mb-2 flex items-center gap-2">
            ⚠️ <span>Detected Anomalies</span>
          </h3>
          {anomalies.length > 0 ? (
            <ul className="space-y-3">
              {anomalies.map((a, i) => (
                <li
                  key={i}
                  className="bg-rose-50 border border-rose-200 rounded-xl px-4 py-2 flex items-start gap-3 shadow-sm"
                >
                  <span className="text-xl">{getIcon(a.type)}</span>
                  <div className="text-sm text-gray-700">
                    <p>
                      <strong className="capitalize">{a.type}:</strong> {a.message}
                      {a.confidence && (
                        <span className="ml-2 text-xs text-gray-500">
                          ({Math.round(a.confidence * 100)}% confidence)
                        </span>
                      )}
                    </p>

                    {a.sentence && (
                      <p className="text-xs text-gray-600 mt-1">
                        <strong>↪ Found in:</strong> “{a.sentence}”
                      </p>
                    )}

                    {a.suggestion && (
                      <p className="text-xs text-green-600 mt-1">
                        <strong>💡 Suggestion:</strong> Replace with “{a.suggestion}”
                      </p>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-green-600 flex items-center gap-2 text-sm font-medium">
              ✅ No anomalies found. The document looks clean!
            </p>
          )}
        </div>

        {/* CTA Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
          <button
            onClick={handleDownload}
            className="bg-white border border-fuchsia-400 hover:bg-fuchsia-100 text-fuchsia-700 px-4 py-2 rounded-xl shadow-md transition"
          >
            ⬇️ Download Report
          </button>
          <button
            onClick={() => navigate("/Upload")}
            className="bg-gradient-to-r from-fuchsia-600 to-pink-500 hover:from-pink-600 hover:to-fuchsia-500 text-white px-6 py-2 rounded-xl shadow-md hover:shadow-lg transition"
          >
            Upload Another
          </button>
        </div>
      </div>
    </div>
  );
}
