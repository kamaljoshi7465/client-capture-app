import React from "react";
import { useNavigate } from "react-router-dom";

const SuccessPage = () => {
  const navigate = useNavigate();

  return (
    <div className="max-w-xl mx-auto text-center py-16 px-4">
      <h1 className="text-3xl font-bold text-green-600 mb-4">🎉 Registration Successful!</h1>
      <p className="text-lg text-gray-700 mb-8">
        Thank you for registering for the Chess Tournament 2025. We've received your details.
      </p>
      <button
        onClick={() => navigate("/")}
        className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg hover:bg-blue-700"
      >
        Go to Home
      </button>
    </div>
  );
};

export default SuccessPage;
