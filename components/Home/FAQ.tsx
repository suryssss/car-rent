"use client";

import React, { useState } from 'react';
import { BsChevronDown, BsChevronUp } from 'react-icons/bs';

type FAQItemProps = {
  question: string;
  answer: string;
};

const FAQItem = ({ question, answer }: FAQItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 py-4">
      <button
        className="flex justify-between items-center w-full text-left focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-lg font-medium text-gray-800">{question}</h3>
        <span className="ml-6 flex-shrink-0">
          {isOpen ? (
            <BsChevronUp className="h-5 w-5 text-blue-500" />
          ) : (
            <BsChevronDown className="h-5 w-5 text-gray-500" />
          )}
        </span>
      </button>
      {isOpen && (
        <div 
          className="mt-3 text-gray-600 overflow-hidden transition-all duration-300"
          style={{ maxHeight: isOpen ? '500px' : '0' }}  
        >
          <p className="leading-relaxed">{answer}</p>
        </div>
      )}
    </div>
  );
};

const FAQ = () => {
  const faqs = [
    {
      question: "How do I book a car with DRIFTLY?",
      answer: "Booking with DRIFTLY is simple! Browse our selection of vehicles, choose the one that meets your needs, select your pickup and drop-off dates, and complete the reservation process. You'll receive an immediate confirmation email with all your booking details."
    },
    {
      question: "What documents do I need to rent a car?",
      answer: "You'll need a valid driver's license, a credit card in your name for the security deposit, and a secondary form of ID (such as a passport or ID card). International customers may require additional documentation."
    },
    {
      question: "Can I modify or cancel my reservation?",
      answer: "Yes, you can modify or cancel your reservation through your account dashboard or by contacting our customer service team. Please note that changes may be subject to availability, and cancellations are subject to our cancellation policy based on how far in advance you cancel."
    },
    {
      question: "Is there a minimum rental period?",
      answer: "Our standard minimum rental period is 24 hours. However, we offer flexible solutions including hourly rentals in select locations for your convenience. Contact our customer service for specific location details."
    },
    {
      question: "Do you offer insurance coverage?",
      answer: "Yes, we offer various insurance options to protect you during your rental period. Basic coverage is included in all rentals, and additional coverage options are available at the time of booking or pickup."
    },
    {
      question: "What happens if I return the car late?",
      answer: "Late returns may incur additional charges. We provide a grace period of 30 minutes, after which you may be charged for an additional day. Please contact our customer service if you anticipate a late return."
    },
  ];

  return (
    <div className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Frequently Asked Questions</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
          <p className="text-gray-600 mt-6">
            Get quick answers to your most common questions about our services
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
          <div className="space-y-1">
            {faqs.map((faq, index) => (
              <FAQItem key={index} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
        
        <div className="mt-10 text-center">
          <p className="text-gray-600 mb-4">Still have questions?</p>
          <a 
            href="/contact" 
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
          >
            Contact Our Support Team
          </a>
        </div>
      </div>
    </div>
  );
};

export default FAQ;