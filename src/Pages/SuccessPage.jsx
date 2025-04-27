import React from "react";
import { Link, useNavigate } from "react-router-dom";
import ThankYouImage from "../Assets/thankyou.png";
import { Helmet } from "react-helmet";
import Layout from "../Components/Layout";
import Header from "../Components/Header";

const SuccessPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <Helmet>
        <title>Thank You | Marathon Noida Registration Successful</title>
        <meta
          name="description"
          content="Thank you for registering for Marathon Noida. Your support for One Nation One Election is appreciated!"
        />
        <meta
          name="keywords"
          content="Thank You, Marathon Noida, One Nation One Election, ONOE, Registration Success"
        />
        <meta
          property="og:title"
          content="Registration Successful - Marathon Noida"
        />
        <meta
          property="og:description"
          content="You've successfully registered for the Marathon Noida event. See you soon!"
        />
        <meta property="og:image" content={ThankYouImage} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      <Layout>
      <Header heading="Prize Money Cross Country Race" />
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
      </Layout>
    </>
  );
};

export default SuccessPage;
