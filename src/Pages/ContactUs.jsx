import React, { useState, useRef } from "react";
import Select from "react-select";
import Footer from "../components/Footer";
import contactUsImg from "../assets/PNG/contactUsImg.png";
import emailjs from "@emailjs/browser";
import Result from "../components/Result";
const ContactUs = () => {
  const form = useRef();
  const [result, showResult] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_h4dey33",
        "template_t19eoy8",
        form.current,
        "5Zt16kyRZxZpPmFJ4"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
    showResult(true);
  };

  return (
    <div className="container">
      { result ? <Result/> :
      <div className="contact-us-container h-screen flex flex-row space-x-20 items-center mb-20">
        <div className="form-container-contact-us p-12 flex flex-col mt-24 ml-10">
          <div className="form-title-contact-us">
            <h2 className="text-4xl">
              SEND US <span className="mainColor">Message</span>
            </h2>
          </div>
          {/* form start */}
          <div className="form-contact-us mx-auto mb-8">
            <form
              onSubmit={onSubmit}
              className="contactUsForm border mt-10 p-6 mx-auto"
              ref={form}
            >
              <div className="input-field-text flex flex-col">
                {/* name */}
                <label htmlFor="Name" className="mb-2 font-light">
                  Name
                </label>
                <input
                  type="text"
                  name="user_name"
                  id="name"
                  className="text-input p-2 border"
                  required
                />
              </div>
              {/* email */}
              <div className="input-field-text flex flex-col mt-9">
                <label htmlFor="Email" className="mb-2 font-light">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="user_email"
                  className="text-input p-2 border"
                  required
                />
              </div>
              {/* number */}
              <div className="input-field-text flex flex-col mt-9">
                <label htmlFor="number" className="mb-2 font-light">
                  Number
                </label>
                <input
                  type="text"
                  id="phoneNumber"
                  name="user_phone"
                  className="text-input p-2 border"
                />
              </div>
              {/* country */}
              {/* <div className="input-field-text flex flex-col mt-9">
                <label htmlFor="Country" className="mb-2 font-light">
                  Country
                </label>
                <select
                  id="selectCountry"
                  className="font-light"
                >
                  <option value="Afghanistan">Afghanistan</option>
                </select>
              </div> */}
              {/* message */}
              <div className="input-field-text flex flex-col mt-9">
                <label htmlFor="number" className="mb-2 font-light">
                  Message
                </label>
                <textarea
                  name="user_message"
                  id="message"
                  cols="30"
                  rows="10"
                  className="bg-white border border-gray-200 h-40"
                ></textarea>
              </div>
              {/* submit */}
              <div className="formButton mt-8 ml-24">
                <button
                  type="submit"
                  className="p-3 bg-green-400 text-white font-light"
                  value="send"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="bg-contact-us">
          <div className="img-contact-us mt-32">
            <img src={contactUsImg} alt="contact us" />
          </div>
        </div>
      </div>
    }
      <Footer />
    </div>
  );
};

export default ContactUs;
