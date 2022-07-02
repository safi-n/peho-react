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
    <>
      <nav className="px-3 py-4">
        {/* Logo area */}
        <div className="logo-container ">
          <img
            src={pathMatchRoute("/") ? PEHOLogo : PEHOLogoBlack}
            alt="PEHO logo"
            className="h-14 "
          />
        </div>
      </nav>
    </>
  );
};

export default Navbar 