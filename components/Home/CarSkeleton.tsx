import React from "react";

/**
 * CarSkeleton
 * A placeholder skeleton for the CarCard component while data is loading.
 */
const CarSkeleton: React.FC = () => {
  return (
    <div className="group bg-white p-4 sm:p-6 rounded-3xl m-1 sm:m-5 border border-gray-200 animate-pulse">
      {/* Placeholder for Car Name */}
      <div className="h-5 bg-gray-200 rounded w-1/2 mb-2"></div>
      {/* Placeholder for Price */}
      <div className="h-6 bg-gray-200 rounded w-1/3 mb-4"></div>

      {/* Placeholder for Image */}
      <div className="w-full h-36 bg-gray-200 rounded-md mb-4"></div>

      {/* Placeholder for Details */}
      <div className="flex justify-around mb-4">
        <div className="h-4 bg-gray-200 rounded w-1/4"></div>
        <div className="h-4 bg-gray-200 rounded w-1/4"></div>
        <div className="h-4 bg-gray-200 rounded w-1/4"></div>
      </div>

      {/* Placeholder for Button */}
      <div className="h-8 bg-gray-200 rounded w-full"></div>
    </div>
  );
};

export default CarSkeleton;
