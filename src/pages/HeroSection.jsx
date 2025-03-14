import React, { useEffect, useMemo, useState } from "react";
import imageone from "../assets/images/image1.jpg";

const CDLHeroSection = () => {
  const [currentServiceIndex, setCurrentServiceIndex] = useState(1); // Start with Human Resource Consultancy
  const services = useMemo(
    () => [
      {
        title: "Human Resource Consultancy",
        description:
          "Strategic HR solutions to optimize your workforce management",
      },
    ],
    []
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentServiceIndex((prevIndex) => (prevIndex + 1) % services.length);
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, [services]);

  return (
    <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-full bg-purple-800 ">
      <div className="flex flex-col lg:flex-row min-h-[35vh] items-center py-8">
        <div className="flex-1 flex flex-col justify-center max-w-2xl pt-4 lg:pt-0">
          <div className="animate-fade-in-up">
            <div className="inline-block px-4 py-2 rounded-full bg-purple-800/50 text-purple-100 text-sm mb-4">
              Welcome to Hacof
            </div>
            <h1 className="text-3xl lg:text-4xl font-bold text-white mb-3 leading-tight">
              Excellence in
              <br />
              <span className="text-purple-200 relative block h-[40px] overflow-hidden mt-2">
                {services.map((service, index) => (
                  <span
                    key={index}
                    className={`service-text absolute w-full ${
                      index === currentServiceIndex ? "service-visible" : ""
                    }`}
                  >
                    {service.title}
                  </span>
                ))}
              </span>
            </h1>
            <div className="relative h-[60px] overflow-hidden">
              {services.map((service, index) => (
                <p
                  key={index}
                  className={`service-description absolute text-lg text-purple-100 font-light ${
                    index === currentServiceIndex ? "description-visible" : ""
                  }`}
                >
                  {service.description}
                </p>
              ))}
            </div>
            <p className="text-base text-purple-200 mt-4 mb-6">
              Your trusted partner for over 20 years
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="/contact-us"
                className="px-6 py-3 bg-[#652C92] hover:bg-purple-600 text-white rounded-lg transition-colors duration-300 border-2 border-purple-300 inline-block"
              >
                Schedule A Call
              </a>
              <a
                href="/about-us"
                className="px-6 py-3 bg-transparent border-2 border-purple-300 text-white hover:bg-purple-800/30 rounded-lg transition-colors duration-300 inline-block"
              >
                Discover More
              </a>
            </div>
          </div>
        </div>
        <div className="hidden lg:block flex-1 relative h-full">
          <div className="relative h-[300px] w-full max-w-[400px] ml-auto">
            <div className="absolute top-[-20px] right-[-20px] w-24 h-24 bg-white rounded-full flex items-center justify-center p-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-[#652C92]">20+</div>
                <div className="text-xs text-purple-900">
                  YEARS OF EXCELLENCE
                </div>
              </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/20 to-transparent rounded-lg"></div>
            <img
              src={imageone}
              alt="Professional Training Team"
              className="w-full h-full object-cover object-center rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CDLHeroSection;
