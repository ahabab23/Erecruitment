import React from "react";
import logo from "../assets/images/logo.png"; // Adjust extension if needed

const Navbar = () => {
  return (
    <nav className="bg-white shadow-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between ">
          <div className="flex items-center">
            <div className="flex-shrink-0 mr-6">
              <a className="flex items-center" href="/">
                <img src={logo} alt="Logo" className="h-12 w-auto" />
              </a>
            </div>
            <div className="flex items-center space-x-4">
              <a
                className="nav-link text-purple-700 hover:text-purple-500 "
                href="/"
              >
                Home
              </a>
              <a
                className="nav-link text-purple-700 hover:text-purple-500 -sm "
                href="/about-us"
              >
                About Us
              </a>
              <a
                className="nav-link text-purple-700 hover:text-purple-500 "
                href="/contact-us"
              >
                Contact Us
              </a>
            </div>
          </div>
          <div className="flex items-center space-x-6">
            <div className="hidden md:flex items-center">
              <a
                href="/jobs"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2.5 text-sm font-semibold text-white bg-[#632A91] hover:bg-[#4e2170] rounded-md transition-colors"
              >
                Find a Job
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
