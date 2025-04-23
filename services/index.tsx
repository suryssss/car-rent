import { gql, request } from "graphql-request";

export type Car = {
  id: string;
  name: string;
  carBrand: string;
  carType: string;
  carAvg: number;
  price: number;
  image: {
    url: string;
  };
  avgRating?: number;
};

export type CarLocation = {
  locationaddress: string;
};

export type Review = {
  id: string;
  carId: string;
  rating: number;
  comment: string;
  userName: string;
  createdAt: string;
};

type CarListResponse = {
  carLists: Car[];
};

type CarLocationResponse = {
  carLocations: CarLocation[];
};

const MASTER_URL =
  "https://ap-south-1.cdn.hygraph.com/content/cm92w4w0w01q607uwx410swgb/master";

export const getCarsList = async (): Promise<CarListResponse> => {
  const query = gql`
    query CarList {
      carLists {
        id
        name
        carBrand
        carType
        carAvg
        price
        image {
          url
        }
      }
    }
  `;

  const result = await request<CarListResponse>(MASTER_URL, query);

  // Add average ratings from local storage
  const reviews = getReviewsFromStorage();
  result.carLists = result.carLists.map(car => {
    const carReviews = reviews.filter(review => review.carId === car.id);
    if (carReviews.length > 0) {
      const totalRating = carReviews.reduce((sum, review) => sum + review.rating, 0);
      car.avgRating = parseFloat((totalRating / carReviews.length).toFixed(1));
    }
    return car;
  });

  return result;
};

export const getStoreLocation = async (): Promise<CarLocationResponse> => {
  const query = gql`
    query CarLocation {
      carLocations {
        locationaddress
      }
    }
  `;

  const result = await request<CarLocationResponse>(MASTER_URL, query);

  return result;
};

// Review functions
export const getReviewsFromStorage = (): Review[] => {
  if (typeof window !== 'undefined') {
    const reviews = localStorage.getItem('carReviews');
    return reviews ? JSON.parse(reviews) : [];
  }
  return [];
};

export const getCarReviews = (carId: string): Review[] => {
  const reviews = getReviewsFromStorage();
  return reviews.filter(review => review.carId === carId);
};

export const addReview = (review: Omit<Review, 'id' | 'createdAt'>): Review => {
  const reviews = getReviewsFromStorage();
  const newReview: Review = {
    ...review,
    id: Date.now().toString(),
    createdAt: new Date().toISOString()
  };
  
  localStorage.setItem('carReviews', JSON.stringify([newReview, ...reviews]));
  return newReview;
};

// Favorites functions
export const getFavoritesFromStorage = (): string[] => {
  if (typeof window !== 'undefined') {
    const favorites = localStorage.getItem('favorites');
    return favorites ? JSON.parse(favorites) : [];
  }
  return [];
};

export const addToFavorites = (carId: string): string[] => {
  const favorites = getFavoritesFromStorage();
  if (!favorites.includes(carId)) {
    const newFavorites = [...favorites, carId];
    localStorage.setItem('favorites', JSON.stringify(newFavorites));
    return newFavorites;
  }
  return favorites;
};

export const removeFromFavorites = (carId: string): string[] => {
  const favorites = getFavoritesFromStorage();
  const newFavorites = favorites.filter(id => id !== carId);
  localStorage.setItem('favorites', JSON.stringify(newFavorites));
  return newFavorites;
};

export const isFavorite = (carId: string): boolean => {
  const favorites = getFavoritesFromStorage();
  return favorites.includes(carId);
};