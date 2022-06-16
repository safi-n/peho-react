import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import HomePage from "./Pages/HomePage";
import EmpowerPage from "./Pages/EmpowerPage";
import ContactUs from "./Pages/ContactUs";
import AboutUs from "./Pages/AboutUs";
import Footer from "./components/Footer";



function App() {
  return (
    <div className="App">

      <Router>
      <Navigation/>
        <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/empower" element={<EmpowerPage/>} />
        <Route path="/contact-us" element={<ContactUs/>} />
        <Route path="/about-us" element={<AboutUs/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
