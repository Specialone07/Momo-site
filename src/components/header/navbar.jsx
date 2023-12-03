// Navbar.js
import React from 'react';
import logo from "./logo.png";
import { FaTiktok, FaInstagram, FaFacebook } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-red-400 h-20 px-10">
      <div className="container mx-auto flex justify-between items-center h-full">
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <img src={logo} alt="" className="h-10 w-12" />
          </Link>
        </div>
        <div className="flex space-x-8">
          <Link to="/aboutus" className="text-white flex items-center">
            About Us
          </Link>
          <Link to="/menu" className="text-white flex items-center">
            Our Menu
          </Link>
          <Link to="/allergy" className="text-white flex items-center">
            Allergy Advice
          </Link>
          <Link to="/services" className="text-white flex items-center">
            Our Services
          </Link>
        </div>
        <div className="flex space-x-5">
          <Link to="/tiktok" className="text-white flex items-center">
            <FaTiktok className="mr-2" />
          </Link>
          <Link to="/instagram" className="text-white flex items-center">
            <FaInstagram className="mr-2" />
          </Link>
          <Link to="/facebook" className="text-white flex items-center">
            <FaFacebook className="mr-2" />
          </Link>
          <Link to="/contact" className="text-white flex items-center">
            Contact Us
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
