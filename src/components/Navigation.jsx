import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useRef } from "react";
import DensityMediumIcon from "@mui/icons-material/DensityMedium";
import PEHOLogo from "../assets/PNG/PEHOLogo_White.png";
import PEHOLogoBlack from "../assets/PNG/PEHOLogo_Orignal.png";
const Navigation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const navRef = useRef();

  const pathMatchRoute = (route) => {
    {
      if (route === location.pathname) {
        return true;
      }
    }
  };

  return (
    <header className="mobile:flex justify-between w-screen lg:w-screen">
      <div
        className={
          pathMatchRoute("/")
            ? "fixed px-14 py-6 w-screen z-20 navbar-container"
            : "fixed px-14 py-6 w-screen z-20 navbar-container-white"
        }
      >
        <div className="flex flex-row">
          {/* Logo area */}
          <div className="ml-10 mr-10">
            <img
              src={pathMatchRoute("/") ? PEHOLogo : PEHOLogoBlack}
              alt="Logo"
              className="h-16"
              onClick={() => navigate("/")}
            />
          </div>
          <nav ref={navRef}>
            <div className="navbar hidden navbar-items lg:flex items-center space-x-1">
              <NavLink
                exact
                to="/"
                className={
                  pathMatchRoute("/")
                    ? "py-4 px-6 text-white font-light"
                    : "py-4 px-6 font-light text-gray-800 "
                }
              >
                <span className={pathMatchRoute("/") ? "font-bold" : ""}>
                  Home
                </span>
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
                <span
                  className={pathMatchRoute("/about-us") ? "font-bold" : ""}
                >
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
                <span
                  className={pathMatchRoute("/contact-us") ? "font-bold" : ""}
                >
                  Contact Us
                </span>
              </NavLink>
            </div>
            <div className="nav-toggle">
              <div className="bar"></div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navigation;
