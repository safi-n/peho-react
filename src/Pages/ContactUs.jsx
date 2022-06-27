import React, {useState, useRef} from "react";
import Footer from "../components/Footer";
import contactUsImg from '../assets/PNG/contactUsImg.png'

const ContactUs = () => {
  const isMounted = useRef(true)
  const [formData, setFormData] = useState({
    name: '',
    number: '',
    email: '',
    country: {}
  })

  const {
    name,
    email,
    number,
    country
  } = formData

  const onSubmit = (e) => {
    e.preventDefault();
    
  };

  const onMutated = (e) => {

  }
  return (
    <div className="container">
      <div className="contact-us-container h-screen flex flex-row space-x-8 border border-green-500">
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
            >
              <div className="input-field-text flex flex-col">
                <label htmlFor="Name" className="mb-2 font-light">
                  Name
                </label>
                <input type="text" value={formData} id='phoneNumber' className="text-input p-2 border" onChange={onMutated}/>
              </div>

              <div className="input-field-text flex flex-col mt-9">
                <label htmlFor="Email" className="mb-2 font-light">
                  Email
                </label>
                <input type="email" id='phoneNumber' value={formData} className="text-input p-2 border" onChange={onMutated}/>
              </div>

              <div className="input-field-text flex flex-col mt-9">
                <label htmlFor="Email" className="mb-2 font-light">
                  Number
                </label>
                <input type="number" id='phoneNumber' value={formData} className="text-input p-2 border" onChange={onMutated}/>
              </div>

              <div className="input-field-text flex flex-col mt-9">
                <label htmlFor="Country" className="mb-2 font-light">
                  Country
                </label>
                <select id="selectCountry" className='font-light' value={formData}>
                  <option value="Afghanistan">Afghanistan</option>
                </select>
              </div>

              <div className="formButton mt-8 ml-24">
                <button type="submit" className="p-3 bg-green-400 text-white font-light">
                  Send Message
                </button>
              </div>

            </form>
          </div>
        </div>

        <div className="bg-contact-us">
          <div className="img-contact-us">
            <img src={contactUsImg}  alt="contact us" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactUs;
