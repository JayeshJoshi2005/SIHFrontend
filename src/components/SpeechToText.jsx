import React, { useState } from "react";
import { FaMicrophone } from "react-icons/fa";

const SpeechToText = ({ onSpeechToText, onClearText }) => {
  const [isRecording, setIsRecording] = useState(false);

  const handleMicClick = () => {
    setIsRecording(!isRecording);
    if (isRecording) {
      // Stop recording and process speech to text
      // Mock example:
      const newText = "Sample text from speech";
      onSpeechToText(newText);
    } else {
      // Start recording
    }
  };

  return (
    <div className="flex flex-col items-center space-y-4">
      <button
        onClick={handleMicClick}
        className={`p-4 rounded-full ${isRecording ? "bg-red-500" : "bg-green-500"} text-white shadow-md hover:shadow-lg transition-all duration-300`}
      >
        <FaMicrophone size={24} />
      </button>

      {/* Updated Clear Text Button */}
      {/* <button
        onClick={onClearText}
        className="bg-blue-900 text-blue-400 border border-blue-400 border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group"
      >
        <span className="bg-blue-400 shadow-blue-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
        Clear Text
      </button> */}
    </div>
  );
};

export default SpeechToText;
