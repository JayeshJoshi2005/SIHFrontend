import React from "react";

const TextDisplay = ({ text, onTextChange }) => {
  const handleChange = (e) => {
    onTextChange(e.target.value);
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <textarea
        className="mt-2 p-3 w-full border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent resize-none bg-white text-gray-800"
        rows="4"
        value={text}
        onChange={handleChange}
        placeholder="Your text will appear here..."
      />
    </div>
  );
};

export default TextDisplay;
