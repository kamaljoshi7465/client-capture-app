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
    // <div className="flex justify-between items-center px-4 py-4 border-b shadow-sm bg-white max-w-3xl">
    <div className="relative flex items-center justify-center px-4 py-4 border-b shadow-sm bg-white max-w-3xl mx-auto">
      {/* Back Button */}
      {showBackButton && (
        <button
          onClick={() => navigate(-1)}
          className="text-[#df670e] hover:text-orange-700 flex items-center"
        >
          <ArrowLeft className="w-5 h-5 mr-1" />
          <span className="hidden md:inline">Back</span>
        </button>
      )}

      {/* Back To Home Button */}
      {backToHomePageButton && (
        <button
          onClick={() => navigate("/")}
          className="text-[#df670e] hover:text-orange-700 flex items-center"
        >
          <ArrowLeft className="w-5 h-5 mr-1" />
          <span className="hidden md:inline">Back To Home</span>
        </button>
      )}

      {/* Heading (Centered) */}
      <div className="w-full flex-column">
        <h1 className="text-2xl font-bold text-[#df670e] flex-1 text-center">
          {heading}
        </h1>
        <div className="text-[#df670e] text-xl flex-1 text-center">
          One Nation, One Election
        </div>
      </div>

      {/* Admin Login Button */}
      {showAdminLoginButton && (
        <button
          onClick={() => navigate("/admin")}
          className="bg-[#df670e] hover:bg-orange-700 text-white px-4 py-2 rounded-lg text-sm"
        >
          Admin Login
        </button>
      )}

      {/* Admin LogOut Button */}
      {showAdminLogoutButton && (
        <button
          onClick={handleLogout}
          className="bg-[#df670e] hover:bg-orange-700 text-white px-4 py-2 rounded text-sm"
        >
          Logout
        </button>
      )}
    </div>
  );
};

export default Header;
