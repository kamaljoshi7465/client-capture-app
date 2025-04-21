import React from "react";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Header = ({
  heading,
  showBackButton = false,
  showAdminLoginButton = false,
  showAdminLogoutButton = false,
  backToHomePageButton = false,
}) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("adminUser");
    navigate("/admin");
  };

  return (
    <div className="flex justify-between items-center px-4 py-4 border-b shadow-sm bg-white">
      {/* Back Button */}
      {showBackButton && (
        <button
          onClick={() => navigate(-1)}
          className="text-blue-600 hover:text-blue-800 flex items-center"
        >
          <ArrowLeft className="w-5 h-5 mr-1" />
          <span className="hidden md:inline">Back</span>
        </button>
      )}

      {/* Back To Home Button */}
      {backToHomePageButton && (
        <button
          onClick={() => navigate("/")}
          className="text-blue-600 hover:text-blue-800 flex items-center"
        >
          <ArrowLeft className="w-5 h-5 mr-1" />
          <span className="hidden md:inline">Back To Home</span>
        </button>
      )}

      {/* Heading (Centered) */}
      <h2 className="text-xl font-bold text-blue-700 flex-1 text-center">
        {heading}
      </h2>

      {/* Admin Login Button */}
      {showAdminLoginButton && (
        <button
          onClick={() => navigate("/admin")}
          className="bg-gray-700 hover:bg-gray-800 text-white px-4 py-2 rounded-lg text-sm"
        >
          Admin Login
        </button>
      )}

      {/* Admin LogOut Button */}
      {showAdminLogoutButton && (
        <button
          onClick={handleLogout}
          className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded text-sm"
        >
          Logout
        </button>
      )}
    </div>
  );
};

export default Header;
