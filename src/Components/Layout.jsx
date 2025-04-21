import React from "react";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <div className="max-w-6xl mx-auto px-4 py-6">{children}</div>
      {/* <main className="flex-grow">{children}</main> */}
      <Footer /> 
    </div>
  );
};

export default Layout;
