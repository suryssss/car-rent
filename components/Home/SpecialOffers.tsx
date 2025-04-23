import React from 'react';
import { BsCalendar, BsCreditCard, BsStars } from 'react-icons/bs';
import { FaArrowRight } from 'react-icons/fa';

const SpecialOffers = () => {
  const offers = [
    {
      id: 1,
      title: "Weekend Getaway",
      description: "Enjoy 25% off on weekend rentals. Perfect for your short trips and adventures.",
      icon: <BsCalendar className="text-3xl" />,
      color: "from-blue-500 to-blue-600",
      gradient: "bg-gradient-to-r",
      buttonText: "Book Now"
    },
    {
      id: 2,
      title: "Premium Membership",
      description: "Join our premium membership program and get exclusive benefits, upgrades, and priority service.",
      icon: <BsStars className="text-3xl" />,
      color: "from-purple-500 to-indigo-600",
      gradient: "bg-gradient-to-r",
      buttonText: "Join Now"
    },
    {
      id: 3,
      title: "Business Package",
      description: "Special corporate rates for business travelers. Includes Wi-Fi and GPS navigation.",
      icon: <BsCreditCard className="text-3xl" />,
      color: "from-teal-500 to-emerald-600",
      gradient: "bg-gradient-to-r",
      buttonText: "Learn More"
    }
  ];

  return (
    <div className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Limited Time</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-2">Special Offers</h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Take advantage of our exclusive deals and save on your next car rental
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          {offers.map((offer) => (
            <div 
              key={offer.id} 
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1"
            >
              <div className={`${offer.gradient} ${offer.color} p-6 flex items-center justify-center text-white`}>
                <div className="bg-white/20 rounded-full p-4">
                  {offer.icon}
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-bold text-xl text-gray-800 mb-3">{offer.title}</h3>
                <p className="text-gray-600 mb-6">{offer.description}</p>
                <a 
                  href="/form" 
                  className="flex items-center font-medium text-blue-600 hover:text-blue-700 transition-colors group"
                >
                  {offer.buttonText}
                  <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block bg-blue-50 px-6 py-4 rounded-lg">
            <span className="text-blue-800 font-medium">Use code <span className="font-bold">DRIFTLY25</span> at checkout for an extra 5% off on your first booking!</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecialOffers; 