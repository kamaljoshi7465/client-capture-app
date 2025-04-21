import React from "react";
import { Link, useNavigate } from "react-router-dom";
import ThankYouImage from "../Assets/thankyou.png"

const SuccessPage = () => {
  const navigate = useNavigate();

  return (
    <div className="max-w-3xl mx-auto text-center py-16 px-4">
      <Link
        to="https://www.ryientsoft.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={ThankYouImage}
          alt="One Nation One Election Banner"
          className="w-full rounded-xl shadow-lg object-cover hover:opacity-90 transition"
        />
      </Link>
      <button
        onClick={() => navigate("/")}
        className="bg-orange-600 text-white px-6 py-3 rounded-lg text-lg hover:bg-orange-700 mt-6"
      >
        Go to Home
      </button>
    </div>
  );
};

export default SuccessPage;
