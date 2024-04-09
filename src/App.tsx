import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Weather from "./components/Weather";
import Contact from "./components/Contact";

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery layout="grid" />} />
          <Route path="/weather" element={<Weather />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
