import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Search, Filter, Star, Clock, Euro } from 'lucide-react';
import { useQuery } from 'react-query';
import { restaurantService } from '@/services/restaurantService';
import { Restaurant } from '@/types/restaurant';

const RestaurantListPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [cuisineFilter, setCuisineFilter] = useState('all');
  const [deliveryFilter, setDeliveryFilter] = useState('all');

  const { data: restaurants, isLoading, error } = useQuery(
    'restaurants',
    restaurantService.getRestaurants
  );

  const filteredRestaurants = restaurants?.filter(restaurant => {
    const matchesSearch = restaurant.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCuisine = cuisineFilter === 'all' || restaurant.cuisine === cuisineFilter;
    const matchesDelivery = deliveryFilter === 'all' || 
      (deliveryFilter === 'fast' && restaurant.deliveryTime <= 15) ||
      (deliveryFilter === 'medium' && restaurant.deliveryTime <= 30) ||
      (deliveryFilter === 'slow' && restaurant.deliveryTime > 30);
    
    return matchesSearch && matchesCuisine && matchesDelivery;
  });

  if (isLoading) {
    return (
      <div className="loading">
        <div className="spinner"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="error">
        Erreur lors du chargement des restaurants
      </div>
    );
  }

  return (
    <div className="restaurant-list-page">
      <header className="header">
        <div className="container">
          <div className="header-content">
            <Link to="/" className="logo">🍽️ Liverooo!</Link>
            <nav className="nav">
              <Link to="/" className="nav-link">Accueil</Link>
              <Link to="/restaurants" className="nav-link">Restaurants</Link>
              <Link to="/team-order" className="nav-link">Commande d'équipe</Link>
            </nav>
          </div>
        </div>
      </header>

      <main className="main-content">
        <div className="container">
          <h1>Restaurants disponibles</h1>
          
          <div className="filters-section">
            <div className="search-bar">
              <Search size={20} />
              <input
                type="text"
                placeholder="Rechercher un restaurant..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="form-input"
              />
            </div>

            <div className="filters">
              <div className="filter-group">
                <Filter size={20} />
                <select
                  value={cuisineFilter}
                  onChange={(e) => setCuisineFilter(e.target.value)}
                  className="form-select"
                >
                  <option value="all">Toutes les cuisines</option>
                  <option value="Italien">Italien</option>
                  <option value="Asiatique">Asiatique</option>
                  <option value="Fast-food">Fast-food</option>
                  <option value="Indien">Indien</option>
                  <option value="Mexicain">Mexicain</option>
                  <option value="Français">Français</option>
                </select>
              </div>

              <div className="filter-group">
                <Clock size={20} />
                <select
                  value={deliveryFilter}
                  onChange={(e) => setDeliveryFilter(e.target.value)}
                  className="form-select"
                >
                  <option value="all">Tous les délais</option>
                  <option value="fast">Rapide (&lt; 15 min)</option>
                  <option value="medium">Moyen (&lt; 30 min)</option>
                  <option value="slow">Lent (&gt; 30 min)</option>
                </select>
              </div>
            </div>
          </div>

          <div className="results-info">
            <p>{filteredRestaurants?.length || 0} restaurants trouvés</p>
          </div>

          <div className="restaurants-grid">
            {filteredRestaurants?.map(restaurant => (
              <div key={restaurant.id} className="restaurant-card">
                <div className="restaurant-image">
                  <img src={restaurant.image} alt={restaurant.name} />
                </div>
                
                <div className="restaurant-info">
                  <h3>{restaurant.name}</h3>
                  <p className="cuisine-type">{restaurant.cuisine}</p>
                  
                  <div className="restaurant-details">
                    <div className="detail">
                      <Star size={16} />
                      <span>{restaurant.rating}/5</span>
                    </div>
                    
                    <div className="detail">
                      <Clock size={16} />
                      <span>{restaurant.deliveryTime} min</span>
                    </div>
                    
                    <div className="detail">
                      <Euro size={16} />
                      <span>{restaurant.averagePrice}€</span>
                    </div>
                  </div>
                  
                  <div className="restaurant-status">
                    <span className={`status ${restaurant.status.toLowerCase()}`}>
                      {restaurant.status}
                    </span>
                  </div>
                  
                  <Link 
                    to={`/team-order?restaurant=${restaurant.id}`}
                    className="btn btn-primary"
                  >
                    Commander
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {filteredRestaurants?.length === 0 && (
            <div className="no-results">
              <p>Aucun restaurant ne correspond à vos critères de recherche.</p>
              <button 
                onClick={() => {
                  setSearchTerm('');
                  setCuisineFilter('all');
                  setDeliveryFilter('all');
                }}
                className="btn btn-outline"
              >
                Réinitialiser les filtres
              </button>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default RestaurantListPage;
