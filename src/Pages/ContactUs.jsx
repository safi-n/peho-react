import React from "react";
import Footer from "../components/Footer";

const ContactUs = () => {
  const formSubmitHandler = {};
  return (
    <div className="container">
      <div className="contact-us-container h-screen flex flex-col">

        <div className="form-container-contact-us p-12">
          <form onSubmit={formSubmitHandler}>
            <div className="input-field-text">
              <label htmlFor="Name">Name</label>
              <input type="text" className="text-input" />
            </div>
          </form>
        </div>

        <div className="bg-contact-us">
          <h3>how are you doing?</h3>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactUs;
