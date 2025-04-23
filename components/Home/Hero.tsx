import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

function Hero() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-gray-50 to-blue-50 py-16 px-6 md:px-12">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute -top-20 -right-20 w-64 h-64 bg-blue-100 rounded-full blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="absolute -bottom-20 -left-20 w-64 h-64 bg-blue-200 rounded-full blur-3xl"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 items-center relative z-10">
        {/* Left Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-8"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-[36px] md:text-[56px] font-extrabold text-gray-800 leading-tight"
          >
            Premium Car Rental <br /> in Your City
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-[18px] md:text-[20px] text-gray-600 max-w-lg"
          >
            Book your dream car today and enjoy a seamless rental experience with our premium fleet.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-medium shadow-lg hover:bg-blue-700 transition-all duration-300"
            >
              Explore Now
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Right Section */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex justify-center mt-12 md:mt-0"
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
            className="relative"
          >
            <Image
              src="/hero.png"
              alt="hero"
              width={600}
              height={600}
              className="w-full max-w-lg md:max-w-xl object-cover rounded-2xl shadow-2xl"
            />
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="absolute -bottom-4 -right-4 bg-white p-4 rounded-xl shadow-lg"
            >
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-sm font-medium text-gray-700">Available 24/7</span>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default Hero;