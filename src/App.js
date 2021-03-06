import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Navigation from "./components/Navigation";
import HomePage from "./Pages/HomePage";
import EmpowerPage from "./Pages/EmpowerPage";
import ContactUs from "./Pages/ContactUs";
import AboutUs from "./Pages/AboutUs";
import Navbar from "./components/Navbar";
import Footer from "./components/shared/footer/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/empower" element={<EmpowerPage />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/about-us" element={<AboutUs />} />
        </Routes>
        <>
        
          <div className="hidden md:block">
          <Footer />
          </div>
          <div className="block md:hidden">

          </div>
        </>
      </Router>
    </div>
  );
}

export default App;
