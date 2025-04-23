"use client";

import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';

interface BookingEntry {
  id: string;
  bookingDate: string;
  pickupLocation: string;
  pickupDate: string;
  pickupTime?: string;
  dropoffDate?: string;
  dropoffTime?: string;
  contactNumber: string;
  username?: string;
  carName?: string;
  email?: string;
  sendNotifications?: boolean;
  [key: string]: any; // Allow for additional properties
}

interface NotificationEntry {
  email: string;
  subject: string;
  message: string;
  sentDate: string;
  type: string;
}

const ConfirmationPage = () => {
  const searchParams = useSearchParams();
  const tabParam = searchParams ? searchParams.get('tab') : null;
  
  const [currentBooking, setCurrentBooking] = useState<BookingEntry | null>(null);
  const [bookingHistory, setBookingHistory] = useState<BookingEntry[]>([]);
  const [notifications, setNotifications] = useState<NotificationEntry[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<'current' | 'history' | 'notifications'>(
    tabParam === 'history' ? 'history' : (tabParam === 'notifications' ? 'notifications' : 'current')
  );
  const [isMounted, setIsMounted] = useState(false);

  // Set mounted flag after component mounts
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Only access localStorage after component has mounted on the client
  useEffect(() => {
    if (!isMounted) return;

    // Get data from localStorage with error handling
    try {
      // Get current booking
      const currentBookingData = localStorage.getItem('currentBooking');
      if (currentBookingData) {
        setCurrentBooking(JSON.parse(currentBookingData));
      }

      // Get booking history
      const historyData = localStorage.getItem('bookingHistory');
      if (historyData) {
        setBookingHistory(JSON.parse(historyData));
      }

      // Get notifications
      const notificationsData = localStorage.getItem('sentNotifications');
      if (notificationsData) {
        setNotifications(JSON.parse(notificationsData));
      }
    } catch (error) {
      console.error('Error retrieving booking data:', error);
    } finally {
      setIsLoading(false);
    }
  }, [isMounted]);

  // Update active tab when URL parameter changes
  useEffect(() => {
    if (tabParam === 'history') {
      setActiveTab('history');
    } else if (tabParam === 'notifications') {
      setActiveTab('notifications');
    } else if (tabParam === 'current') {
      setActiveTab('current');
    }
  }, [tabParam]);

  // Format date for display
  const formatDate = (dateString: string) => {
    try {
      return dateString ? new Date(dateString).toLocaleDateString('en-US') : 'Not specified';
    } catch (e) {
      return dateString || 'Not specified';
    }
  };

  // Format datetime for display
  const formatDateTime = (dateString: string) => {
    try {
      return dateString ? new Date(dateString).toLocaleString('en-US') : 'Not specified';
    } catch (e) {
      return dateString || 'Not specified';
    }
  };

  if (!isMounted) {
    return (
      <div className="p-6 text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
        <p className="mt-4 text-gray-600">Loading...</p>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="p-6 text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
        <p className="mt-4 text-gray-600">Loading your booking details...</p>
      </div>
    );
  }

  if (!currentBooking && bookingHistory.length === 0) {
    return (
      <div className="p-6 text-center">
        <h1 className="text-2xl font-bold text-red-600">No Booking Information Found</h1>
        <p className="mt-4 text-gray-600">
          We couldn't find any booking details. Please try submitting the form again.
        </p>
        <a 
          href="/form" 
          className="mt-6 inline-block px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
        >
          Go to Booking Form
        </a>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-2xl font-bold text-center mb-6">Your Bookings</h1>

      {/* Tab Navigation */}
      <div className="flex flex-wrap border-b border-gray-200 mb-6">
        <button
          className={`py-3 px-4 font-medium ${
            activeTab === 'current'
              ? 'text-blue-600 border-b-2 border-blue-600'
              : 'text-gray-500 hover:text-gray-700'
          }`}
          onClick={() => setActiveTab('current')}
        >
          Current Booking
        </button>
        <button
          className={`py-3 px-4 font-medium ${
            activeTab === 'history'
              ? 'text-blue-600 border-b-2 border-blue-600'
              : 'text-gray-500 hover:text-gray-700'
          }`}
          onClick={() => setActiveTab('history')}
        >
          Booking History ({bookingHistory.length})
        </button>
        <button
          className={`py-3 px-4 font-medium ${
            activeTab === 'notifications'
              ? 'text-blue-600 border-b-2 border-blue-600'
              : 'text-gray-500 hover:text-gray-700'
          }`}
          onClick={() => setActiveTab('notifications')}
        >
          Notifications ({notifications.length})
        </button>
      </div>

      {/* Current Booking */}
      {activeTab === 'current' && currentBooking && (
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="mb-6 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-xl text-green-600 font-semibold">Your booking has been confirmed!</h2>
            <p className="text-gray-600 mt-2">Thank you for choosing DRIFTLY for your car rental needs.</p>
            {currentBooking.bookingDate && (
              <p className="text-sm text-gray-500 mt-2">Booked on: {formatDateTime(currentBooking.bookingDate)}</p>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div>
              <h3 className="font-semibold text-gray-800 mb-3 text-lg">Booking Details</h3>
              <div className="bg-gray-50 p-4 rounded-lg">
                {currentBooking.carName && (
                  <p className="mb-2"><span className="font-medium">Vehicle:</span> {currentBooking.carName}</p>
                )}
                <p className="mb-2"><span className="font-medium">Pickup Location:</span> {currentBooking.pickupLocation}</p>
                <p className="mb-2"><span className="font-medium">Pickup Date:</span> {formatDate(currentBooking.pickupDate)}</p>
                <p className="mb-2"><span className="font-medium">Pickup Time:</span> {currentBooking.pickupTime || 'Not specified'}</p>
                <p className="mb-2"><span className="font-medium">Dropoff Date:</span> {currentBooking.dropoffDate ? formatDate(currentBooking.dropoffDate) : 'Not specified'}</p>
                <p className="mb-2"><span className="font-medium">Dropoff Time:</span> {currentBooking.dropoffTime || 'Not specified'}</p>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold text-gray-800 mb-3 text-lg">Contact Information</h3>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="mb-2"><span className="font-medium">Contact Number:</span> {currentBooking.contactNumber}</p>
                {currentBooking.username && <p className="mb-2"><span className="font-medium">Username:</span> {currentBooking.username}</p>}
                {currentBooking.email && <p className="mb-2"><span className="font-medium">Email:</span> {currentBooking.email}</p>}
                
                {currentBooking.email && currentBooking.sendNotifications && (
                  <div className="mt-4 p-3 bg-blue-50 rounded-lg">
                    <p className="text-blue-700 text-sm mb-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Notification Status
                    </p>
                    <p className="text-sm text-gray-600">
                      A booking confirmation has been sent to your email. You will also receive reminder notifications before your pickup date.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Booking History */}
      {activeTab === 'history' && (
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-xl font-semibold mb-6">Your Previous Bookings</h2>
          
          {bookingHistory.length === 0 ? (
            <p className="text-gray-600 text-center py-8">You don't have any previous bookings yet.</p>
          ) : (
            <div className="space-y-6">
              {bookingHistory.map((booking) => (
                <div key={booking.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                  <div className="flex flex-col md:flex-row justify-between md:items-center mb-4">
                    <div>
                      <h3 className="font-semibold text-lg text-gray-800">
                        {booking.carName || 'Car Booking'}
                      </h3>
                      <p className="text-sm text-gray-500">Booked on: {formatDateTime(booking.bookingDate)}</p>
                    </div>
                    <div className="mt-2 md:mt-0">
                      <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                        Confirmed
                      </span>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <p><span className="font-medium">Pickup:</span> {booking.pickupLocation}</p>
                      <p><span className="font-medium">Date:</span> {formatDate(booking.pickupDate)}</p>
                      <p><span className="font-medium">Time:</span> {booking.pickupTime || 'Not specified'}</p>
                    </div>
                    <div>
                      <p><span className="font-medium">Return Date:</span> {booking.dropoffDate ? formatDate(booking.dropoffDate) : 'Not specified'}</p>
                      <p><span className="font-medium">Return Time:</span> {booking.dropoffTime || 'Not specified'}</p>
                      <p><span className="font-medium">Contact:</span> {booking.contactNumber}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Notifications Tab */}
      {activeTab === 'notifications' && (
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-xl font-semibold mb-6">Your Notifications</h2>
          
          {notifications.length === 0 ? (
            <p className="text-gray-600 text-center py-8">You don't have any notifications yet.</p>
          ) : (
            <div className="space-y-4">
              {notifications.map((notification, index) => (
                <div key={index} className="p-4 border-l-4 border-blue-500 bg-blue-50 rounded">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-medium text-blue-800">{notification.subject}</h3>
                      <p className="text-sm text-gray-600 mt-1">Sent on: {formatDateTime(notification.sentDate)}</p>
                      <p className="mt-3 text-gray-700">{notification.message}</p>
                    </div>
                    <div className="bg-blue-200 text-blue-800 text-xs px-2 py-1 rounded uppercase font-semibold">
                      {notification.type}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
      
      <div className="mt-10 text-center">
        <div className="flex flex-wrap justify-center gap-4 mt-6">
          <Link 
            href="/" 
            className="px-6 py-3 bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-md transition-colors"
          >
            Return to Home
          </Link>
          <Link 
            href="/form" 
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors"
          >
            Book Another Car
          </Link>
          <Link 
            href="/favorites" 
            className="px-6 py-3 bg-pink-600 hover:bg-pink-700 text-white rounded-md transition-colors"
          >
            View Favorites
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationPage;
