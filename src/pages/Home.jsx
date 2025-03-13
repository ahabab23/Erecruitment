// eslint-disable-next-line no-unused-vars
import React from "react";
import TopBar from "./TopBar";
import Navbar from "./Navbar";
import Footer from "./Footer";
import HeroSection from "./HeroSection";
import ServicesSection from "./ServiceSection";

export default function Home() {
  return (
    <>
      <TopBar />
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <Footer />
    </>
  );
}
