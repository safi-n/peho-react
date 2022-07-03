import { NavLink, useLocation, useNavigate } from "react-router-dom";
import PEHOLogo from "../assets/PNG/PEHOLogo_White.png";
import PEHOLogoBlack from "../assets/PNG/PEHOLogo_Orignal.png";
import { useState } from "react";
import classes from '../Style/nabar.module.css'

export const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);
  const pathMatchRoute = (route) => {
    {
      if (route === location.pathname) {
        return true;
      }
    }
  };

  return (
    <div
      className={
        pathMatchRoute("/") ? `nav-color fixed z-40` : "bg-white fixed z-40"
      }
    >
      <nav
        className={
          pathMatchRoute("/")
            ? "navbar-container w-screen space-x-20 mobile:space-x-1"
            : "navbar-container w-screen space-x-20 mobile:space-x-1"
        }
      >
        {/* Logo area */}
        <div className="logo-container p-2">
          <a href="/">
            <img
              src={pathMatchRoute("/") ? PEHOLogo : PEHOLogoBlack}
              alt="PEHO logo"
              className="nav-logo"
            />
          </a>
        </div>
        {/* NavLinks */}
        <div className="navlinks-container flex flex-row space-x-12">
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

        <div className="burger-container">
          <a onClick={() => setShowMenu(!showMenu)}>
            <div className="navlink-burger flex flex-col space-y-1">
              <div
                className={
                  pathMatchRoute("/") ? "bar bg-white" : "bar bg-black"
                }
              ></div>
              <div
                className={
                  pathMatchRoute("/") ? "bar bg-white" : "bar bg-black"
                }
              ></div>
              <div
                className={
                  pathMatchRoute("/") ? "bar bg-white" : "bar bg-black"
                }
              ></div>
            </div>
          </a>
        </div>
      </nav>
      {showMenu ? (
        <div className="burger-menu-slider z-50 fixed">
          <div className="bg-burger-menu h-screen bg-black w-screen"
          onClick={() => setShowMenu(!showMenu)}>
            <div className="burger-links-container p-20">
              <div className="burger-link text-white text-lg p-2 text-center">
                <NavLink to={'/'}>
                  Home
                </NavLink>
              </div>
              <div className="burger-link text-white text-lg p-2 text-center">
                <NavLink to={'/about-us'}>
                  About us
                </NavLink>
              </div>
              <div className="burger-link text-white text-lg p-2 text-center">
                <NavLink to={'/contact-us'}>
                  Contact us
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Navbar;
