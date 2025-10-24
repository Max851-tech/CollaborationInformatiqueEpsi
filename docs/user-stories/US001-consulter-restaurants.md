# US001 : Consulter la liste des restaurants disponibles

## 📋 Description

**En tant que** employé d'une équipe  
**Je veux** consulter la liste des restaurants disponibles  
**Afin de** voir les options de restauration pour notre commande d'équipe

## 🎯 Critères d'acceptation

### AC1 : Affichage de la liste
- [ ] La page affiche une liste de restaurants disponibles
- [ ] Chaque restaurant affiche au minimum : nom, type de cuisine, délai moyen, note
- [ ] La liste est triée par défaut par note décroissante
- [ ] Un maximum de 20 restaurants sont affichés par page

### AC2 : Informations du restaurant
- [ ] Pour chaque restaurant, les informations suivantes sont visibles :
  - Nom du restaurant
  - Type de cuisine (ex: Italien, Asiatique, Fast-food)
  - Délai de livraison moyen (en minutes)
  - Note sur 5 étoiles
  - Prix moyen par personne (€)
  - Statut (Ouvert/Fermé)

### AC3 : Responsive design
- [ ] La liste s'adapte aux écrans mobiles (max 768px)
- [ ] La liste s'adapte aux écrans tablettes (768px - 1024px)
- [ ] La liste s'adapte aux écrans desktop (> 1024px)

## 🧪 Tests

### Tests unitaires
```javascript
describe('RestaurantList Component', () => {
  test('should display list of restaurants', () => {
    // Vérifier que la liste s'affiche
  });
  
  test('should display restaurant information', () => {
    // Vérifier les informations affichées
  });
  
  test('should sort restaurants by rating by default', () => {
    // Vérifier le tri par défaut
  });
});
```

### Tests d'intégration
```javascript
describe('Restaurant API Integration', () => {
  test('should fetch restaurants from API', () => {
    // Vérifier l'appel API
  });
  
  test('should handle API errors gracefully', () => {
    // Vérifier la gestion d'erreur
  });
});
```

### Tests end-to-end
```javascript
describe('Restaurant List E2E', () => {
  test('should display restaurants on page load', () => {
    // Vérifier l'affichage complet
  });
  
  test('should be responsive on mobile', () => {
    // Vérifier le responsive design
  });
});
```

## 📊 Données d'exemple

```json
{
  "restaurants": [
    {
      "id": 1,
      "name": "Pizza Palace",
      "cuisine": "Italien",
      "deliveryTime": 25,
      "rating": 4.5,
      "averagePrice": 12.50,
      "status": "Ouvert",
      "image": "https://example.com/pizza-palace.jpg"
    },
    {
      "id": 2,
      "name": "Sushi Zen",
      "cuisine": "Japonais",
      "deliveryTime": 35,
      "rating": 4.8,
      "averagePrice": 18.00,
      "status": "Ouvert",
      "image": "https://example.com/sushi-zen.jpg"
    },
    {
      "id": 3,
      "name": "Burger King",
      "cuisine": "Fast-food",
      "deliveryTime": 15,
      "rating": 3.9,
      "averagePrice": 8.50,
      "status": "Ouvert",
      "image": "https://example.com/burger-king.jpg"
    }
  ]
}
```

## 🏷️ Labels GitHub
- `feature`
- `frontend`
- `priority:high`

## 📝 Notes techniques

### Dépendances
- Aucune dépendance

### Composants à créer
- `RestaurantList` : Composant principal
- `RestaurantCard` : Carte individuelle
- `RestaurantService` : Service API

### API Endpoints
- `GET /api/restaurants` : Récupérer la liste des restaurants

## ✅ Definition of Ready (DoR)
- [x] Story claire et testable
- [x] Critères d'acceptation définis
- [x] Données d'exemple fournies
- [x] Aucune dépendance
- [x] Labels appropriés

## ✅ Definition of Done (DoD)
- [ ] Code développé et testé
- [ ] Tests unitaires passent
- [ ] Tests d'intégration passent
- [ ] Tests E2E passent
- [ ] Code review approuvée
- [ ] Documentation mise à jour
- [ ] Issue fermée

---

**Estimation** : 3 story points  
**Assigné à** : [À définir]  
**Sprint** : [À définir]
