import React from 'react';
import { FaSearch, FaCalendarAlt, FaCar, FaCheckCircle } from 'react-icons/fa';

const HowItWorks = () => {
  const steps = [
    {
      id: 1,
      title: "Choose Your Vehicle",
      description: "Browse our extensive fleet of vehicles and select the one that fits your needs and budget perfectly.",
      icon: <FaSearch className="text-3xl" />
    },
    {
      id: 2,
      title: "Select Date & Location",
      description: "Pick your preferred pickup and drop-off dates, times, and locations from our extensive network.",
      icon: <FaCalendarAlt className="text-3xl" />
    },
    {
      id: 3,
      title: "Book & Confirm",
      description: "Complete your booking with our secure payment process and receive instant confirmation via email.",
      icon: <FaCheckCircle className="text-3xl" />
    },
    {
      id: 4,
      title: "Enjoy Your Ride",
      description: "Pick up your vehicle at the scheduled time and enjoy your journey with our well-maintained cars.",
      icon: <FaCar className="text-3xl" />
    }
  ];

  return (
    <div className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">How It Works</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
          <p className="text-gray-600 mt-6 max-w-2xl mx-auto">
            Renting a car with DRIFTLY is quick and hassle-free. Follow these simple steps to get on the road.
          </p>
        </div>

        <div className="relative">
          {/* Desktop Steps with Line Connection */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-gray-200 -translate-y-1/2 z-0"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => (
              <div 
                key={step.id} 
                className="flex flex-col items-center text-center"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="mb-6 relative">
                  <div className="w-20 h-20 rounded-full bg-blue-600 flex items-center justify-center text-white shadow-lg">
                    {step.icon}
                  </div>
                  <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold shadow-md">
                    {step.id}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <a 
            href="/form" 
            className="inline-flex items-center px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg"
          >
            Start Booking Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks; 