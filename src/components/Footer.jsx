import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { FaWhatsapp, FaInstagram, FaFacebookF  } from "react-icons/fa";
import { MdOutlineMessage } from "react-icons/md";
import { LiaLinkedin } from "react-icons/lia";
import { IoLocationOutline } from "react-icons/io5";
import { CiYoutube } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="w-full bg-[#1e1e1f] text-white font-light text-2xl overflow-x-hidden ">
      <div className="px-4 py-10">
        <div className="flex flex-col md:flex-row md:justify-between items-start gap-4">
          {/* Logo */}
          <div className="w-full md:w-1/6 flex justify-center md:justify-start mb-6 md:mb-0">
            <img
              className="h-auto w-48"
              src="https://images.unsplash.com/photo-1551263640-1c007852f616?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Emerald Logo"
            />
          </div>

          {/* Shop by Category */}
          <div className="w-full md:w-1/6 mb-6 md:mb-0 text-xs">
            <h4 className="text-sm font-bold mb-4">Quick Links</h4>
            <ul className=" space-y-1 text-center md:text-left">
              <li className="transform transition duration-300 hover:scale-95">
                <Link to="/" className="no-underline font-light hover:text-[#617583]">
                  Home
                </Link>
              </li>
              <li className="transform transition duration-300 hover:scale-95">
                <Link to="/about" className="no-underline font-light hover:text-[#617583]">
                  About Us
                </Link>
              </li>
              <li className="transform transition duration-300 hover:scale-95">
                <HashLink
                  to="/contact"
                  className="no-underline font-light hover:text-[#617583]"
                >
                  Contact
                </HashLink>
              </li>
              <li className="transform transition duration-300 hover:scale-95">
                <HashLink
                  to="/about#abt"
                  className="no-underline font-light hover:text-[#617583]"
                >
                  Jobs
                </HashLink>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="w-full md:w-1/6 mb-6 md:mb-0 text-xs">
            <h4 className="text-sm font-bold mb-4">Services</h4>
            <ul className=" space-y-1 text-center md:text-left">
              <li className="transform transition duration-300 hover:scale-95">
                <HashLink
                  to="/recruitment"
                  className="no-underline font-light hover:text-[#617583]"
                >
                  Recruitment
                </HashLink>
              </li>
              <li className="transform transition duration-300 hover:scale-95">
                <Link
                  to="/training"
                  className="no-underline font-light hover:text-[#617583]"
                >
                  Training
                </Link>
              </li>

              <li className="transform transition duration-300 hover:scale-95">
                <Link
                  to="/outsourcing"
                  className="no-underline font-light hover:text-[#617583]"
                >
                  Labour Outsourcing
                </Link>
              </li>
            </ul>
          </div>

          {/* Contacts */}
          <div className="w-full md:w-1/6 mb-6 md:mb-0 text-xs">
            <h4 className="text-sm font-bold mb-4">Contact</h4>
            <ul className="space-y-2 text-center md:text-left">
              {/* WhatsApp */}
              <li className="flex items-center gap-2 transform transition duration-300 hover:scale-95">
                <FaWhatsapp className="text-sm " />
                <p className="no-underline font-light hover:text-[#617583]">0711234564</p>
              </li>

              {/* Email */}
              <li className="flex items-center gap-2 transform transition duration-300 hover:scale-95">
                <MdOutlineMessage className="text-sm" />
                <p className="no-underline font-light hover:text-[#617583]">
                  info@icdl.ng
                </p>
              </li>

              {/* Location */}
              <li className="flex items-start gap-2 transform transition duration-300 hover:scale-95">
                <IoLocationOutline className=" text-lg mt-1" />
                <p className="no-underline text-xs font-light hover:text-[#617583]">
                   Avenue 19348-00202,
                  Nairobi Kenya
                </p>
              </li>
            </ul>
          </div>

          {/* Social Networks */}
          <div className="w-full md:w-1/6 mb-6 md:mb-0 text-xs">
            <h4 className="text-sm font-bold mb-4">Follow Us</h4>
            <ul className="space-y-2 text-center md:text-left ">
              
              <li className="flex items-center gap-2 transform transition duration-300 hover:scale-95">
                <FaWhatsapp className="text-sm" />
                <p className="no-underline font-light hover:text-[#617583]">Whatsapp</p>
              </li>
              <li className="flex items-center gap-2 transform transition duration-300 hover:scale-95">
                < FaFacebookF  className="text-sm " />
                <p className="no-underline font-light hover:text-[#617583]">Facebook</p>
              </li>
              <li className="flex items-center gap-2 transform transition duration-300 hover:scale-95">
                <FaXTwitter className="text-sm" />
                <p className="no-underline font-light hover:text-[#617583]">Twitter</p>
              </li>
              <li className="flex items-center gap-2 transform transition duration-300 hover:scale-95">
                <CiYoutube className="text-sm " />
                <p className="no-underline font-light hover:text-[#617583]">Youtube</p>
              </li>

              {/* Email */}
              <li className="flex items-center gap-2 transform transition duration-300 hover:scale-95">
                <LiaLinkedin className="text-sm " />
                <p className="no-underline font-light hover:text-[#617583]">
                  LinkedIn
                </p>
              </li>

              {/* Location */}
              <li className="flex items-start gap-2 transform transition duration-300 hover:scale-95">
                <FaInstagram  className="text-sm  mt-1" />
                <p className="no-underline font-light hover:text-[#617583]">
                  Instagram
                </p>
              </li>
            </ul>
          </div>

        
      </div>
      {/* Copyright */}
      <div className="mt-8 pt-4">
          <div className="flex flex-col md:flex-row justify-center items-center gap-4">
            <p className="text-xs text-gray-400">
              Copyright © All Rights Reserved
            </p>
            <p className="text-xs text-gray-400 transform transition duration-300 hover:scale-110">
              <HashLink
                to="/privacy-policy#pp"
                className="no-underline hover:text-[#352f2d]"
              >
                Privacy Policy
              </HashLink>
            </p>
            <p className="text-xs text-gray-400 transform transition duration-300 hover:scale-110">
              <Link
                to="/terms-of-service"
                className="no-underline hover:text-[#352f2d]"
              >
                Terms of Service
              </Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
