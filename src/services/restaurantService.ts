import { Restaurant } from '@/types/restaurant';

// Mock data pour les restaurants
const mockRestaurants: Restaurant[] = [
  {
    id: 1,
    name: 'Pizza Palace',
    cuisine: 'Italien',
    deliveryTime: 25,
    rating: 4.5,
    averagePrice: 12.50,
    status: 'Ouvert',
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400',
    description: 'Pizzas artisanales cuites au feu de bois',
    address: '123 Rue de la Paix, Paris',
    phone: '01 23 45 67 89'
  },
  {
    id: 2,
    name: 'Sushi Zen',
    cuisine: 'Japonais',
    deliveryTime: 35,
    rating: 4.8,
    averagePrice: 18.00,
    status: 'Ouvert',
    image: 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=400',
    description: 'Sushis frais et plats japonais authentiques',
    address: '456 Avenue des Champs, Paris',
    phone: '01 23 45 67 90'
  },
  {
    id: 3,
    name: 'Burger King',
    cuisine: 'Fast-food',
    deliveryTime: 15,
    rating: 3.9,
    averagePrice: 8.50,
    status: 'Ouvert',
    image: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=400',
    description: 'Burgers, frites et boissons',
    address: '789 Boulevard Saint-Germain, Paris',
    phone: '01 23 45 67 91'
  },
  {
    id: 4,
    name: 'Curry House',
    cuisine: 'Indien',
    deliveryTime: 30,
    rating: 4.2,
    averagePrice: 14.00,
    status: 'Ouvert',
    image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400',
    description: 'Currys épicés et plats indiens traditionnels',
    address: '321 Rue de Rivoli, Paris',
    phone: '01 23 45 67 92'
  },
  {
    id: 5,
    name: 'Taco Loco',
    cuisine: 'Mexicain',
    deliveryTime: 20,
    rating: 4.1,
    averagePrice: 11.00,
    status: 'Ouvert',
    image: 'https://images.unsplash.com/photo-1565299585323-38174c4a4a0a?w=400',
    description: 'Tacos, burritos et plats mexicains',
    address: '654 Place de la République, Paris',
    phone: '01 23 45 67 93'
  },
  {
    id: 6,
    name: 'Bistro Français',
    cuisine: 'Français',
    deliveryTime: 40,
    rating: 4.6,
    averagePrice: 16.50,
    status: 'Ouvert',
    image: 'https://images.unsplash.com/photo-1551218808-94e220e084d2?w=400',
    description: 'Cuisine française traditionnelle',
    address: '987 Rue de la Paix, Paris',
    phone: '01 23 45 67 94'
  },
  {
    id: 7,
    name: 'Noodle Bar',
    cuisine: 'Asiatique',
    deliveryTime: 22,
    rating: 4.3,
    averagePrice: 13.50,
    status: 'Ouvert',
    image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400',
    description: 'Nouilles fraîches et plats asiatiques',
    address: '147 Rue de la Paix, Paris',
    phone: '01 23 45 67 95'
  },
  {
    id: 8,
    name: 'McDonald\'s',
    cuisine: 'Fast-food',
    deliveryTime: 12,
    rating: 3.7,
    averagePrice: 7.50,
    status: 'Ouvert',
    image: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=400',
    description: 'Burgers, frites et boissons',
    address: '258 Avenue des Champs, Paris',
    phone: '01 23 45 67 96'
  }
];

export const restaurantService = {
  // Récupérer tous les restaurants
  getRestaurants: async (): Promise<Restaurant[]> => {
    // Simulation d'un appel API
    await new Promise(resolve => setTimeout(resolve, 1000));
    return mockRestaurants;
  },

  // Récupérer un restaurant par ID
  getRestaurantById: async (id: number): Promise<Restaurant | null> => {
    await new Promise(resolve => setTimeout(resolve, 500));
    return mockRestaurants.find(restaurant => restaurant.id === id) || null;
  },

  // Rechercher des restaurants
  searchRestaurants: async (query: string): Promise<Restaurant[]> => {
    await new Promise(resolve => setTimeout(resolve, 800));
    return mockRestaurants.filter(restaurant =>
      restaurant.name.toLowerCase().includes(query.toLowerCase()) ||
      restaurant.cuisine.toLowerCase().includes(query.toLowerCase())
    );
  },

  // Filtrer les restaurants
  filterRestaurants: async (filters: {
    cuisine?: string;
    deliveryTime?: string;
    rating?: number;
  }): Promise<Restaurant[]> => {
    await new Promise(resolve => setTimeout(resolve, 600));
    
    return mockRestaurants.filter(restaurant => {
      if (filters.cuisine && filters.cuisine !== 'all' && restaurant.cuisine !== filters.cuisine) {
        return false;
      }
      
      if (filters.deliveryTime && filters.deliveryTime !== 'all') {
        const deliveryTime = restaurant.deliveryTime;
        switch (filters.deliveryTime) {
          case 'fast':
            if (deliveryTime > 15) return false;
            break;
          case 'medium':
            if (deliveryTime > 30) return false;
            break;
          case 'slow':
            if (deliveryTime <= 30) return false;
            break;
        }
      }
      
      if (filters.rating && restaurant.rating < filters.rating) {
        return false;
      }
      
      return true;
    });
  }
};
