// components/BookingModal.tsx
import React, { useState, useEffect } from 'react';
import CarCard from './CarCard';  // Assuming this is a component to display car details
import Form from '../Form';  // Your booking form
import { FaStar } from 'react-icons/fa';
import { getCarReviews, addReview, Review } from '../../services';

const BookingModal = ({ car }: any) => {
  const [activeTab, setActiveTab] = useState<'booking' | 'reviews'>('booking');
  const [reviews, setReviews] = useState<Review[]>([]);
  const [rating, setRating] = useState<number>(0);
  const [comment, setComment] = useState<string>('');
  const [userName, setUserName] = useState<string>('');
  const [reviewSubmitted, setReviewSubmitted] = useState<boolean>(false);

  useEffect(() => {
    if (car?.id) {
      // Load reviews for this car
      const carReviews = getCarReviews(car.id);
      setReviews(carReviews);
    }
  }, [car?.id]);

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (rating === 0) {
      alert('Please select a rating');
      return;
    }

    if (!userName.trim()) {
      alert('Please enter your name');
      return;
    }

    // Add review
    const newReview = addReview({
      carId: car.id,
      rating,
      comment,
      userName
    });

    // Update local state
    setReviews([newReview, ...reviews]);
    
    // Reset form
    setRating(0);
    setComment('');
    setUserName('');
    setReviewSubmitted(true);

    // Reset submission notification after 3 seconds
    setTimeout(() => {
      setReviewSubmitted(false);
    }, 3000);
  };

  // Format date helper
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <div className="max-w-4xl mx-auto">
      <h3 className="text-2xl font-bold mb-4">{car.name}</h3>
      <p className="text-gray-500 mb-6">₹{car.price}/day</p>

      {/* Tabs */}
      <div className="flex border-b mb-6">
        <button
          className={`py-2 px-4 font-medium ${
            activeTab === 'booking'
              ? 'text-blue-600 border-b-2 border-blue-600'
              : 'text-gray-500'
          }`}
          onClick={() => setActiveTab('booking')}
        >
          Book Car
        </button>
        <button
          className={`py-2 px-4 font-medium ${
            activeTab === 'reviews'
              ? 'text-blue-600 border-b-2 border-blue-600'
              : 'text-gray-500'
          }`}
          onClick={() => setActiveTab('reviews')}
        >
          Reviews ({reviews.length})
        </button>
      </div>

      {activeTab === 'booking' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <CarCard car={car} />
          </div>
          <div>
            <Form car={car} />
          </div>
        </div>
      )}

      {activeTab === 'reviews' && (
        <div>
          {/* Review Form */}
          <div className="bg-gray-50 p-6 rounded-lg mb-6">
            <h4 className="text-lg font-medium mb-4">Write a Review</h4>
            
            {reviewSubmitted ? (
              <div className="bg-green-100 text-green-700 p-3 rounded mb-4">
                Thank you for your review!
              </div>
            ) : (
              <form onSubmit={handleSubmitReview}>
                <div className="mb-4">
                  <label className="block text-gray-700 mb-2">Your Rating</label>
                  <div className="flex space-x-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => setRating(star)}
                        className="text-2xl focus:outline-none"
                      >
                        <FaStar 
                          className={star <= rating ? "text-yellow-400" : "text-gray-300"} 
                        />
                      </button>
                    ))}
                  </div>
                </div>
                
                <div className="mb-4">
                  <label className="block text-gray-700 mb-2">Your Name</label>
                  <input
                    type="text"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    className="w-full p-2 border rounded-md"
                    required
                  />
                </div>
                
                <div className="mb-4">
                  <label className="block text-gray-700 mb-2">Your Review</label>
                  <textarea
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    className="w-full p-2 border rounded-md"
                    rows={4}
                  />
                </div>
                
                <button
                  type="submit"
                  className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
                >
                  Submit Review
                </button>
              </form>
            )}
          </div>
          
          {/* Reviews List */}
          <div>
            <h4 className="text-lg font-medium mb-4">Customer Reviews</h4>
            
            {reviews.length === 0 ? (
              <p className="text-gray-500">No reviews yet. Be the first to review this car!</p>
            ) : (
              <div className="space-y-4">
                {reviews.map((review) => (
                  <div key={review.id} className="border-b pb-4">
                    <div className="flex items-center mb-2">
                      <div className="flex mr-2">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <FaStar
                            key={star}
                            className={star <= review.rating ? "text-yellow-400" : "text-gray-300"}
                          />
                        ))}
                      </div>
                      <span className="font-medium">{review.userName}</span>
                      <span className="text-gray-500 text-sm ml-2">
                        {formatDate(review.createdAt)}
                      </span>
                    </div>
                    <p className="text-gray-700">{review.comment}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default BookingModal;