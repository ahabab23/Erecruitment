import React from "react";
import contact from "../assets/images/contact.jpg";

const BusinessTransformation = () => {
  return (
    <div className="w-full bg-gradient-to-br from-purple-50 to-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="space-y-3">
              <h1 className="text-3xl font-bold bg-gradient-to-r from-[#702DA4] to-purple-500 bg-clip-text text-transparent">
                Let's Transform Your Business Together
              </h1>
              <p className="text-gray-600">
                Connect with East Africa's leading HR solutions provider for
                top-tier talent and strategic solutions.
              </p>
            </div>

            {/* Features Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  icon: (
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                  ),
                  title: "Expert Talent Acquisition",
                  description:
                    "Access to top-tier candidates and recruitment solutions",
                },
                {
                  icon: (
                    <>
                      <circle cx="12" cy="12" r="10"></circle>
                      <circle cx="12" cy="12" r="6"></circle>
                      <circle cx="12" cy="12" r="2"></circle>
                    </>
                  ),
                  title: "Strategic HR Consulting",
                  description: "Data-driven strategies for HR excellence",
                },
                {
                  icon: (
                    <>
                      <path d="M3 3v16a2 2 0 0 0 2 2h16"></path>
                      <path d="M7 16h8"></path>
                      <path d="M7 11h12"></path>
                      <path d="M7 6h3"></path>
                    </>
                  ),
                  title: "Performance Enhancement",
                  description: "Specialized training and development programs",
                },
                {
                  icon: (
                    <>
                      <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                      <rect width="20" height="14" x="2" y="6" rx="2"></rect>
                    </>
                  ),
                  title: "End-to-End Solutions",
                  description: "Comprehensive HR management solutions",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-3 p-3 rounded-lg bg-white shadow-sm hover:shadow-md transition-all duration-300 hover:translate-x-1"
                >
                  <div className="p-1.5 bg-[#702DA4]/10 rounded-lg text-[#702DA4]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-4 h-4"
                    >
                      {item.icon}
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-sm text-gray-900">
                      {item.title}
                    </h3>
                    <p className="text-xs text-gray-600 mt-0.5">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Trust Indicators */}
            <div className="flex gap-4 text-xs text-gray-500">
              <span className="flex items-center gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-3 h-3 text-yellow-400"
                >
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
                Trusted by 500+ companies
              </span>
              <span className="flex items-center gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-3 h-3 text-[#702DA4]"
                >
                  <path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path>
                  <circle cx="12" cy="8" r="6"></circle>
                </svg>
                Industry leader since 2005
              </span>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative hidden lg:block">
            <div className="absolute inset-0 bg-[#702DA4]/10 rounded-2xl transform rotate-3"></div>
            <img
              src={contact}
              alt="Contact Us"
              className="relative w-full h-[300px] object-cover rounded-2xl shadow-lg transform -rotate-3 transition-transform hover:rotate-0 duration-500"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessTransformation;
