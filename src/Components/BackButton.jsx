import React from "react";
import { useNavigate } from "react-router-dom";

const BackButton = () => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(-1)}
      className="absolute top-6 left-6 bg-gray-200 hover:bg-gray-300 text-sm text-gray-800 px-4 py-2 rounded"
    >
      ← Back
    </button>
  );
};

export default BackButton;
