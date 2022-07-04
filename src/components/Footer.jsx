import { Fragment } from "react";
import "../Style/footer.css";
import PEHOLogoWhite from "../assets/PNG/PEHOLogo_White.png";
import facebookIcon from "../assets/SMicon/facebookIcon.png";
import twitterIcon from "../assets/SMicon/twitterIcon.png";
import instagramIcon from "../assets/SMicon/instagramIcon.png";
import linkedinIcon from "../assets/SMicon/linkedin-inIcon.png";
import youtubeIcon from "../assets/SMicon/youtubeIcon.png";

const Footer = () => {
  return (
    <Fragment>
      <div className="footer-container">
        {/* Logo Section */}
        <div className="footer-logo-section">
          <div className="footer-log-white">
            <img src={PEHOLogoWhite} alt="Footer logo" />
          </div>
          <div className="footer-connect-title">
            <h2>CONNECT WITH US</h2>
          </div>
          <div className="footer-socialmedia-icons">
            <img src={facebookIcon} alt="" />
            <img src={twitterIcon} alt="" />
            <img src={instagramIcon} alt="" />
            <img src={linkedinIcon} alt="" />
            <img src={youtubeIcon} alt="" />
          </div>
        </div>
        {/* Support Link */}
        <div className="footer-support-link">
          <a href="/contact-us">Message us</a>
          <a href="/about-us">Know more about us</a>
          <a href="/about-us">Our team</a>
        </div>
        {/* Support Link 2 */}
        <div className="footer-support-link2">
          <a href="/empower-us">Empower women</a>
          <a href="/empower-us">Empower Health</a>
        </div>

      </div>
        {/* Mobile Version */}
        <div className="footer-mobile-container">
          <div className="footer-socalmedia-title-mobile">
            <h2>CONNECT WITH US</h2>
          </div>
          <div className="footer-socialmedia-icons-mobile">
            <img src={facebookIcon} alt="" />
            <img src={twitterIcon} alt="" />
            <img src={instagramIcon} alt="" />
            <img src={linkedinIcon} alt="" />
            <img src={youtubeIcon} alt="" />
          </div>
        </div>
    </Fragment>
  );
};

export default Footer;
