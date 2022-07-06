import { Fragment } from "react";
import "../Style/home.css";
import VideoHero from "../assets/PNG/videoHero.png";
import wwdPicture from "../assets/JPG/wwdPicture.png";
import wwaVisionIcon from "../assets/PNG/wwa-vision.png";
import wwaMissionIcon from "../assets/PNG/wwa-mission.png";
import wwaGoalIcon from "../assets/PNG/wwa-goal.png";
import ceoImage from "../assets/PNG/ceoImage.png";
import wwoAfgMap from "../assets/PNG/wwoAfgMap.png";
import ourPartnerIcon1 from "../assets/PNG/ourPartnerIcon1.png";
import ourPartnerIcon2 from "../assets/PNG/ourPartnerIcon2.png";
import ourPartnerIcon3 from "../assets/PNG/ourPartnerIcon3.png";

const HomePage = () => {
  return (
    <Fragment>
      <div className="homepage-container">
        <div className="homepage-hero-container">
          <div className="hero-content-box">
            <h2 className="text-black">WHAT IS PEHO?</h2>
            <p>
              PEHO is a Non governmental Non- profitable and Non- for profit
              organization with an Non independent legal identity. PEHO Aims to
              serve people and contribute into Afghanistan’s rehabilitation.
            </p>
          </div>
          <div className="hero-visual-box">
            <div className="hero-mockup">
              <img src={VideoHero} alt="Video Hero" />
            </div>
          </div>
          <div className="hero-mobile-mockup"></div>
        </div>
      </div>
    </Fragment>
  );
};

export default HomePage;
