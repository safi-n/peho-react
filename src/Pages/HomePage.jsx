import "../Style/home.css";
import { Fragment } from "react";
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
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <Fragment>
    <div className="home-container w-screen h-screen items-center">
      {/* HERO BANNER */}
      <div className="home-hero-container">
        <div className="hero-content flex flex-col leading-7">
          <h2 className="text-4xl text-white mb-10">WHAT IS PEHO?</h2>
          <p className="text-white font-light">
            PEHO is a Non governmental Non- profitable and Non- for profit
            organization with an Non independent legal identity. PEHO Aims to
            serve people and contribute into Afghanistan’s rehabilitation.
          </p>
        </div>
        <div className="hero-img-box">
          <div className="hero-mockup-box ml-8 p-24 py-36 mt-20">
            <img src={VideoHero} alt="Home main video" />
          </div>
        </div>
      </div>

      {/* WHAT WE DO */}

      <div className="wwdContainer flex items-center justify-center">
        <div className="wwd-box flex flex-row items-center space-x-24">
          <div className="wwd-pic">
            <img src={wwdPicture} alt="What we do pic" />
          </div>
          <div className="wwd-text w-96 leading-7">
            <h2 className="font-bold mb-4 text-4xl">
              WHAT WE <span className="mainColor">DO?</span>
            </h2>
            <p className="font-light">
              PEHO provides health and educational facilities Through vocational
              trainings, workshops, seminars, presentations, event’s, short and
              long courses and Implement health and educational professional
              projects.
            </p>
          </div>
        </div>
      </div>

      {/* WHO WE ARE */}

      <div className="wwa-container w-screen flex flex-col items-center mt-40 mb-72">
        <div className="wwa-title">
          <h2 className="font-bold text-4xl mb-2">
            WHO WE <span className="mainColor">ARE?</span>
          </h2>
        </div>

        <div className="wwa-box flex flex-row m-10">
          {/* Vision */}
          <div className="wwa-vision m-8 text-center items-center flex flex-col px-8 py-12 bg-white drop-shadow-md">
            <div className="wwa-vision-img mb-8">
              <img src={wwaVisionIcon} alt="vision icon" className="h-28" />
            </div>
            <div className="wwa-vision-title">
              <h2 className="mb-12 text-2xl">Vision</h2>
              <p className="text-xs w-60 font-light leading-5 text-left">
                A gender-equal Afghanistan, where poverty has been overcome, and
                everyone can get all the deserved healthcare and quality
                education.
              </p>
            </div>
          </div>
          {/* Mission */}
          <div className="wwa-mission m-8 text-center items-center flex flex-col px-8 py-12 bg-white drop-shadow-md">
            <div className="wwa-mission-img mb-8">
              <img src={wwaMissionIcon} alt="mission icon" className="h-28" />
            </div>
            <div className="wwa-mission-title">
              <h2 className="mb-12 text-2xl">Mission</h2>
              <p className="text-xs w-60 font-light leading-5 text-left">
                To help vulnerable people inside Afghanistan by joining local
                residents, government authorities, and international
                organizations to fight against diseases, illiteracy, and gender
                discrimination.
              </p>
            </div>
          </div>
          {/* Goal */}
          <div className="wwa-goal m-8 text-center flex flex-col items-center px-8 py-12 bg-white drop-shadow-md">
            <div className="wwa-goal-img mb-8">
              <img src={wwaGoalIcon} alt="goal icon" className="h-28" />
            </div>
            <div className="wwa-goal-title">
              <h2 className="mb-12 text-2xl">Goal</h2>
              <p className="text-xs w-60 font-light leading-5 text-justify">
                To reduce the suffering of vulnerable people by providing health
                advocacy to improve healthcare, vocational training to enhance
                sustainability, and means to gain equal education and work
                rights for the feminine gender.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CEO MESSAGE */}
      <div className="ceo-msg-container">
        <div className="ceo-msg-box m-12 flex flex-row justify-center items-center space-x-64">
          <div className="ceo-msg-content p-9">
            <h2 className="text-4xl mb-12">
              CEO <span className="mainColor">MESSAGE</span>
            </h2>
            <p className="font-light leading-7">
              We as a team are ready to create empathy and mutual understanding
              among suffering and vulnerable people in Afghanistan so that our
              nation can live in an atmosphere of mutual understanding and
              without linguistics affiliations, ethnicity, religion,
              nationality, gender and race in an atmosphere of empathy.
            </p>
          </div>
          <div className="ceo-img-box">
            <div className="ceo-img ">
              <img src={ceoImage} alt="CEO image" className="h-96" />
            </div>
            <div className="ceo-title px-4 py-1">
              <h2 className="text-white text-xl">Ms Hello</h2>
              <p className="text-white text-xs font-extralight">
                CEO & FOUNDER
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* WHERE WE OPERATE */}
      <div className="wwo-container px-40 p-24 bg-gray-50 mt-20 mb-36">
        <div className="wwo-box flex flex-row space-x-36">
          <div className="wwo-afg-map ">
            <img src={wwoAfgMap} alt="" />
          </div>
          <div className="wwo-content ">
            <h2 className="text-4xl mb-12">
              WHERE WE <span className="mainColor">OPERATE?</span>
            </h2>
            <p className="font-light leading-7">
              Harakat is an independent, non-profit, and Afghan-led,
              organization aiming to improve Afghanistan’s business environment.
              We work with the private sector, the government and civil society
              to implement activities aimed at reducing or removing barriers to
              business in Afghanistan. Harakat acts as a bridge between the
              Government of the Islamic Republic of Afghanistan (GoIRA) and the
              private sector.{" "}
            </p>
          </div>
        </div>
      </div>

      <div className="our-partner-container flex flex-col items-center mb-36">
        <div className="our-partner-content mb-28">
          <h2 className="text-4xl">
            OUR <span className="mainColor">PARTNER</span>
          </h2>
        </div>
        <div className="our-partner-image flex flex-row space-x-32">
          <img
            src={ourPartnerIcon1}
            className="partnerIcon"
            alt="Partner 1 image"
          />
          <img
            src={ourPartnerIcon2}
            className="partnerIcon"
            alt="Partner 2 image"
          />
          <img
            src={ourPartnerIcon3}
            className="partnerIcon"
            alt="Partner 3 image"
          />
        </div>
      </div>
      <Footer />
    </div>
    </Fragment>
  );
};

export default HomePage;
