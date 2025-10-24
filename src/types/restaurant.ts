export interface Restaurant {
  id: number;
  name: string;
  cuisine: string;
  deliveryTime: number;
  rating: number;
  averagePrice: number;
  status: 'Ouvert' | 'Fermé';
  image: string;
  description?: string;
  address?: string;
  phone?: string;
}

export interface RestaurantFilter {
  cuisine?: string;
  deliveryTime?: string;
  rating?: number;
  priceRange?: {
    min: number;
    max: number;
  };
}

export interface RestaurantSearchParams {
  query?: string;
  filters?: RestaurantFilter;
  sortBy?: 'rating' | 'deliveryTime' | 'price' | 'name';
  sortOrder?: 'asc' | 'desc';
  page?: number;
  limit?: number;
}
