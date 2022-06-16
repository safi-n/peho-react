import { Fragment } from "react";
import MainBanner from "../assets/XDFiles/MainBanner.jpg";
import VideoHero from "../assets/PNG/videoHero.png";
import wwdPicture from "../assets/JPG/wwdPicture.png";
import wwaVisionIcon from "../assets/PNG/wwa-vision.png";
import wwaMissionIcon from "../assets/PNG/wwa-mission.png";
import wwaGoalIcon from "../assets/PNG/wwa-goal.png";

const HomePage = () => {
  return (
    <Fragment>
      {/* HERO BANNER */}
      <div className="heroBg min-h-screen w-screen flex justify-center items-center mb-40">
        <div className="py-auto flex flex-row space-x-4  min-h-fit w-screen">
          <div className="textBox my-auto">
            <h2 className="text-white text-4xl mb-12">WHAT IS PEHO?</h2>
            <p className="text-white font-light">
              PEHO is a Non governmental Non- profitable and Non- for profit
              organization with an Non independent legal identity. PEHO Aims to
              serve people and contribute into Afghanistan’s rehabilitation.
            </p>
          </div>
          <div className="designBox my-auto ">
            <div className="mockupBanner p-28">
              <div className="videoBox bg-cover ">
                <img src={VideoHero} className="mainVideo" alt="Video hero" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* What we do */}

      <div className="wwdContainer justify-center">
        <div className="wwd-box flex flex-row mx-32">
          <div className="wwd-pic mr-32">
            <img src={wwdPicture} alt="What we do pic" />
          </div>
          <div className="wwd-text w-96">
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

      {/* Who we are? */}

      <div className="wwa-container w-screen flex flex-col items-center mt-40">
        <div className="wwa-title">
          <h2 className="font-bold text-4xl mb-10">
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
              <p className="text-xs w-60 font-light">
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
              <p className="text-xs w-60 font-light">
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
              <p className="text-xs w-60 font-light">
                To reduce the suffering of vulnerable people by providing health
                advocacy to improve healthcare, vocational training to enhance
                sustainability, and means to gain equal education and work
                rights for the feminine gender.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default HomePage;
