import React, { useState } from "react";
import SpeechToText from "./components/SpeechToText";
import TextDisplay from "./components/TextDisplay";
import ISLPreview from "./components/ISLPreview";

const App = () => {
  const [text, setText] = useState("");

  const handleSpeechToText = (newText) => {
    setText((prevText) => prevText + " " + newText);
  };

  const handleClearText = () => {
    setText("");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6 space-y-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Text to Indian Sign Language</h1>

      {/* Main layout */}
      <div className="w-full max-w-6xl flex flex-col md:flex-row items-start space-y-6 md:space-y-0 md:space-x-6">
        {/* Left side: Mic, Text Display, and Clear Text */}
        <div className="w-full md:w-1/2 bg-white p-6 rounded-lg shadow-lg border border-gray-300">
          <div className="flex flex-col items-center space-y-4">
            {/* Mic component */}
            <SpeechToText onSpeechToText={handleSpeechToText} onClearText={handleClearText} />
            {/* Text Display component */}
            <TextDisplay text={text} />
            {/* Clear Text button */}
            <button
              onClick={handleClearText}
              className="bg-red-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400"
            >
              Clear Text
            </button>
          </div>
        </div>

        {/* Right side: ISL Preview */}
        <div className="w-full md:w-1/2 flex items-center justify-center bg-white p-6 rounded-lg shadow-lg border border-gray-300">
          <ISLPreview text={text} />
        </div>
      </div>
    </div>
  );
};

export default App;
