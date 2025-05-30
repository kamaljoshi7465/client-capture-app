import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Layout from "../Components/Layout";
import Header from "../Components/Header";
import ONOEImage from "../Assets/Marathon/one-nation-one-election.png";
import HistoricalImage from "../Assets/Marathon/historic-movement.png";
import PriceMoneyImage from "../Assets/Marathon/price-money.png";
import BenifitImage1 from "../Assets/Marathon/benifits-1.png";
import BenifitImage2 from "../Assets/Marathon/benifits-2.png";
import { Helmet } from "react-helmet";
import Article from "../Components/Article";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <Helmet>
        <title>Marathon Noida | One Nation One Election</title>
        <meta
          name="description"
          content="Join the movement! #ISupport1Nation1Election – Register now and be a part of Marathon Noida."
        />
        <meta
          name="keywords"
          content="One Nation One Election, ONOE, Marathon Noida, Register, India, Movement"
        />
        <meta property="og:title" content="One Nation One Election" />
        <meta
          property="og:description"
          content="Support the historic #1Nation1Election movement. Register now for the upcoming Marathon Noida tournament!"
        />
        <meta property="og:image" content={ONOEImage} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      <Layout>
        <Header heading="Prize Money Cross Country Race" />

        <div className="flex flex-col items-center justify-center py-2 px-4 text-center">
          {/* <div className="w-full max-w-2xl text-center py-4 text-lg text-orange-600 font-semibold">
          Total Registered Participants: {userCount}
        </div> */}
          <div className="w-full max-w-2xl mx-auto flex justify-center items-center gap-4 py-1 text-lg font-semibold text-orange-600">
            <span>#ISupport1Nation1Election</span>
            <Link to="/blogs" className="hover:underline flex items-center">
              View Blog Gallery <FontAwesomeIcon icon={faArrowRight} className="ml-1" />
            </Link>
          </div>
          <div class="bottom-5 left-0 right-0 flex justify-center px-4 py-4"><button class="bg-[#df670e] hover:bg-orange-700 text-white px-8 py-6 rounded-full text-1xl font-medium transition-all shadow-md"> Certificates will be available for download after May 4, 2025.</button></div>
          {/* Banner Image */}
          <div className="max-w-2xl mb-8">
            <img
              src={ONOEImage}
              alt="One Nation One Election Banner"
              className="w-full rounded-xl shadow-lg object-cover"
            />
          </div>

          <div className="max-w-2xl mb-8">
            <img
              src={PriceMoneyImage}
              alt="One Nation One Election price maney Banner"
              className="w-full rounded-xl shadow-lg object-cover"
            />
          </div>

          {/* Introduction Text */}
          <div className="mb-8 text-gray-700 max-w-2xl">
            <img
              src={HistoricalImage}
              alt="One Nation One Election Banner"
              className="w-full rounded-xl shadow-lg object-cover"
            />
          </div>

          {/* Benefits Section */}
          <div className="text-left w-full max-w-2xl">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
              <img
                src={BenifitImage1}
                alt="Benefit 1"
                className="w-full rounded-xl shadow-md object-cover"
              />
              <img
                src={BenifitImage2}
                alt="Benefit 2"
                className="w-full rounded-xl shadow-md object-cover"
              />
            </div>

            {/* Benefits List */}
            {/* <ul className="list-disc list-inside text-gray-800 space-y-3">
            <li>
              <strong>Cost Savings:</strong> Reduces frequent election-related
              expenses for the government and Election Commission.
            </li>
            <li>
              <strong>Administrative Efficiency:</strong> Frees up government
              machinery and security forces for developmental work.
            </li>
            <li>
              <strong>Continuity in Governance:</strong> Minimizes policy
              disruptions caused by repeated imposition of the Model Code of
              Conduct.
            </li>
            <li>
              <strong>Boost to Development:</strong> Encourages governance and
              long-term planning over constant campaigning.
            </li>
            <li>
              <strong>Reduced Political Polarization:</strong> Limits divisive
              and vote-bank politics with fewer election cycles.
            </li>
            <li>
              <strong>Higher Voter Turnout:</strong> Consolidated elections
              improve voter awareness and participation.
            </li>
            <li>
              <strong>Level Playing Field:</strong> Prevents some parties from
              gaining unfair advantage through continuous campaigning.
            </li>
          </ul> */}
          </div>
          <Article />
          {/* CTA Button */}
          <div className="fixed bottom-5 left-0 right-0 flex justify-center z-50">
            <button
              onClick={() => navigate("/register")}
              className="bg-[#df670e] hover:bg-orange-700 text-white px-8 py-6 rounded-full text-3xl font-medium transition-all shadow-md"
            >
              Register Now
            </button>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default HomePage;
