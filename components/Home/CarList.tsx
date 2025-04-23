// components/CarsList.tsx
import { useState, useEffect } from 'react';
import CarCard from './CarCard';
import CarSkeleton from './CarSkeleton';
import Modal from './Modal';  // Import Modal component
import BookingModal from './BookingModal';  // Import BookingModal component

const CarsList = ({ carsList }: any) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [selectedCar, setSelectedCar] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (carsList.length > 0) {
      setIsLoaded(true);
    }
  }, [carsList]);

  const openModal = (car: any) => {
    setSelectedCar(car);  // Set the selected car
    setIsModalOpen(true);  // Open the modal
  };

  const closeModal = () => {
    setIsModalOpen(false);  // Close the modal
    setSelectedCar(null);  // Clear selected car
  };

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
        {!isLoaded
          ? [1, 2, 3, 4, 5].map((item) => <CarSkeleton key={item} />)
          : carsList.map((car: any, index: number) => (
              <div key={`${car.id}-${index}`} onClick={() => openModal(car)}>
                <CarCard car={car} />
              </div>
            ))}
      </div>

      {/* Modal to display BookingModal */}
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        {selectedCar && <BookingModal car={selectedCar} />}
      </Modal>
    </>
  );
};

export default CarsList;
