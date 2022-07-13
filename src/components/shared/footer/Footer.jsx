import { Fragment } from "react";
import "../Style/footer.css";
import PEHOLogoWhite from "../assets/PNG/PEHOLogo_White.png";
import facebookIcon from "../assets/SMicon/facebookIcon.png";
import twitterIcon from "../assets/SMicon/twitterIcon.png";
import instagramIcon from "../assets/SMicon/instagramIcon.png";
import linkedinIcon from "../assets/SMicon/linkedin-inIcon.png";
import youtubeIcon from "../assets/SMicon/youtubeIcon.png";
import DesktopFooter from "./DesktopFooter";
import MobileFooter from "./MobileFooter";

const Footer = () => {
  return (
    <>
      <DesktopFooter />
      <MobileFooter />
    </>
  );
};

export default Footer;
