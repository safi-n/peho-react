import React from "react";
import PEHOLogoWhite from "../assets/PNG/PEHOLogo_White.png";
import facebookIcon from "../assets/SMicon/facebookIcon.png";
import twitterIcon from "../assets/SMicon/twitterIcon.png";
import instagramIcon from "../assets/SMicon/instagramIcon.png";
import linkedinIcon from "../assets/SMicon/linkedin-inIcon.png";
import youtubeIcon from "../assets/SMicon/youtubeIcon.png";

const Footer = () => {
  return (
    <div className="footer w-screen px-28 py-10">
      <div className="footer-logo-section">
        <div className="peho-logo-footer mb-10">
          <img src={PEHOLogoWhite} className="h-16" alt="" />
        </div>
        <div className="footer-content w-56">
          <h2 className="mb-8 text-xl text-white">CONNECT WITH US</h2>
          <div className="footer-logo flex flex-row justify-start space-x-5 items-end ">
            <img src={facebookIcon} className="h-5" alt="FB icon" />
            <img src={instagramIcon} className="h-5" alt="Insta icon" />
            <img src={twitterIcon} className="h-5" alt="twitter icon" />
            <img src={linkedinIcon} className="h-5" alt="LinkedIn icon" />
            <img src={youtubeIcon} className="h-4" alt="YT icon" />
          </div>
        </div>
      </div>

      <div className="support-links-section">
        
      </div>
    </div>
  );
};

export default Footer;
