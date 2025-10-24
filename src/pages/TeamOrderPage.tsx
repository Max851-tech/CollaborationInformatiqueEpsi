import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Users, DollarSign, Clock, Plus, Minus } from 'lucide-react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

interface TeamOrderForm {
  name: string;
  budget: number;
  deadline: string;
}

const TeamOrderPage: React.FC = () => {
  const [participants, setParticipants] = useState<string[]>(['']);
  const [orderCreated, setOrderCreated] = useState(false);
  const [orderId, setOrderId] = useState<string>('');

  const { register, handleSubmit, formState: { errors }, watch } = useForm<TeamOrderForm>();
  const budget = watch('budget') || 0;

  const addParticipant = () => {
    setParticipants([...participants, '']);
  };

  const removeParticipant = (index: number) => {
    if (participants.length > 1) {
      setParticipants(participants.filter((_, i) => i !== index));
    }
  };

  const updateParticipant = (index: number, value: string) => {
    const newParticipants = [...participants];
    newParticipants[index] = value;
    setParticipants(newParticipants);
  };

  const onSubmit = (data: TeamOrderForm) => {
    const validParticipants = participants.filter(p => p.trim() !== '');
    
    if (validParticipants.length === 0) {
      toast.error('Veuillez ajouter au moins un participant');
      return;
    }

    // Simulation de création de commande
    const newOrderId = `order_${Date.now()}`;
    setOrderId(newOrderId);
    setOrderCreated(true);
    
    toast.success('Commande d\'équipe créée avec succès!');
  };

  if (orderCreated) {
    return (
      <div className="team-order-page">
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
            <div className="success-message">
              <h1>✅ Commande créée avec succès!</h1>
              <p>Votre commande d'équipe a été créée et est prête à être partagée.</p>
              
              <div className="order-details">
                <h2>Détails de la commande</h2>
                <p><strong>ID de la commande:</strong> {orderId}</p>
                <p><strong>Lien de partage:</strong> <code>{window.location.origin}/order/{orderId}</code></p>
              </div>

              <div className="order-actions">
                <button 
                  onClick={() => navigator.clipboard.writeText(`${window.location.origin}/order/${orderId}`)}
                  className="btn btn-primary"
                >
                  Copier le lien
                </button>
                <Link to="/restaurants" className="btn btn-outline">
                  Choisir un restaurant
                </Link>
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="team-order-page">
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
          <h1>Créer une commande d'équipe</h1>
          
          <form onSubmit={handleSubmit(onSubmit)} className="team-order-form">
            <div className="form-section">
              <h2>Informations de base</h2>
              
              <div className="form-group">
                <label className="form-label">Nom de la commande</label>
                <input
                  type="text"
                  {...register('name', { required: 'Le nom de la commande est requis' })}
                  className="form-input"
                  placeholder="Ex: Déjeuner équipe Dev"
                />
                {errors.name && <span className="error-text">{errors.name.message}</span>}
              </div>

              <div className="form-group">
                <label className="form-label">Budget maximum (€)</label>
                <input
                  type="number"
                  step="0.01"
                  min="20"
                  max="500"
                  {...register('budget', { 
                    required: 'Le budget est requis',
                    min: { value: 20, message: 'Le budget minimum est de 20€' },
                    max: { value: 500, message: 'Le budget maximum est de 500€' }
                  })}
                  className="form-input"
                  placeholder="150.00"
                />
                {errors.budget && <span className="error-text">{errors.budget.message}</span>}
              </div>

              <div className="form-group">
                <label className="form-label">Deadline</label>
                <input
                  type="datetime-local"
                  {...register('deadline', { required: 'La deadline est requise' })}
                  className="form-input"
                  min={new Date().toISOString().slice(0, 16)}
                />
                {errors.deadline && <span className="error-text">{errors.deadline.message}</span>}
              </div>
            </div>

            <div className="form-section">
              <h2>Participants</h2>
              
              {participants.map((participant, index) => (
                <div key={index} className="participant-group">
                  <input
                    type="text"
                    value={participant}
                    onChange={(e) => updateParticipant(index, e.target.value)}
                    className="form-input"
                    placeholder={`Participant ${index + 1}`}
                  />
                  {participants.length > 1 && (
                    <button
                      type="button"
                      onClick={() => removeParticipant(index)}
                      className="btn btn-outline"
                    >
                      <Minus size={16} />
                    </button>
                  )}
                </div>
              ))}
              
              <button
                type="button"
                onClick={addParticipant}
                className="btn btn-outline"
              >
                <Plus size={16} />
                Ajouter un participant
              </button>
            </div>

            <div className="budget-summary">
              <h3>Résumé du budget</h3>
              <div className="budget-info">
                <div className="budget-item">
                  <DollarSign size={20} />
                  <span>Budget maximum: {budget}€</span>
                </div>
                <div className="budget-item">
                  <Users size={20} />
                  <span>Participants: {participants.filter(p => p.trim() !== '').length}</span>
                </div>
                <div className="budget-item">
                  <Clock size={20} />
                  <span>Budget par personne: {budget > 0 ? (budget / Math.max(participants.filter(p => p.trim() !== '').length, 1)).toFixed(2) : 0}€</span>
                </div>
              </div>
            </div>

            <div className="form-actions">
              <button type="submit" className="btn btn-primary">
                Créer la commande
              </button>
              <Link to="/restaurants" className="btn btn-outline">
                Annuler
              </Link>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
};

export default TeamOrderPage;
