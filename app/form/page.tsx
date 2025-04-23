"use client";

import React from 'react';
import Form from '../../components/Form';

// Mock car data - you should replace this with actual car data from your application
const mockCar = {
  id: '1',
  name: 'Sample Car'
};

export default function FormPage() {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-2xl mx-auto py-8 px-4">
        <h1 className="text-3xl font-bold mb-8 text-center">Book Your Car</h1>
        <div className="bg-white rounded-lg shadow-lg p-6">
          <Form car={mockCar} />
        </div>
      </div>
    </div>
  );
} 