import React from "react";

const ISLPreview = ({ text }) => {
  return (
    <div className="bg-white w-full h-96 max-w-lg max-h-lg flex items-center justify-center border-2 border-gray-300 rounded-lg shadow-md">
      <p className="text-xl font-semibold text-gray-700">{text || "ISL Preview Here"}</p>
    </div>
  );
};

export default ISLPreview;
