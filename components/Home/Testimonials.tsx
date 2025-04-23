"use client";

import React, { useState, useEffect } from 'react';
import { FaQuoteLeft, FaStar, FaUser } from 'react-icons/fa';

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Business Executive",
    image: "/testimonial1.jpg",
    content: "DRIFTLY transformed my business travel experience. Their premium vehicle selection and seamless booking process saved me countless hours. The customer service was exceptional from start to finish.",
    rating: 5
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Vacation Traveler",
    image: "/testimonial2.jpg",
    content: "Our family vacation was perfect thanks to DRIFTLY. The SUV we rented was immaculate, and the pickup/drop-off process was the smoothest I've ever experienced. Will definitely use again!",
    rating: 5
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Photographer",
    image: "/testimonial3.jpg",
    content: "As a professional photographer, I need reliable transportation to remote locations. DRIFTLY consistently provides me with well-maintained vehicles that perfectly suit my equipment needs.",
    rating: 4
  }
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  const [imageErrors, setImageErrors] = useState<Record<number, boolean>>({});

  // Auto-scroll testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleImageError = (id: number) => {
    setImageErrors(prev => ({
      ...prev,
      [id]: true
    }));
  };

  return (
    <div className="py-20 bg-gray-50 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">What Our Customers Say</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
          <p className="text-gray-600 mt-6 max-w-2xl mx-auto">
            Discover why thousands of travelers choose DRIFTLY for their car rental needs
          </p>
        </div>

        <div className="relative">
          {/* Testimonials Slider */}
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out" 
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="min-w-full px-4">
                  <div className="bg-white rounded-xl shadow-xl p-8 md:p-10 relative">
                    <FaQuoteLeft className="text-blue-100 text-6xl absolute top-6 left-6" />
                    <div className="flex flex-col md:flex-row gap-8 items-center relative z-10">
                      <div className="md:w-1/4 flex-shrink-0">
                        <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden mx-auto border-4 border-blue-50 shadow-md flex items-center justify-center bg-gray-100">
                          {!imageErrors[testimonial.id] ? (
                            <img 
                              src={testimonial.image} 
                              alt={testimonial.name}
                              className="w-full h-full object-cover"
                              onError={() => handleImageError(testimonial.id)}
                            />
                          ) : (
                            <div className="flex flex-col items-center justify-center w-full h-full bg-blue-50">
                              <FaUser className="text-blue-300 text-4xl" />
                              <div className="text-xs text-blue-400 mt-1 font-medium">DRIFTLY</div>
                            </div>
                          )}
                        </div>
                        <div className="text-center mt-4">
                          <h4 className="font-semibold text-lg text-gray-800">{testimonial.name}</h4>
                          <p className="text-gray-500 text-sm">{testimonial.role}</p>
                          <div className="flex justify-center mt-2">
                            {[...Array(5)].map((_, i) => (
                              <FaStar 
                                key={i} 
                                className={`${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'} mx-0.5`} 
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                      <div className="md:w-3/4">
                        <p className="text-gray-600 text-lg italic leading-relaxed">"{testimonial.content}"</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`w-3 h-3 mx-1 rounded-full ${
                  current === index ? 'bg-blue-500' : 'bg-gray-300'
                } transition-colors duration-300`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials; 