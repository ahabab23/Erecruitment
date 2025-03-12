// eslint-disable-next-line no-unused-vars
import React from "react";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import TypedJS from "../components/TypedJS";
import Title from "../components/Title";
import "../styles/About.css"


const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const categories = ["About Us"];

  return (
    <div
      className="flex flex-col  items-center justify-center min-h-screen w-full"
      data-aos="fade-up"
      data-aos-delay="300"
    >
        <div className=" abt container mx-auto px-4 py-6  h-[400px] md:h-[200px]">
      {/* Hero Section */}
      <div className="absolute inset-0  bg-black/50 bg-opacity-80"></div>
      <div className="relative sm:w-full  h-[300px] sm:h-[100px] mx-auto">
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center">
          <h1 className=" relative text-xl sm:text-2xl md:text-xl font-bold mb-4 uppercase italic top-5 ">
            <TypedJS strings={categories} />
          </h1>
        </div>
      </div>
      
      </div>
      
      <div className="container mx-auto px-4 py-6 bg-black">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Step 1 */}
          <div
            className="flex flex-col items-center"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            {/* Image Section - Top on mobile and desktop */}
            <div className="mb-6 bg-white">
             <p>
             🌍 
             </p>
            </div>

            {/* Text Section - Below image */}
            <div className="text-center px-4">
              <Title highlightText="+100 Recruitments" mainText="Worldwide" />
              
              <p className="text-gray-300 text-lg md:text-xs mt-3">
              We’ve successfully placed over 100 professionals across the globe! Our extensive network ensures you find the right opportunity or hire, no matter where you are.
              </p>
            </div>

            {/* Divider - Visible on both mobile and desktop */}
            <div className="mt-10 w-full flex justify-center md:justify-end"></div>
          </div>

          {/* Step 2 */}
          <div
            className="flex flex-col items-center"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            {/* Image Section - Top on mobile and desktop */}
            <div className="mb-6">
                <p>
                ✅
                </p>
             
            </div>

            {/* Text Section - Below image */}
            <div className="text-center px-4">
              <Title highlightText="Certified" mainText="Recruitment Experts" />
              
              <p className="text-gray-300 text-lg md:text-xs mt-3">
              Our team of certified recruitment specialists brings years of experience to connect top talent with the best employers. Trust us to make the hiring process seamless and efficient.
              </p>
            </div>

            {/* Divider - Visible on both mobile and desktop */}
            <div className="mt-10 w-full flex justify-center md:justify-end"></div>
          </div>

          {/* Step 3 */}
          <div
            className="flex flex-col items-center"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            {/* Image Section - Top on mobile and desktop */}
            <div className="mb-6">
            <p>
            🚀  
            </p>
            </div>

            {/* Text Section - Below image */}
            <div className="text-center px-4">
              <Title highlightText="Fast &" mainText="Efficient Hiring" />
              
              <p className="text-gray-300 text-lg md:text-xs mt-3">
              We match the right candidates with the right roles in record time. Our streamlined process ensures quick turnarounds without compromising quality.
              </p>
            </div>
          </div>

          {/* Desktop connecting lines */}
          <div className="hidden md:block absolute top-1/2 left-1/3 w-1 h-16 border-r-2 border-white/30"></div>
          <div className="hidden md:block absolute top-1/2 left-2/3 w-1 h-16 border-r-2 border-white/30"></div>
        </div>
      </div>

      {/* Additional Section  */}
      <div
        className="relative bg-black/  w-full h-[450px] md:h-[200px] mx-auto flex justify-center items-center mt-8 mb-10"
        data-aos="fade-up"
        data-aos-delay="300"
      >
        <div className="w-full md:w-full sm:w-4/6 flex flex-col justify-center items-center p-10 md:p-2 text-center">
          <Title highlightText="Why Choose" mainText="E-Recruit " />

          <ul className="relative sm:list-disc sm:list-inside list-none  mt-4 text-gray-300 text-xl md:text-sm  sm:text-left left-0">
            <li>
              <em>
                Flexible Gifting – Choose any amount within the available range.{" "}
              </em>
            </li>
            <li>
              <em>
                Hassle-Free – No need to pick out individual items; let the
                recipient{" "}
              </em>
            </li>
            <li>
              <em>
                Instant Delivery – Your gift is sent digitally for quick and
                easy redemption.
              </em>
            </li>
            <li>
              <em>
                {" "}
                Supermarket Redemption – Can be used at multiple outlets for
                convenience.
              </em>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
