'use client';

import { useState, useEffect } from 'react';
import { getFavoritesFromStorage, getCarsList, Car } from '../services';
import CarCard from './Home/CarCard';
import Modal from './Home/Modal';
import BookingModal from './Home/BookingModal';
import Link from 'next/link';

const Favorites = () => {
  const [favorites, setFavorites] = useState<string[]>([]);
  const [favoriteCars, setFavoriteCars] = useState<Car[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedCar, setSelectedCar] = useState<Car | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const loadFavorites = async () => {
      try {
        setIsLoading(true);
        // Get favorites from localStorage
        const favoriteIds = getFavoritesFromStorage();
        setFavorites(favoriteIds);
        
        // Get all cars
        const { carLists } = await getCarsList();
        
        // Filter cars to only include favorites
        const favCars = carLists.filter(car => favoriteIds.includes(car.id));
        setFavoriteCars(favCars);
      } catch (error) {
        console.error('Error loading favorites:', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadFavorites();

    // Add event listener for storage changes (for cross-tab functionality)
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === 'favorites') {
        loadFavorites();
      }
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  const openModal = (car: Car) => {
    setSelectedCar(car);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedCar(null);
  };

  if (isLoading) {
    return (
      <div className="container mx-auto py-12 px-4">
        <h1 className="text-3xl font-bold mb-8">Your Favorites</h1>
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-8">Your Favorites</h1>
      
      {favoriteCars.length === 0 ? (
        <div className="text-center py-16">
          <h2 className="text-2xl font-semibold text-gray-600 mb-4">No favorites yet</h2>
          <p className="text-gray-500 mb-8">You haven't added any cars to your favorites list.</p>
          <Link href="/">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors">
              Explore Cars
            </button>
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {favoriteCars.map((car) => (
            <div key={car.id} onClick={() => openModal(car)}>
              <CarCard car={car} />
            </div>
          ))}
        </div>
      )}

      {/* Modal to display BookingModal */}
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        {selectedCar && <BookingModal car={selectedCar} />}
      </Modal>
    </div>
  );
};

export default Favorites; 