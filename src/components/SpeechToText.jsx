import React, { useState, useEffect } from "react";
import { FaMicrophone } from "react-icons/fa";

const SpeechToText = ({ onSpeechToText, onClearText }) => {
  const [isRecording, setIsRecording] = useState(false);
  const [recognition, setRecognition] = useState(null);

  useEffect(() => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognitionInstance = new SpeechRecognition();
    recognitionInstance.continuous = true;
    recognitionInstance.interimResults = false;
    recognitionInstance.lang = "en-US";

    recognitionInstance.onresult = (event) => {
      const transcript = event.results[event.resultIndex][0].transcript;
      onSpeechToText(transcript);
    };

    setRecognition(recognitionInstance);
  }, [onSpeechToText]);

  const toggleRecording = () => {
    if (isRecording) {
      recognition.stop();
    } else {
      recognition.start();
    }
    setIsRecording(!isRecording);
  };

  return (
    <div className="flex flex-col items-center space-y-4 w-full md:w-1/2">
      <button
        className={`p-4 rounded-full ${
          isRecording ? "bg-red-500" : "bg-gray-200"
        }`}
        onClick={toggleRecording}
      >
        <FaMicrophone className={`${isRecording ? "text-white" : "text-gray-800"}`} size={24} />
      </button>
    </div>
  );
};

export default SpeechToText;
