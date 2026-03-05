import React from 'react';

import Navbar from "./components/Navbar"
import Home from "./pages/Home/Home"
import { Routes, Route } from "react-router-dom";
import Resume from "./pages/Resume/Resume";
import Projects from "./pages/Projects/Projects"
import Contact from "./pages/Contact/Contact"
import Footer from "./components/Footer"




function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
