import React, { useState } from "react";
import mission from "../assets/images/mission.jpg";
import vision from "../assets/images/vision.jpg";

const MissionVisionSection = () => {
  const [activeTab, setActiveTab] = useState("vision");

  return (
    <div className="bg-white max-w-4xl mx-auto mb-16">
      {/* Toggle Buttons */}
      <div className="flex justify-center mb-8">
        <div className="inline-flex rounded-lg border border-[#662D92]/20 p-1 bg-white shadow-sm">
          <button
            onClick={() => setActiveTab("mission")}
            className={`px-8 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
              activeTab === "mission"
                ? "bg-[#662D92] text-white shadow-sm"
                : "text-[#662D92] hover:bg-purple-50"
            }`}
          >
            Mission
          </button>
          <button
            onClick={() => setActiveTab("vision")}
            className={`px-8 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
              activeTab === "vision"
                ? "bg-[#662D92] text-white shadow-sm"
                : "text-[#662D92] hover:bg-purple-50"
            }`}
          >
            Vision
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 border border-[#662D92]/10">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="w-full md:w-1/3 relative">
            <img
              src={activeTab === "vision" ? `${vision}` : `${mission}`}
              alt={activeTab}
              className="rounded-xl shadow-lg w-full aspect-square object-cover"
            />
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[#662D92] rounded-full opacity-10 z-0"></div>
          </div>

          <div className="w-full md:w-2/3">
            {activeTab === "vision" ? (
              <>
                <h2 className="text-3xl font-bold mb-4 text-[#662D92]">
                  Our Vision
                </h2>
                <div className="bg-purple-50/50 p-4 rounded-lg border-l-4 border-[#662D92] mb-4">
                  <p className="text-lg font-medium text-[#662D92] italic">
                    "To be the most trusted recruitment firm in Kenya, enabling
                    stakeholders across Africa to thrive by focusing on their
                    core business and improving society."
                  </p>
                </div>
                <p className="text-[#4A4A4A] text-sm leading-relaxed">
                  CDL aspires to become the most trusted partner enabling
                  stakeholders across Africa to thrive. This ambitious vision
                  encapsulates our desire to empower the organizations and
                  people we serve.
                </p>
              </>
            ) : (
              <>
                <h2 className="text-3xl font-bold mb-4 text-[#662D92]">
                  Our Mission
                </h2>
                <div className="bg-purple-50/50 p-4 rounded-lg border-l-4 border-[#662D92] mb-4">
                  <p className="text-lg font-medium text-[#662D92] italic">
                    "To provide innovative and efficient recruitment solutions
                    that connect the right talent with the right opportunities,
                    driving growth for businesses and individuals."
                  </p>
                </div>
                <p className="text-[#4A4A4A] text-sm leading-relaxed">
                  Our mission is to bridge the gap between employers and top
                  talent through innovative and customized recruitment
                  solutions, ensuring businesses and professionals achieve their
                  full potential.
                </p>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MissionVisionSection;
