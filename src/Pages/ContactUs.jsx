import React from "react";
import Footer from "../components/Footer";

const ContactUs = () => {
  const formSubmitHandler = {};
  return (
    <div className="container">
      <div className="contact-us-container h-screen flex flex-row space-x-8 border border-green-500">

        <div className="form-container-contact-us p-12 flex flex-col mt-24 ml-10">
          <div className="form-title-contact-us">
            <h2 className="text-4xl">SEND US <span className="mainColor">Message</span></h2>
          </div>
          <form onSubmit={formSubmitHandler} className='contactUsForm border mt-20 p-6'>
            <div className="input-field-text flex flex-col">
              <label htmlFor="Name" className="mb-2 font-light">Name</label>
              <input type="text" className="text-input p-2 border" />
            </div>
            <div className="input-field-text flex flex-col mt-9">
              <label htmlFor="Email" className="mb-2 font-light">Email</label>
              <input type="text" className="text-input p-2 border" />
            </div>
          </form>
        </div>

        <div className="bg-contact-us">
          <div className="img-contact-us">
            
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactUs;
