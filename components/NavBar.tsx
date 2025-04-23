import Image from "next/image";
import Link from "next/link";
import React from "react";
import ClientUserButton from './ClientUserButton';
import { FaHeart } from "react-icons/fa";

function NavBar() {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/">
            <Image
              src="/logo.png"
              alt="logo"
              width={50}
              height={50}
              className="cursor-pointer"
            />
          </Link>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex gap-8">
          <a
            href="#home"
            className="text-gray-600 hover:text-blue-500 transition-colors duration-300 font-medium"
          >
            Home
          </a>
          <a
            href="#services"
            className="text-gray-600 hover:text-blue-500 transition-colors duration-300 font-medium"
          >
            Services
          </a>
          <a
            href="#contact"
            className="text-gray-600 hover:text-blue-500 transition-colors duration-300 font-medium"
          >
            Contact Us
          </a>
        </div>

        {/* User Action Links */}
        <div className="flex items-center space-x-4">
          {/* Favorites */}
          <Link href="/favorites" className="text-gray-600 hover:text-pink-500 transition-colors">
            <div className="flex items-center">
              <FaHeart className="text-xl" />
              <span className="ml-1 hidden sm:inline">Favorites</span>
            </div>
          </Link>

          {/* Booking History */}
          <Link href="/confirmation?tab=history">
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors duration-300">
              Booking History
            </button>
          </Link>

          {/* User Button - Client-only rendering */}
          <div className="flex items-center">
            <ClientUserButton />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
