import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import PEHOLogo from "../assets/PNG/PEHOLogo_White.png";
import PEHOLogoBlack from "../assets/PNG/PEHOLogo_Black.png";
const Navigation = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const pathMatchRoute = (route) => {
    {
      if (route === location.pathname) {
        return true;
      }
    }
  };

  return (
    <div className="fixed px-20 py-10">

      <div className="flex">

        <div className="px-10">
          <img
            src={
              pathMatchRoute('/') ?
              PEHOLogo : PEHOLogoBlack
            }
            alt="Logo"
            className="h-20"
            onClick={() => navigate("/")}
          />
        </div>

        <div className="hidden md:flex items-center space-x-1">
          <a
            onClick={() => navigate("/")}
            // className={
            //   pathMatchRoute("/")
            //     ? "py-4 px-6 text-white font-semibold"
            //     : "py-4 px-6 font-normal"
            // }
            className={
              pathMatchRoute("/")
                ? "py-4 px-6 text-white font-normal"
                : "py-4 px-6 font-normal text-grey"
            }
          >
            Home
          </a>

          <a
            onClick={() => navigate("/about-us")}
            // className={
            //   pathMatchRoute('/services')
            //   ? 'py-4 px-6 text-green-500 font-semibold'
            //   : 'py-4 px-6 font-normal text-white'
            // }

            className={
              pathMatchRoute("/")
                ? "py-4 px-6 text-white font-normal"
                : "py-4 px-6 font-normal text-grey "
            }
          >
            About Us
          </a>
          <a
            onClick={() => navigate("/empower")}
            // className={
            //   !pathMatchRoute("/about-us")
            //     ? "py-4 px-6 text-white font-normal"
            //     : "py-4 px-6 text-gray font-semibold "
            // }
            className={
              pathMatchRoute("/")
                ? "py-4 px-6 text-white font-normal"
                : "py-4 px-6 font-normal text-grey"
            }
          >
            Empower
          </a>
          <a
            onClick={() => navigate("/contact-us")}
            // className={
            //   pathMatchRoute("/contact-us")
            //     ? "py-4 px-6 text-green-500 font-semibold"
            //     : "py-4 px-6 font-normal text-white"
            // }
            className={
              pathMatchRoute("/")
                ? "py-4 px-6 text-white font-normal"
                : "py-4 px-6 font-normal text-grey"
            }
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
