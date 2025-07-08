// components/AnomalyBadge.jsx
import React from "react";


const emojiMap = {
  location: "📍",
  grammar: "✍️",
  date: "📅",
  duplicate: "🧾",
  unknown: "❓",
};


const colorMap = {
  location: "bg-purple-100 text-purple-800",
  grammar: "bg-yellow-100 text-yellow-800",
  date: "bg-blue-100 text-blue-800",
  duplicate: "bg-pink-100 text-pink-800",
  unknown: "bg-gray-100 text-gray-700",
};


export default function AnomalyBadge({ type = "unknown", message }) {
  const emoji = emojiMap[type] || emojiMap["unknown"];
  const colorClass = colorMap[type] || colorMap["unknown"];


  return (
    <span className={`... ${colorClass} animate-fade-in transition duration-300`}>
      {emoji} {message}
    </span>
  );
}
