import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import HomePage from "./Pages/HomePage";
import { ServicePage } from "./Pages/ServicePage";
import ContactUs from "./Pages/ContactUs";
import AboutUs from "./Pages/AboutUs";



function App() {
  return (
    <div className="App">

      <Router>
      <Navigation className='navigateMenu'/>
        <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/services" element={<ServicePage/>} />
        <Route path="/contact-us" element={<ContactUs/>} />
        <Route path="/about-us" element={<AboutUs/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
