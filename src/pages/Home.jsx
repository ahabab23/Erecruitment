// eslint-disable-next-line no-unused-vars
import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "../components/Navbar";
import "../styles/Home.css";

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="relative   ">
      <Navbar />
      <div
        className=" flex flex-col items-center overflow-hidden p-4 relative top-20 md:top-14 pb-20 bg-transparent filter backdrop-blur-md rounded-lg"
        data-aos="fade-in"
        data-aos-delay="500"
      >
        {/* Welcome text */}
        <div className="relative top-0">
          <h1 className="text-4xl text-center md:text-3xl font-bold font-beau  bg-black bg-clip-text  mb-8 md:mb-4">
            Welcome To E-recruitment
          </h1>

          <p className="text-gray-300 max-w-6xl font-semibold text-center mb-12 text-2xl md:text-sm p-4">
            your trusted recruitment partner for data entry clerks and
            administrative professionals. Whether you are a job seeker looking
            for your next opportunity or an employer searching for top talent,
            we connect skilled individuals with the right organizations.
          </p>
        </div>

        {/* Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 w-full max-w-6xl p-6">
          {/* Chat Card */}
          <div className="bg-transparent filter backdrop-blur-md rounded-lg shadow-lg border border-white  transition-transform hover:scale-95">
            <div className="p-6">
              <h2 className="text-xl md:text-sm font-semibold bg-gradient-to-r from-pink-400 via-purple-300 to-purple-400 bg-clip-text text-transparent mb-3">
                Create Gift Card
              </h2>
              <p className="text-white mb-12 sm:mb-8 h-12 md:text-xs">
                Choose from a wide range of products, add a personal message,
                and we will take care of the rest.
              </p>
              <Link
                to="/create"
                className="bg-purple-800 hover:bg-white md:text-sm text-white hover:text-purple-700 font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-xl mb-16 transition-transform hover:scale-95"
              >
                Create
              </Link>
            </div>
          </div>

          {/* Schedule Card */}
          <div className="bg-transparent filter backdrop-blur-md rounded-lg shadow-lg border border-white  transition-transform hover:scale-95">
            <div className="p-6">
              <h2 className="text-xl md:text-sm font-semibold bg-gradient-to-r from-pink-400 via-purple-300 to-purple-400 bg-clip-text text-transparent mb-3">
                Gift A Friend
              </h2>
              <p className="text-white mb-8 h-12 md:text-xs">
                Schedule your gifts to be delivered to a friend or loved one on
                a specific date.
              </p>
              <Link
                to="/schedule"
                className="bg-purple-800 p-4 hover:bg-white md:text-sm text-white hover:text-purple-700 font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-xl mb-16 transition-transform hover:scale-95"
              >
                Schedule
              </Link>
            </div>
          </div>
        </div>

        {/* Get Started Button */}
        <Link
          to="/create"
          className="bg-purple-800 hover:bg-white md:text-sm  text-white hover:text-purple-700 font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-xl mb-16 transition-transform hover:scale-95"
        >
          Get Started
        </Link>
      </div>
    </div>
  );
}
