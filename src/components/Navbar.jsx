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
      <nav className="px-20 py-6 w-screen border flex flex-row items-center space-x-12">
        {/* Logo area */}
        <div className="logo-container">
          <img
            src={pathMatchRoute("/") ? PEHOLogo : PEHOLogoBlack}
            alt="PEHO logo"
            className="h-14"
          />
        </div>
        <div className="navlinks-container">
          <NavLink to='/'
          className={
            pathMatchRoute('/') ?
            'text-white font-light' : 'text-black font-light'
          }>
            <span className={pathMatchRoute('/') ? 'font-bold' : 'font-light'}>Home</span>
          </NavLink>
        </div>
      </nav>
    </>
  );
};

export default Navbar 