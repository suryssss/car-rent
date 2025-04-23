import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { BsEnvelope, BsGeoAlt, BsTelephone } from "react-icons/bs";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-gray-800 to-gray-900 text-white pt-16 pb-8 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden opacity-5 pointer-events-none">
        <div className="absolute -right-20 -top-20 w-64 h-64 rounded-full bg-blue-500"></div>
        <div className="absolute left-1/4 bottom-0 w-80 h-80 rounded-full bg-blue-600"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Top Section with Logo and Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-10">
          {/* About & Logo Section */}
          <div className="md:col-span-2 space-y-6">
            <div className="flex items-center space-x-2 mb-4">
              <div className="relative w-12 h-12 bg-white rounded-full overflow-hidden shadow-md">
                <Image
                  src="/logo.png"
                  alt="DRIFTLY Logo"
                  fill
                  className="object-contain p-1"
                />
              </div>
              <span className="text-2xl font-bold text-white">DRIFTLY</span>
            </div>
            <p className="text-gray-300 leading-relaxed">
              DRIFTLY is a premium vehicle rental platform that connects customers with the perfect vehicle for their needs, making the booking process simple and hassle-free.
            </p>
            <div className="pt-4">
              <h4 className="text-lg font-semibold mb-3 text-blue-300">Contact Us</h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors">
                  <BsGeoAlt className="text-blue-400" />
                  <span>123 Driving Street, Car City, CC 12345</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors">
                  <BsTelephone className="text-blue-400" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors">
                  <BsEnvelope className="text-blue-400" />
                  <span>info@driftly.com</span>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links Section */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold mb-6 relative inline-block">
              Quick Links
              <span className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-blue-500"></span>
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="/" className="text-gray-300 hover:text-blue-400 transition-colors duration-300 flex items-center">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2 inline-block"></span>
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="text-gray-300 hover:text-blue-400 transition-colors duration-300 flex items-center">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2 inline-block"></span>
                  About Us
                </a>
              </li>
              <li>
                <a href="/services" className="text-gray-300 hover:text-blue-400 transition-colors duration-300 flex items-center">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2 inline-block"></span>
                  Services
                </a>
              </li>
              <li>
                <a href="/form" className="text-gray-300 hover:text-blue-400 transition-colors duration-300 flex items-center">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2 inline-block"></span>
                  Book Now
                </a>
              </li>
              <li>
                <a href="/contact" className="text-gray-300 hover:text-blue-400 transition-colors duration-300 flex items-center">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2 inline-block"></span>
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media & Newsletter Section */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold mb-6 relative inline-block">
              Connect With Us
              <span className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-blue-500"></span>
            </h3>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center text-gray-300 hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:-translate-y-1">
                <FaFacebookF size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center text-gray-300 hover:bg-blue-500 hover:text-white transition-all duration-300 transform hover:-translate-y-1">
                <FaTwitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center text-gray-300 hover:bg-gradient-to-br from-purple-600 to-pink-500 hover:text-white transition-all duration-300 transform hover:-translate-y-1">
                <FaInstagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center text-gray-300 hover:bg-blue-700 hover:text-white transition-all duration-300 transform hover:-translate-y-1">
                <FaLinkedinIn size={18} />
              </a>
            </div>
            
            <div className="mt-8">
              <h4 className="text-lg font-semibold mb-3 text-blue-300">Subscribe to our Newsletter</h4>
              <div className="flex mt-2">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="px-4 py-2 bg-gray-700 text-white rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
                />
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-r-md transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom with Copyright */}
        <div className="border-t border-gray-700 pt-8 mt-8 text-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} DRIFTLY. All rights reserved.
          </p>
          <div className="flex justify-center space-x-6 mt-4 text-sm text-gray-500">
            <a href="/terms" className="hover:text-blue-400 transition-colors">Terms of Service</a>
            <a href="/privacy" className="hover:text-blue-400 transition-colors">Privacy Policy</a>
            <a href="/cookies" className="hover:text-blue-400 transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
