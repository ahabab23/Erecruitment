import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaUserCircle, FaBars, FaTimes } from "react-icons/fa"; // Import icons

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("token"));
  const profileRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (profileRef.current && !profileRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    navigate("/login");
  };

  return (
    <nav className={`fixed  rounded-b-lg w-full  z-50 transition-all duration-300 ${isScrolled ? 'bg-white/50 shadow-md' : 'bg-transparent'}`}>
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 sm:text-xl md:text-xs">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className={`text-2xl font-bold transition-colors duration-300 ${isScrolled ? 'text-purple-600' : 'text-white'}`}>
            <h3 className='font-light text-2xl text-white'>E-Recruitment</h3>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 text-white ">
            <Link to="/about" className={`${isScrolled ? 'text-gray-300' : 'text-white'} hover:text-white  transition-colors duration-300`}>
              About Us
            </Link>

            {isLoggedIn ? (
              <div className="relative" ref={profileRef}>
                {/* Profile Icon (Click to Toggle Dropdown) */}
                <FaUserCircle 
                  className="text-3xl cursor-pointer text-white hover:text-purple-600"
                  onClick={() => setIsDropdownOpen((prev) => !prev)}
                />
                
                {/* Profile Dropdown */}
                {isDropdownOpen && (
                  <div className="absolute bg-white shadow-md right-0 mt-2 w-32 rounded-md text-left">
                    <Link to="/profile" className="block px-4 py-2 text-gray-700 hover:bg-gray-200 hover:rounded-md">Profile</Link>
                    <button 
                      onClick={handleLogout} 
                      className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-200 hover:rounded-md">
                      Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <Link to="/login" className={`px-4 py-2 rounded-lg transition-colors duration-300 ${isScrolled ? 'bg-purple-600 text-white hover:bg-purple-700' : 'bg-white text-purple-600 hover:bg-gray-100'}`}>
                Login
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`p-2 rounded-md ${isScrolled ? 'text-gray-800' : 'text-white'} focus:outline-none`}
            >
              {isMenuOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div ref={menuRef} className="md:hidden bg-white shadow-md absolute w-full left-0 top-16 py-4">
            <div className="flex flex-col items-center space-y-4">
              <Link to="/create#top" className="text-gray-800 hover:text-purple-600" onClick={() => setIsMenuOpen(false)}>
                Create Card
              </Link>

              {isLoggedIn ? (
                <>
                  <Link to="/profile" className="text-gray-800 hover:text-purple-600" onClick={() => setIsMenuOpen(false)}>
                    Profile
                  </Link>
                  <button onClick={handleLogout} className="text-gray-800 hover:text-red-600">
                    Logout
                  </button>
                </>
              ) : (
                <Link to="/login" className="text-gray-800 hover:text-purple-600" onClick={() => setIsMenuOpen(false)}>
                  Login
                </Link>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
