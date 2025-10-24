import React from 'react';
import { Link } from 'react-router-dom';
import { Utensils, Users, Clock, DollarSign } from 'lucide-react';

const HomePage: React.FC = () => {
  return (
    <div className="home-page">
      <header className="header">
        <div className="container">
          <div className="header-content">
            <div className="logo">🍽️ Liverooo!</div>
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
          <section className="hero">
            <h1>Commande de déjeuner en équipe</h1>
            <p className="hero-subtitle">
              Organisez facilement les déjeuners de votre équipe avec Liverooo!
            </p>
            <div className="hero-actions">
              <Link to="/restaurants" className="btn btn-primary">
                Voir les restaurants
              </Link>
              <Link to="/team-order" className="btn btn-outline">
                Créer une commande
              </Link>
            </div>
          </section>

          <section className="features">
            <h2>Fonctionnalités</h2>
            <div className="grid grid-4">
              <div className="card text-center">
                <Utensils size={48} className="feature-icon" />
                <h3>Restaurants</h3>
                <p>Découvrez une large sélection de restaurants avec leurs spécialités</p>
              </div>
              
              <div className="card text-center">
                <Users size={48} className="feature-icon" />
                <h3>Équipe</h3>
                <p>Créez des commandes groupées pour toute votre équipe</p>
              </div>
              
              <div className="card text-center">
                <Clock size={48} className="feature-icon" />
                <h3>Délais</h3>
                <p>Filtrez par délai de livraison pour respecter vos contraintes</p>
              </div>
              
              <div className="card text-center">
                <DollarSign size={48} className="feature-icon" />
                <h3>Budget</h3>
                <p>Contrôlez votre budget avec des alertes en temps réel</p>
              </div>
            </div>
          </section>

          <section className="how-it-works">
            <h2>Comment ça marche ?</h2>
            <div className="grid grid-3">
              <div className="card">
                <div className="step-number">1</div>
                <h3>Choisissez un restaurant</h3>
                <p>Parcourez la liste des restaurants disponibles et filtrez selon vos préférences</p>
              </div>
              
              <div className="card">
                <div className="step-number">2</div>
                <h3>Créez une commande d'équipe</h3>
                <p>Définissez un budget maximum et une deadline pour votre commande</p>
              </div>
              
              <div className="card">
                <div className="step-number">3</div>
                <h3>Partagez avec votre équipe</h3>
                <p>Invitez vos collègues à participer à la commande</p>
              </div>
            </div>
          </section>
        </div>
      </main>

      <footer className="footer">
        <div className="container">
          <p>&copy; 2025 Liverooo! - Projet EPSI Collaboration</p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
