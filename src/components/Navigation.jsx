import { useLocation, useNavigate } from "react-router-dom";
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
    <div className={
      pathMatchRoute('/') ? 
      "fixed px-14 py-6 w-screen z-20 navbar-container"
      : "fixed px-14 py-6 w-screen z-20 navbar-container-white"
      }>

      <div className="flex flex-row">
        {/* Logo area */}
        <div className="ml-10 mr-10">
          <img
            src={
              pathMatchRoute('/') ?
              PEHOLogo : PEHOLogoBlack
            }
            alt="Logo"
            className="h-16"
            onClick={() => navigate("/")}
          />
        </div>
        
        <div className="navbar hidden md:flex items-center space-x-1">
          <a
            onClick={() => navigate("/")}
            className={
              pathMatchRoute("/")
                ? "py-4 px-6 text-white font-light"
                : "py-4 px-6 font-light text-grey"
            }
          >
            Home
          </a>

          <a
            onClick={() => navigate("/about-us")}
            className={
              pathMatchRoute('/')
                ? "py-4 px-6 text-white font-light"
                : "py-4 px-6 font-light text-gray-800 "
            }
          >
            About Us
          </a>
          <a
            onClick={() => navigate("/empower")}
            className={
              pathMatchRoute("/")
                ? "py-4 px-6 text-white font-light"
                : "py-4 px-6 font-light text-grey"
            }
          >
            Empower
          </a>
          <a
            onClick={() => navigate("/contact-us")}
            className={
              pathMatchRoute("/")
                ? "py-4 px-6 text-white font-light"
                : "py-4 px-6 font-light text-grey"
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
