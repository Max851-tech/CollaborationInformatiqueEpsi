# US003 : Créer une commande d'équipe (budget + deadline)

## 📋 Description

**En tant que** responsable d'équipe  
**Je veux** créer une commande groupée avec un budget maximum et une deadline  
**Afin de** organiser le déjeuner de l'équipe dans les contraintes définies

## 🎯 Critères d'acceptation

### AC1 : Création de commande
- [ ] Un formulaire permet de créer une nouvelle commande d'équipe
- [ ] Les champs obligatoires sont : nom de la commande, budget maximum, deadline
- [ ] La validation empêche la soumission si les champs sont vides ou invalides
- [ ] Un message de confirmation s'affiche après création

### AC2 : Gestion du budget
- [ ] Le budget maximum est saisi en euros (format : XX.XX)
- [ ] Le budget minimum est de 20€ et maximum de 500€
- [ ] Un indicateur visuel montre le budget restant en temps réel
- [ ] Un avertissement s'affiche si le budget est dépassé

### AC3 : Gestion de la deadline
- [ ] La deadline est sélectionnée via un sélecteur de date/heure
- [ ] La deadline ne peut pas être dans le passé
- [ ] La deadline par défaut est dans 2 heures
- [ ] Un compte à rebours affiche le temps restant

### AC4 : Gestion des participants
- [ ] Le responsable peut ajouter des participants à la commande
- [ ] Chaque participant peut voir la commande et ajouter ses plats
- [ ] Le nombre de participants est affiché
- [ ] Un participant peut quitter la commande

### AC5 : Sauvegarde et persistance
- [ ] La commande est sauvegardée automatiquement
- [ ] La commande est accessible via un lien partageable
- [ ] La commande persiste même si l'utilisateur ferme le navigateur
- [ ] Un historique des commandes est disponible

## 🧪 Tests

### Tests unitaires
```javascript
describe('TeamOrderForm Component', () => {
  test('should create team order with valid data', () => {
    // Vérifier la création de commande
  });
  
  test('should validate budget constraints', () => {
    // Vérifier la validation du budget
  });
  
  test('should validate deadline constraints', () => {
    // Vérifier la validation de la deadline
  });
  
  test('should add participants to order', () => {
    // Vérifier l'ajout de participants
  });
});
```

### Tests d'intégration
```javascript
describe('Order Creation Integration', () => {
  test('should save order to backend', () => {
    // Vérifier la sauvegarde
  });
  
  test('should generate shareable link', () => {
    // Vérifier le lien partageable
  });
  
  test('should persist order data', () => {
    // Vérifier la persistance
  });
});
```

### Tests end-to-end
```javascript
describe('Order Creation E2E', () => {
  test('should create complete team order', () => {
    // Vérifier le flux complet
  });
  
  test('should handle multiple participants', () => {
    // Vérifier la gestion multi-participants
  });
});
```

## 📊 Données d'exemple

```json
{
  "teamOrder": {
    "id": "order_123",
    "name": "Déjeuner équipe Dev",
    "budget": 150.00,
    "deadline": "2025-01-15T14:00:00Z",
    "status": "active",
    "createdBy": "user_456",
    "participants": [
      {
        "id": "user_456",
        "name": "Alice",
        "role": "creator"
      },
      {
        "id": "user_789",
        "name": "Bob",
        "role": "participant"
      }
    ],
    "items": [],
    "totalAmount": 0.00,
    "remainingBudget": 150.00,
    "timeRemaining": 7200
  }
}
```

## 🏷️ Labels GitHub
- `feature`
- `backend`
- `frontend`
- `priority:high`

## 📝 Notes techniques

### Dépendances
- US001 : Consulter la liste des restaurants
- US002 : Filtrer par type de cuisine et délai

### Composants à créer
- `TeamOrderForm` : Formulaire de création
- `BudgetIndicator` : Indicateur de budget
- `DeadlineSelector` : Sélecteur de deadline
- `ParticipantManager` : Gestion des participants
- `OrderService` : Service de gestion des commandes

### API Endpoints
- `POST /api/orders` : Créer une commande
- `GET /api/orders/:id` : Récupérer une commande
- `PUT /api/orders/:id` : Mettre à jour une commande
- `POST /api/orders/:id/participants` : Ajouter un participant

### Base de données
- Table `orders` : Commandes d'équipe
- Table `order_participants` : Participants aux commandes
- Table `order_items` : Articles de la commande

## ✅ Definition of Ready (DoR)
- [x] Story claire et testable
- [x] Critères d'acceptation définis
- [x] Données d'exemple fournies
- [x] Dépendances identifiées (US001, US002)
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

**Estimation** : 8 story points  
**Assigné à** : [À définir]  
**Sprint** : [À définir]
