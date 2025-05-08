import React, { useState } from "react";
import patrioticMusic from "./assets/patriotic-music.mp3"; // adjust path if needed
import indianFlagGif from "./assets/indian-flag.gif"; // adjust path if needed
import operationImg from "./assets/operationImg.png"; // adjust path if needed

const slogans = [
  "🇮🇳 This is just a trailer, the full movie starts when you cross the line! 🇮🇳",
  "🫡 Operation Sindoor activated. Next time think twice. 🫡",
  "🚫 Warning: Don’t mess with India. Or we’ll drop a Sindoor sequel.",
];

export default function OperationSindoor() {
  const [showMessage, setShowMessage] = useState(false);
  const [sloganIndex, setSloganIndex] = useState(0);

  const handleClick = () => {
    setShowMessage(true);
    setSloganIndex(Math.floor(Math.random() * slogans.length));

    const anthem = new Audio(patrioticMusic);
    anthem.play();
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-orange-600 to-white text-center px-4">

      <img
        src={operationImg}
       alt="Operation Sindoor Logo"
        className="mb-6 w-auto h-50 object-contain animate-pulse"
      />

      <img
        src={indianFlagGif}
        alt="Indian Flag"
        className="mb-6 w-32 h-32 object-contain animate-bounce"
      />

      {!showMessage ? (
        <button
          onClick={handleClick}
          className="text-lg px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-xl transition duration-300"
        >
          Launch the Warning
        </button>
      ) : (
        <div className="max-w-xl bg-gray-900 text-green-400 font-mono p-6 mt-6 shadow-lg rounded-lg text-left">
          <pre className="whitespace-pre-wrap">
            <code>
              {`function operationSindoor() {
  console.warn("${slogans[sloganIndex]}");
}`}
            </code>
          </pre>
        </div>
      )}

      <footer className="mt-10 text-gray-500 text-sm">
        Built with ❤️ for 🇮🇳 by Sadique
      </footer>
    </div>
  );
}
