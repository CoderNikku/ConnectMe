import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navebar/navbar.jsx";
import Home from './components/home/home.jsx';
import Contact from './components/contact/contact.jsx';
import About from './components/about/about.jsx';
import Education from "./components/education/education.jsx";
import Experience from "./components/exprience/exprience.jsx"; // Corrected import
import Skills from "./components/skills/skills.jsx";
import Projects from "./components/projects/project.jsx";
import Footer from "./components/footer/footer.jsx";



export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/education" element={<Education />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}
