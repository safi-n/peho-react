import React from "react";
import watofPic1 from "../assets/PNG/watofPic1.png";
import watofPic2 from "../assets/PNG/watofPic2.png";
import watofPic3 from "../assets/PNG/watofPic3.png";
import afghanIcon from "../assets/PNG/AfghanIcon.png";
import accountabilityIcon from "../assets/PNG/AccountabiltyIcon-01.png";
import trustIcon from "../assets/PNG/handshakeIcon-01.png";
import equalIcon from "../assets/PNG/EqualOpportunity-01.png";

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
        {/* Title */}
        <div className="peho-value-title mb-20">
          <h2 className="text-4xl">
            PEHO's <span className="mainColor">VALUE</span>
          </h2>
        </div>
        {/* ------------------------ BOXES */}
        <div className="value-boxes flex flex-row space-x-8">
          {/* Accountability */}
          <div className="value-box-col-1 p-3 flex flex-col">
            <span className=" h-28"></span>
            <div className="value-box-image-accountabilty bg-white drop-shadow-md p-3">
              <img src={accountabilityIcon} alt="" className="mb-4"/>
              <h2 className="text-lg mb-2 secondaryColor">Accountability</h2>
              <p className="font-light text-sm">
                PEHO Follow the fact and condition of being responsible of
                accountability in all its deals and relationships.
              </p>
            </div>
          </div>

          {/* Trust & Equal */}
          <div className="value-box-col-2  flex flex-col p-3">
            <div className="value-box-image-trust bg-white drop-shadow-md p-3">
              <img src={trustIcon} alt="" className="mb-4"/>
              <h2 className="text-lg mb-2 secondaryColor">Trust</h2>
              <p className="font-light text-sm">
                PEHO’s impact and its well-known brand as a trusted organization
                is our most treasured asset.
              </p>
            </div>
            <span className="h-20"></span>
            <div className="value-box-image-equality p-3 bg-white drop-shadow-md">
              <img src={equalIcon} alt="" className="mb-4" />
              <h2 className="text-lg mb-2 secondaryColor">Equal opportunities</h2>
              <p className="font-light text-sm">
                PEHO has a nondiscriminatory policy for internal and external
                relationships.
              </p>
            </div>
          </div>
          {/* Afghan Led */}
          <div className="value-box-col-3  flex flex-col p-3">
            <span className="h-28"></span>
            <div className="value-box-image-afghanLed bg-white drop-shadow-md p-3">
              <img src={afghanIcon} alt="afghan Icon" className="mb-4"/>
              <h2 className="text-lg mb-2 secondaryColor">Afghan Led</h2>
              <p className="font-light text-sm">
                PEHO is an Afghan-led and Afghan-managed organization to help
                Afghan women with health problems.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
