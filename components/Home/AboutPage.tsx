import React from 'react';
import { BsCheckCircle, BsPeople, BsClock, BsArrowRight } from 'react-icons/bs';

const AboutPage: React.FC = () => {
  return (
    <div className="bg-gradient-to-b from-white to-gray-50 min-h-screen overflow-hidden">
      {/* Hero Section with Animation */}
      <div className="relative bg-gradient-to-r from-blue-600 to-blue-800 py-24 text-white text-center overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 relative z-10 animate-fade-in">
          <h1 className="text-5xl font-bold mb-6 animate-slide-up">About DRIFTLY</h1>
          <p className="text-xl leading-relaxed animate-slide-up-delay">
            Streamlining vehicle rental services with an effortless booking process that saves you time and hassle.
          </p>
        </div>
        {/* Background Shapes for Visual Interest */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10">
          <div className="absolute w-96 h-96 rounded-full bg-white -top-20 -left-20"></div>
          <div className="absolute w-80 h-80 rounded-full bg-white bottom-0 right-10"></div>
          <div className="absolute w-60 h-60 rounded-full bg-white top-10 right-1/4"></div>
        </div>
      </div>
      
      {/* Mission Section - Enhanced */}
      <div className="max-w-6xl mx-auto px-4 py-20">
        <div className="bg-white rounded-2xl shadow-xl p-10 transform hover:scale-[1.01] transition-transform duration-300">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center relative">
            Our Mission
            <span className="block w-20 h-1 bg-blue-500 mx-auto mt-4"></span>
          </h2>
          <p className="text-gray-600 text-center text-lg max-w-3xl mx-auto leading-relaxed">
            At DRIFTLY, we aim to revolutionize the vehicle rental industry by providing a seamless, user-friendly platform
            that connects customers with the perfect vehicle for their needs. Our mission is to make renting a vehicle as
            simple and efficient as possible, while ensuring exceptional customer satisfaction at every step.
          </p>
        </div>
      </div>

      {/* Why Choose Us Section - With Hover Effects */}
      <div className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center relative">
            Why Choose Us?
            <span className="block w-20 h-1 bg-blue-500 mx-auto mt-4"></span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="flex flex-col items-center text-center p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
              <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                <BsCheckCircle className="text-3xl" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Effortless Booking</h3>
              <p className="text-gray-600 leading-relaxed">
                With just a few clicks, find and book the perfect vehicle tailored to your needs. Our intuitive interface makes the entire process smooth and hassle-free.
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
              <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                <BsPeople className="text-3xl" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Customer-Centric</h3>
              <p className="text-gray-600 leading-relaxed">
                We prioritize your satisfaction, offering 24/7 support and a hassle-free experience. Our dedicated team is always ready to assist you with any queries.
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
              <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                <BsClock className="text-3xl" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Time-Saving</h3>
              <p className="text-gray-600 leading-relaxed">
                Our platform is designed to save you time, making vehicle rental quick and efficient. Skip the long queues and paperwork with our streamlined digital process.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section - Enhanced */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 py-24 text-white text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10">
          <div className="absolute w-96 h-96 rounded-full bg-white top-20 -right-20"></div>
          <div className="absolute w-80 h-80 rounded-full bg-white -bottom-20 left-10"></div>
        </div>
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <h2 className="text-4xl font-bold mb-6 animate-pulse">Ready to Get Started?</h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
            Join thousands of satisfied customers and experience the convenience of DRIFTLY today. Your journey to effortless vehicle rental starts here.
          </p>
          <button className="px-10 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-300 flex items-center mx-auto group">
            Explore Vehicles
            <BsArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div>
      </div>

      {/* Add animation styles */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes slideUp {
          from { transform: translateY(20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        
        .animate-fade-in {
          animation: fadeIn 1s ease-out forwards;
        }
        
        .animate-slide-up {
          animation: slideUp 0.8s ease-out forwards;
        }
        
        .animate-slide-up-delay {
          animation: slideUp 0.8s ease-out 0.2s forwards;
          opacity: 0;
        }
        
        .animate-pulse {
          animation: pulse 2s infinite;
        }
        
        @keyframes pulse {
          0% { transform: scale(1); }
          50% { transform: scale(1.05); }
          100% { transform: scale(1); }
        }
      `}</style>
    </div>
  );
}

export default AboutPage;
