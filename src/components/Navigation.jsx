import React from "react";
import { Link } from "react-router-dom";
import PEHOLogo from "../assets/PNG/PEHOLogo_Black.png";
const Navigation = () => {
  return (
    <div className="container flex px-40">
      <div className="navigation px-20 py-10">
        <img src={PEHOLogo} alt="Logo" className="h-20" />
      </div>
        <div className="hidden md:flex items-center space-x-1">
          <a
            href=""
            className="py-4 px-6 text-green-500 border-b-4 border-green-500 font-semibold "
          >
            Home
          </a>
          <a
            href=""
            className="py-4 px-6 text-gray-500 font-semibold hover:text-green-500 transition duration-300"
          >
            Services
          </a>
          <a
            href=""
            className="py-4 px-6 text-gray-500 font-semibold hover:text-green-500 transition duration-300"
          >
            About
          </a>
          <a
            href=""
            className="py-4 px-6 text-gray-500 font-semibold hover:text-green-500 transition duration-300"
          >
            Contact Us
          </a>
        </div>
    </div>
  );
};

export default Navigation;
