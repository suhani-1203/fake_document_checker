import React, { useEffect, useState } from "react";

export default function ViewReport() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    setImages([


      // 4 Picsum human-style portraits (for natural mix)
      "https://picsum.photos/id/1011/400/400",
      "https://picsum.photos/id/1027/400/400",
      "https://picsum.photos/id/1005/400/400",
      "https://picsum.photos/id/1012/400/400",
    ]);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-fuchsia-100 to-purple-100 px-4 py-12 flex flex-col items-center">
      <h2 className="text-3xl font-bold text-fuchsia-700 mb-6">
        🖼️ Suspicious Image Gallery
      </h2>

      {images.length === 0 ? (
        <p className="text-gray-600 text-sm">No images uploaded yet.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((src, i) => (
            <div
              key={i}
              className="bg-white rounded-xl p-2 shadow-md border border-fuchsia-200"
            >
              <img
                src={src}
                alt={`Suspicious ${i + 1}`}
                className="w-full h-60 object-cover rounded-lg"
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
