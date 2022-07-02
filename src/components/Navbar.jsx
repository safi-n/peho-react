import { NavLink, useLocation, useNavigate } from "react-router-dom";
import PEHOLogo from "../assets/PNG/PEHOLogo_White.png";
import PEHOLogoBlack from "../assets/PNG/PEHOLogo_Orignal.png";

export const Navbar = () => {
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
    <div className={pathMatchRoute("/") ? "nav-color fixed z-50" : "bg-white fixed z-50"}>
      <nav
        className={
          pathMatchRoute("/")
            ? "navbar-container w-screen space-x-12"
            : "navbar-container w-screen space-x-12"
        }
      >
        {/* Logo area */}
        <div className="logo-container p-2">
          <a href="/">
            <img
              src={pathMatchRoute("/") ? PEHOLogo : PEHOLogoBlack}
              alt="PEHO logo"
              className="h-14"
            />
          </a>
        </div>
        {/* NavLinks */}
        <div className="navlinks-container border flex flex-row space-x-7">
          {/* Home link */}
          <NavLink
            to="/"
            className={
              pathMatchRoute("/")
                ? "text-white font-light"
                : "text-black font-light"
            }
          >
            <span className={pathMatchRoute("/") ? "font-bold" : "font-light"}>
              Home
            </span>
          </NavLink>
          {/* About us */}
          <NavLink
            to="/about-us"
            className={
              pathMatchRoute("/")
                ? "text-white font-light"
                : "text-black font-light"
            }
          >
            <span
              className={
                pathMatchRoute("/about-us") ? "font-bold" : "font-light"
              }
            >
              About us
            </span>
          </NavLink>
          {/* Contact us */}
          <NavLink
            to="/contact-us"
            className={
              pathMatchRoute("/")
                ? "text-white font-light"
                : "text-black font-light"
            }
          >
            <span
              className={
                pathMatchRoute("/contact-us") ? "font-bold" : "font-light"
              }
            >
              Contact us
            </span>
          </NavLink>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
