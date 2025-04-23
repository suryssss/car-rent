import React, { useState, useEffect } from 'react';
import { getStoreLocation } from '../services'; // adjust the path as needed
import type { CarLocation } from '../services'; // adjust the path as needed
import { useRouter } from 'next/navigation';

interface FormProps {
  car: { id: string; name: string }; // Adjust based on the structure of your 'car' prop
}

function Form({ car }: FormProps) {
  const router = useRouter();
  const [formData, setFormData] = useState({
    pickupLocation: '',
    pickupDate: '',
    pickupTime: '',
    dropoffDate: '',
    dropoffTime: '',
    contactNumber: '',
    username: '',
    email: '',
    sendNotifications: true,
    carId: { connect: { id: '' } }, // Initially empty ID
  });

  const [locations, setLocations] = useState<CarLocation[]>([]);

  // Fetch car locations on component mount
  useEffect(() => {
    const fetchLocations = async () => {
      try {
        const response = await getStoreLocation();
        console.log('Fetched locations:', response); // Checking fetched locations
        setLocations(response.carLocations);
      } catch (error) {
        console.error('Failed to fetch locations:', error);
      }
    };

    fetchLocations();
  }, []);

  // Set the carId when the car prop changes
  useEffect(() => {
    console.log('Car prop received:', car); // Log the car prop to ensure it's correct
    if (car && car.id) {
      setFormData((prevData) => ({
        ...prevData,
        carId: { connect: { id: car.id } },
      }));
    }
  }, [car]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target as HTMLInputElement;
    
    if (type === 'checkbox') {
      const { checked } = e.target as HTMLInputElement;
      setFormData((prevData) => ({
        ...prevData,
        [name]: checked,
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const scheduleReminders = (bookingData: any) => {
    // In a real application, this would call a backend API
    // Here we'll simulate by adding to localStorage
    
    if (!bookingData.email || !bookingData.sendNotifications) return;
    
    const pickupDate = new Date(bookingData.pickupDate);
    const now = new Date();
    
    // Calculate days until pickup
    const daysUntilPickup = Math.floor((pickupDate.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));
    
    // Store reminder information
    const reminders = JSON.parse(localStorage.getItem('reminders') || '[]');
    
    // Add reminders (1 day before, 3 days before)
    if (daysUntilPickup > 1) {
      reminders.push({
        email: bookingData.email,
        carName: bookingData.carName,
        pickupDate: bookingData.pickupDate,
        pickupLocation: bookingData.pickupLocation,
        sendDate: new Date(pickupDate.getTime() - 24 * 60 * 60 * 1000).toISOString(),
        sent: false,
        type: '1-day'
      });
    }
    
    if (daysUntilPickup > 3) {
      reminders.push({
        email: bookingData.email,
        carName: bookingData.carName,
        pickupDate: bookingData.pickupDate,
        pickupLocation: bookingData.pickupLocation,
        sendDate: new Date(pickupDate.getTime() - 3 * 24 * 60 * 60 * 1000).toISOString(),
        sent: false,
        type: '3-day'
      });
    }
    
    localStorage.setItem('reminders', JSON.stringify(reminders));
    
    // Immediately send booking confirmation email (simulated)
    const notifications = JSON.parse(localStorage.getItem('sentNotifications') || '[]');
    notifications.push({
      email: bookingData.email,
      subject: `Booking Confirmation - ${bookingData.carName}`,
      message: `Thank you for booking ${bookingData.carName}. Your pickup is scheduled for ${new Date(bookingData.pickupDate).toLocaleDateString()} at ${bookingData.pickupLocation}.`,
      sentDate: new Date().toISOString(),
      type: 'confirmation'
    });
    
    localStorage.setItem('sentNotifications', JSON.stringify(notifications));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form Data Submitted:', formData);
    if (
      !formData.pickupLocation ||
      !formData.pickupDate ||
      !formData.contactNumber
    ) {
      alert('Please fill in all required fields.');
      return;
    }
    
    try {
      // Create a booking entry with timestamp and unique ID
      const bookingEntry = {
        ...formData,
        id: Date.now().toString(), // Use timestamp as ID
        bookingDate: new Date().toISOString(),
        carName: car?.name || 'Unknown Car',
      };

      // Get existing bookings from localStorage or create empty array
      const existingBookings = JSON.parse(localStorage.getItem('bookingHistory') || '[]');
      
      // Add new booking to the beginning of the array
      const updatedBookings = [bookingEntry, ...existingBookings];
      
      // Save updated bookings to localStorage
      localStorage.setItem('bookingHistory', JSON.stringify(updatedBookings));
      
      // Also save current booking separately for immediate access
      localStorage.setItem('currentBooking', JSON.stringify(bookingEntry));
      
      // Schedule email notifications and reminders
      if (formData.email && formData.sendNotifications) {
        scheduleReminders(bookingEntry);
      }
      
      // Navigate to confirmation page
      router.push('/confirmation');
    } catch (error) {
      console.error('Error saving form data:', error);
      alert('There was an error processing your request. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 sm:p-6">
      <div className="space-y-5">
        {/* PickUp Location */}
        <div className="flex flex-col">
          <label className="text-sm text-gray-500 mb-1">Pick-Up Location</label>
          <select
            name="pickupLocation"
            value={formData.pickupLocation}
            onChange={handleChange}
            className="select select-bordered rounded-lg bg-white text-gray-700"
            required
          >
            <option disabled value="">
              Choose a location
            </option>
            {locations.map((loc, idx) => (
              <option key={idx} value={loc.locationaddress}>
                {loc.locationaddress}
              </option>
            ))}
          </select>
        </div>

        {/* Remaining form fields */}
        <div className="flex flex-col">
          <label className="text-sm text-gray-500 mb-1">Pick-Up Date</label>
          <input
            type="date"
            name="pickupDate"
            value={formData.pickupDate}
            onChange={handleChange}
            className="input input-bordered rounded-lg text-gray-700"
            required
          />
        </div>

        <div className="flex flex-col">
          <label className="text-sm text-gray-500 mb-1">Pick-Up Time</label>
          <input
            type="time"
            name="pickupTime"
            value={formData.pickupTime}
            onChange={handleChange}
            className="input input-bordered rounded-lg text-gray-700"
          />
        </div>

        <div className="flex flex-col">
          <label className="text-sm text-gray-500 mb-1">Drop-Off Date</label>
          <input
            type="date"
            name="dropoffDate"
            value={formData.dropoffDate}
            onChange={handleChange}
            className="input input-bordered rounded-lg text-gray-700"
          />
        </div>

        <div className="flex flex-col">
          <label className="text-sm text-gray-500 mb-1">Drop-Off Time</label>
          <input
            type="time"
            name="dropoffTime"
            value={formData.dropoffTime}
            onChange={handleChange}
            className="input input-bordered rounded-lg text-gray-700"
          />
        </div>

        <div className="flex flex-col">
          <label className="text-sm text-gray-500 mb-1">Contact Number</label>
          <input
            type="text"
            name="contactNumber"
            value={formData.contactNumber}
            onChange={handleChange}
            className="input input-bordered rounded-lg text-gray-700"
            required
          />
        </div>

        {/* Email field for notifications */}
        <div className="flex flex-col">
          <label className="text-sm text-gray-500 mb-1">Email Address</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="input input-bordered rounded-lg text-gray-700"
            placeholder="For booking confirmation and reminders"
          />
        </div>

        {/* Notification preferences */}
        <div className="flex items-center">
          <input
            type="checkbox"
            name="sendNotifications"
            checked={formData.sendNotifications}
            onChange={handleChange}
            className="h-4 w-4 text-blue-600 rounded border-gray-300 mr-2"
          />
          <label className="text-sm text-gray-700">
            Send me booking confirmation and pickup reminders
          </label>
        </div>

        <div>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-500 to-blue-700 text-white p-3 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            Book Now
          </button>
        </div>
      </div>
    </form>
  );
}

export default Form;
