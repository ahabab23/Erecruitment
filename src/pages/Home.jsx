import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import "../styles/Home.css";
import Services from "../components/Services";

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="relative">
      <div
        className="flex flex-col items-center overflow-hidden"
        data-aos="fade-in"
        data-aos-delay="500"
      >
        {/* Welcome text */}
        <div className="relative w-full bg-purple-600 text-white p-10 text-center pb-24">
          {/* Container for content */}
          <div className="container mx-auto px-4 md:px-8 flex flex-col md:flex-row lg:flex-row items-center">
            {/* Left Column: Text Content */}
            <div className="w-full lg:w-1/2 space-y-2 order-2 md:order-1 lg:order-1 text-left">
              <p className="text-xs md:text-xs bg-gray-300/50 p-2 w-28 rounded-2xl">
                Welcome to CDL
              </p>

              <h1 className="text-4xl md:text-2xl font-bold">Excellence in</h1>

              <h2 className="text-3xl md:text-xl text-purple-300 font-semibold">
                Business Outsourcing
              </h2>

              <p className="text-xs opacity-90">
                Streamlined operations for enhanced business efficiency
              </p>

              <p className="text-sm pt-4">
                Your trusted partner for over 20 years
              </p>

              <div className="flex flex-wrap gap-4 pt-2">
                <button className="px-2 py-2 bg-transparent border-2 border-white rounded-md hover:bg-purple-700 transition-colors text-xs">
                  Schedule A Call
                </button>

                <button className="px-2 py-2 bg-transparent border-2 border-white rounded-md hover:bg-purple-700 transition-colors text-xs">
                  Discover More
                </button>
              </div>
            </div>

            {/* Right Column: Image */}
            <div className="w-full md:w-1/2 lg:w-1/2 mt-8 lg:mt-0 order-1 lg:order-2 relative">
              <div className="rounded-lg overflow-hidden shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1504670073073-6123e39e0754?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Business professionals in a meeting"
                  className="w-full h-auto"
                />
              </div>
              {/* Pin */}
              <div className="absolute -top-2 -right-2 bg-white text-purple-800 rounded-full p-2 shadow-lg">
                <div className="text-center">
                  <div className="text-sm font-bold">20+</div>
                  <div className="text-[5px] uppercase tracking-wider leading-tight">
                    YEARS OF
                    <br />
                    EXCELLENCE
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* SVG wave at the bottom of the purple section */}
          <svg
            className="absolute bottom-0 left-0 w-full"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 100"
            preserveAspectRatio="none"
          >
            <path
              fill="white"
              d="M0,0 C300,60 900,60 1440,0 L1440,100 L0,100 Z"
            ></path>
          </svg>
        </div>

        <Services />
      </div>
    </div>
  );
}
