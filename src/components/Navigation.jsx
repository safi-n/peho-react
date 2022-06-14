import React from "react";
import {useLocation, useNavigate} from "react-router-dom";
import PEHOLogo from "../assets/PNG/PEHOLogo_Black.png";
const Navigation = () => {
  const location = useLocation()
  const navigate = useNavigate()

  const pathMatchRoute = (route) => {
    {
      if(route === location.pathname) {
        return true
      }
    }
  }
  
  return (
    <div className="container flex px-40">

      <div className="navigation px-20 py-10">
        <img src={PEHOLogo} alt="Logo" className="h-20" />
      </div>

        <div className="hidden md:flex items-center space-x-1">
          <a
            onClick={() => navigate('/')} 
            className={
              pathMatchRoute('/')
              ? 'py-4 px-6 text-green-500 border-b-4 border-green-500 font-semibold'
              : 'py-4 px-6 font-normal'
            }
          >
            Home
          </a>

          <a
          onClick={() => navigate('/services')} 
          className={
            pathMatchRoute('/services')
            ? 'py-4 px-6 text-green-500 border-b-4 border-green-500 font-semibold'
            : 'py-4 px-6 font-normal'
          }
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
