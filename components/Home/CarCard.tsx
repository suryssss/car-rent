import Image from "next/image";
import { FaGasPump, FaStar, FaRegStar, FaHeart, FaRegHeart } from "react-icons/fa";
import { MdAirlineSeatReclineNormal } from "react-icons/md";
import { PiSteeringWheelFill } from "react-icons/pi";
import { Car, isFavorite, addToFavorites, removeFromFavorites } from "../../services"; // Ensure this path is correct
import { useState, useEffect } from "react";

// Define the type for the props
interface CarCardProps {
  car: Car;
  onClick?: () => void;
}

const CarCard = ({ car, onClick }: CarCardProps) => {
  const [isFav, setIsFav] = useState(false);

  // Initialize favorite state
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsFav(isFavorite(car.id));
    }
  }, [car.id]);

  // Handle favorite toggle
  const handleFavoriteClick = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent triggering the card click
    if (isFav) {
      removeFromFavorites(car.id);
    } else {
      addToFavorites(car.id);
    }
    setIsFav(!isFav);
  };

  // Render stars for ratings
  const renderStars = (rating: number) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<FaStar key={i} className="text-yellow-400" />);
      } else {
        stars.push(<FaRegStar key={i} className="text-yellow-400" />);
      }
    }
    return stars;
  };

  return (
    <div 
      className="group bg-white p-4 sm:p-6 rounded-3xl m-1 sm:m-5 border border-gray-200 hover:shadow-xl hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer"
      onClick={onClick}
    >
      {/* Favorite icon */}
      <div className="absolute top-3 right-3 z-10">
        <button 
          onClick={handleFavoriteClick} 
          className="bg-white p-2 rounded-full shadow-md hover:shadow-lg transition-shadow"
        >
          {isFav ? (
            <FaHeart className="text-red-500 text-xl" />
          ) : (
            <FaRegHeart className="text-gray-400 hover:text-red-500 text-xl" />
          )}
        </button>
      </div>

      {/* Car Name and Price */}
      <h2 className="text-[20px] font-medium mb-2">{car?.name}</h2>
      <h2 className="text-[24px] font-bold mb-2">
        <span className="text-[12px] font-light">₹</span>
        {car?.price}
        <span className="text-[12px] font-light">/day</span>
      </h2>

      {/* Car Rating */}
      {car.avgRating && (
        <div className="flex items-center mb-2 mt-1">
          <div className="flex mr-1">
            {renderStars(Math.round(car.avgRating))}
          </div>
          <span className="text-gray-500 text-sm">{car.avgRating}</span>
        </div>
      )}

      {/* Car Image */}
      <div className="flex justify-center mb-3">
        <Image
          src={car?.image?.url}
          alt={car?.name}
          width={220}
          height={200}
          className="w-[250px] h-[150px] object-contain rounded-md transition-transform duration-300 ease-in-out group-hover:scale-110"
        />
      </div>

      {/* Car Details (Car Type, Seats, Mileage) */}
      <div className="flex justify-around opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="text-center text-gray-500">
          <PiSteeringWheelFill className="w-full text-[22px] mb-2" />
          <h2 className="text-[14px] font-light">{car?.carType}</h2>
        </div>
        <div className="text-center text-gray-500">
          <MdAirlineSeatReclineNormal className="w-full text-[22px] mb-2" />
          <h2 className="text-[14px] font-light">4 Seat</h2>
        </div>
        <div className="text-center text-gray-500">
          <FaGasPump className="w-full text-[22px] mb-2" />
          <h2 className="text-[14px] font-light">{car?.carAvg} KPL</h2>
        </div>
      </div>

      {/* Rent Now Button */}
      <button className="hidden group-hover:flex bg-gradient-to-r from-blue-400 to-blue-700 p-2 rounded-lg text-white w-full justify-between items-center transition-all duration-300 ease-in-out">
        Rent Now
        <span className="bg-blue-400 p-1 rounded-md">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-4 h-4 text-white"
          >
            <path
              fillRule="evenodd"
              d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z"
              clipRule="evenodd"
            />
          </svg>
        </span>
      </button>
    </div>
  );
};

export default CarCard;