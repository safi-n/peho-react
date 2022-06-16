import { Fragment } from "react";
import MainBanner from "../assets/XDFiles/MainBanner.jpg";
import VideoHero from "../assets/PNG/videoHero.png";
import wwdPicture from "../assets/JPG/wwdPicture.png";
import wwaVisiom from '../assets/PNG/wwa-vision.png'

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

      <div className="wwdContainer justify-center ">
        <div className="wwd-box flex flex-row mx-32">
        <div className="wwd-pic mr-32">
          <img src={wwdPicture} alt="What we do pic" />
        </div>
        <div className="wwd-text w-96">
          <h2 className="font-bold mb-4 text-4xl">WHAT WE <span className="mainColor">DO?</span></h2>
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

      <div className="wwa-container w-screen flex flex-col justify-center border border-2 ">
        <h2 className="font-bold mb-12 text-4xl">WHO WE <span className="mainColor">ARE?</span></h2>
        <div className="wwa-box flex flex-col">
          <div className="wwa-vision">
            <img src={wwaVisiom} alt="" />
          </div>
          <div className="wwa-mission"></div>
          <div className="wwa-goal"></div>
        </div>
      </div>
    </Fragment>
  );
};

export default HomePage;
