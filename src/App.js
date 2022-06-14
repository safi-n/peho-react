import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import HomePage from "./Pages/HomePage";
import { ServicePage } from "./Pages/ServicePage";



function App() {
  return (
    <div className="App">

      <Router>
      <Navigation/>
        <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/services" element={<ServicePage/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
