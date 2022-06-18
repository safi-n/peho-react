import React from "react";
import watofPic1 from "../assets/PNG/watofPic1.png";
import watofPic2 from "../assets/PNG/watofPic2.png";
import watofPic3 from "../assets/PNG/watofPic3.png";
import afghanIcon from '../assets/PNG/AfghanIcon.png'
import 

const AboutUs = () => {
  return (
    <div className="container border px-30 mx-auto w-screens">
      <div className="watof-container h-screen flex flex-row justify-center items-center space-x-20">
        <div className="watof-content">
          <h2 className="watof-title text-4xl mb-10 leading-10">
            WE ARE TEAM <br /> OF{" "}
            <span className="mainColor">PROFESSIONALS</span>
          </h2>
          <p className="watof-paragraf font-light leading-7">
            all members of PEHO are expert and innovative Afghans they have
            educated and entitled by diploma. PEHO member are people who have
            always had enough credibility in their work environment and social
            life. Having a good and moral relationship that benefit’s own self
            and others is one of the most important principal’s of their social
            life and they are committed to this principle.
          </p>
        </div>
        <div className="watof-pics">
          <div className="watof-mockup ">
            <div className="watof-pic-flex flex flex-row space-x-6">
              <div className="watof-pic-flex-1 mt-8 ">
                <img src={watofPic1} alt="" />
                <div className="watof-pic-col-2 flex flex-row mt-6">
                  <span className="col-2-img-empty w-32"></span>
                  <img src={watofPic2} alt="" />
                </div>
              </div>
              <div className="watof-pic-flex-2 flex flex-col">
                <span className="h-16"></span>
                <img src={watofPic3} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="peho-value-container flex flex-col items-center">
        <div className="peho-value-title">
          <h2 className="text-4xl">PEHO's <span className="mainColor">VALUE</span></h2>
        </div>
        <div className="value-boxes flex flex-row">
          <div className="value-box-col-1 border p-10">
            <span className="h-20"></span>
            <div className="value-box-image">

            </div>
            <span></span>
          </div>
          <div className="value-box-col-2">
            <div className="value-box-image flex flex-col">
              <img src= alt="" />
            </div>
            <span></span>
            <div className="value-box-image">

            </div>
          </div>
          <div className="value-box-col-3">
            <span></span>
            <img src="" alt="" />
            <span></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
