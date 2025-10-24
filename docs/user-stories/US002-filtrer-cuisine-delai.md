# US002 : Filtrer par type de cuisine et délai moyen

## 📋 Description

**En tant que** employé d'une équipe  
**Je veux** filtrer les restaurants par type de cuisine et délai de livraison  
**Afin de** trouver rapidement les options qui correspondent à nos préférences et contraintes de temps

## 🎯 Critères d'acceptation

### AC1 : Filtrage par type de cuisine
- [ ] Un sélecteur permet de choisir le type de cuisine
- [ ] Les options incluent : Tous, Italien, Asiatique, Fast-food, Indien, Mexicain, Français
- [ ] Le filtre s'applique immédiatement à la liste
- [ ] Le nombre de résultats est affiché (ex: "12 restaurants trouvés")

### AC2 : Filtrage par délai de livraison
- [ ] Un sélecteur permet de choisir le délai maximum
- [ ] Les options incluent : Tous, < 15 min, < 30 min, < 45 min, < 60 min
- [ ] Le filtre s'applique immédiatement à la liste
- [ ] Les restaurants dépassant le délai sont masqués

### AC3 : Filtres combinés
- [ ] Les filtres de cuisine et délai peuvent être combinés
- [ ] La liste se met à jour en temps réel
- [ ] Un bouton "Réinitialiser" permet de supprimer tous les filtres
- [ ] Les filtres actifs sont visuellement indiqués

### AC4 : Gestion des cas limites
- [ ] Si aucun restaurant ne correspond aux critères, un message informatif s'affiche
- [ ] Les filtres sont persistés pendant la session
- [ ] La pagination est réinitialisée lors du changement de filtre

## 🧪 Tests

### Tests unitaires
```javascript
describe('RestaurantFilter Component', () => {
  test('should filter restaurants by cuisine type', () => {
    // Vérifier le filtrage par cuisine
  });
  
  test('should filter restaurants by delivery time', () => {
    // Vérifier le filtrage par délai
  });
  
  test('should combine multiple filters', () => {
    // Vérifier la combinaison de filtres
  });
  
  test('should reset filters when reset button is clicked', () => {
    // Vérifier la réinitialisation
  });
});
```

### Tests d'intégration
```javascript
describe('Filter Integration', () => {
  test('should update restaurant list when filters change', () => {
    // Vérifier la mise à jour de la liste
  });
  
  test('should persist filters during session', () => {
    // Vérifier la persistance des filtres
  });
});
```

### Tests end-to-end
```javascript
describe('Filter E2E', () => {
  test('should filter restaurants end-to-end', () => {
    // Vérifier le flux complet de filtrage
  });
  
  test('should handle no results scenario', () => {
    // Vérifier le cas sans résultats
  });
});
```

## 📊 Données d'exemple

```json
{
  "filters": {
    "cuisineTypes": [
      "Tous",
      "Italien",
      "Asiatique", 
      "Fast-food",
      "Indien",
      "Mexicain",
      "Français"
    ],
    "deliveryTimes": [
      "Tous",
      "< 15 min",
      "< 30 min", 
      "< 45 min",
      "< 60 min"
    ]
  },
  "filteredRestaurants": [
    {
      "id": 1,
      "name": "Pizza Palace",
      "cuisine": "Italien",
      "deliveryTime": 25,
      "rating": 4.5,
      "averagePrice": 12.50,
      "status": "Ouvert"
    }
  ],
  "totalResults": 1
}
```

## 🏷️ Labels GitHub
- `feature`
- `frontend`
- `priority:high`

## 📝 Notes techniques

### Dépendances
- US001 : Consulter la liste des restaurants

### Composants à créer
- `RestaurantFilter` : Composant de filtrage
- `CuisineFilter` : Filtre par cuisine
- `DeliveryTimeFilter` : Filtre par délai
- `FilterService` : Service de gestion des filtres

### État local
- Filtres actifs
- Résultats filtrés
- Nombre de résultats

## ✅ Definition of Ready (DoR)
- [x] Story claire et testable
- [x] Critères d'acceptation définis
- [x] Données d'exemple fournies
- [x] Dépendance identifiée (US001)
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

**Estimation** : 5 story points  
**Assigné à** : [À définir]  
**Sprint** : [À définir]
