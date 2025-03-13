import React from "react";
import TopBar from "./TopBar";
import Navbar from "./Navbar";
import AboutSection from "./AboutSection";
import MissionVision from "./MissionVision";
import OurValues from "./OurValues";
import Footer from "./Footer";

export default function About() {
  return (
    <>
      <TopBar />
      <Navbar />
      <AboutSection />
      <MissionVision />
      <OurValues />
      <Footer />
    </>
  );
}
