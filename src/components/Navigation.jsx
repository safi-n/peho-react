import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useRef } from "react";
import PEHOLogo from "../assets/PNG/PEHOLogo_White.png";
import PEHOLogoBlack from "../assets/PNG/PEHOLogo_Orignal.png";
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
    <header className="w-screen">
      <nav
        className={
          pathMatchRoute("/")
            ? "fixed px-14 py-6 w-screen z-20 navbar-container flex flex-row lg:justify-start sm:justify-between"
            : "fixed px-14 py-6 w-screen z-20 navbar-container-white flex flex-row border lg:justify-start sm:justify-between"
        }
      >
        {/* Logo area */}
        <div className="ml-10 mr-10">
          <img
            src={pathMatchRoute("/") ? PEHOLogo : PEHOLogoBlack}
            alt="Logo"
            className="h-16"
            onClick={() => navigate("/")}
          />
        </div>
        {/* Nav Links */}
        <div className="navbar navbar-items lg:flex items-center space-x-1">
          <NavLink
            exact
            to="/"
            className={
              pathMatchRoute("/")
                ? "py-4 px-6 text-white font-light"
                : "py-4 px-6 font-light text-gray-800 "
            }
          >
            <span className={pathMatchRoute("/") ? "font-bold" : ""}>Home</span>
          </NavLink>

          <NavLink
            exact
            to="/about-us"
            className={
              pathMatchRoute("/")
                ? "py-4 px-6 text-white font-light"
                : "py-4 px-6 font-light text-gray-800 "
            }
          >
            <span className={pathMatchRoute("/about-us") ? "font-bold" : ""}>
              About Us
            </span>
          </NavLink>

          {/* <NavLink
              exact
              to="/empower"
              className={
              pathMatchRoute("/")
                ? "py-4 px-6 text-white font-light"
                : "py-4 px-6 font-light text-gray-800 "}>
              <span className={pathMatchRoute('/empower')? 'font-bold' : ''}>Empower</span>
              </NavLink> */}

          <NavLink
            exact
            to="/contact-us"
            className={
              pathMatchRoute("/")
                ? "py-4 px-6 text-white font-light"
                : "py-4 px-6 font-light text-gray-800 "
            }
          >
            <span className={pathMatchRoute("/contact-us") ? "font-bold" : ""}>
              Contact Us
            </span>
          </NavLink>
        </div>
        <div className="nav-toggle">
          <div className="bar"></div>
        </div>
      </nav>
    </header>
  );
};

export default Navigation;
