import React from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../Components/Layout";
import Header from "../Components/Header";
import ONOEImage from "../Assets/one-nation-one-election.png";
import HistoricalImage from "../Assets/historic-movement.png";
import BenifitImage1 from "../Assets/benifits-1.png";
import BenifitImage2 from "../Assets/benifits-2.png";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <Layout>
      <Header heading="One Nation, One Election – Synchronizing Indian Democracy" />

      <div className="flex flex-col items-center justify-center py-10 px-4 text-center">
        {/* Banner Image */}
        <div className="max-w-2xl mb-8">
          <img
            src={ONOEImage}
            alt="One Nation One Election Banner"
            className="w-full rounded-xl shadow-lg object-cover"
          />
        </div>

        {/* Introduction Text */}
        <div className="mb-8 text-gray-700 max-w-3xl">
          {/* <h2 className="text-2xl font-semibold text-blue-800 mb-4">
            Participate in a Historic Movement!
          </h2>
          <p className="mb-4">
            Be a part of the revolutionary step toward efficient and unified
            governance. Your registration supports the vision of synchronized
            elections that save resources, boost development, and promote a
            stronger democracy.
          </p>
          <p className="mb-4">
            Whether you're a student, working professional, or a concerned
            citizen — your voice and participation matter. Let’s shape a better
            future together.
          </p> */}
          <img
            src={HistoricalImage}
            alt="One Nation One Election Banner"
            className="w-full rounded-xl shadow-lg object-cover"
          />
        </div>

        {/* Benefits Section */}
        <div className="text-left mb-10 w-full max-w-4xl">
          <h3 className="text-xl font-semibold text-blue-700 mb-4 text-center">
            Key Benefits of One Nation, One Election
          </h3>

          {/* All 2 Images */}
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

        {/* CTA Button */}
        <button
          onClick={() => navigate("/register")}
          className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full text-lg font-medium transition-all shadow-md"
        >
          Register Now
        </button>
      </div>
    </Layout>
  );
};

export default HomePage;
