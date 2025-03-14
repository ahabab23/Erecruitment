import React from "react";
import hero from "../assets/images/about-hero.jpg";

const AboutSection = () => {
  return (
    <section className="py-20 overflow-hidden bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center">
          {/* Left Content */}
          <div className="w-full lg:w-6/12 px-4 mb-12 lg:mb-0">
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-[#662D92]/10 rounded-full"></div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#C9C9C9]/20 rounded-full"></div>
              <div className="relative z-10">
                <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-[#662D92] leading-tight">
                  Leading Recruitment & HR Solutions Provider
                </h1>
                <p className="text-xl text-gray-700 leading-relaxed max-w-xl">
                  Hacof Limited stands at the forefront of Kenya's recruitment
                  landscape, delivering exceptional talent acquisition,
                  consulting, and corporate training solutions that transform
                  businesses.
                </p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="w-full lg:w-6/12 px-4">
            <div className="relative">
              <div className="absolute inset-0 bg-[#662D92] transform rotate-3 rounded-2xl opacity-10"></div>
              <div className="absolute inset-0 bg-[#C9C9C9] transform -rotate-3 rounded-2xl opacity-10"></div>
              <img
                src={hero}
                alt="CDL Office"
                className="relative rounded-2xl shadow-lg w-full transform hover:scale-[1.02] transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
