import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";

function App() {
  return (
    <div className="App">

      <Navigation/>
      <Router>
        <Routes>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
