// eslint-disable-next-line no-unused-vars
import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Form from "./pages/Form";
// import Career from "./pages/Career";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/form" element={<Form />} />
        {/* <Route path="/career" element={<Career />} /> */}
      </Routes>
    </Router>
  );
}
