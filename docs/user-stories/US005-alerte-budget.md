# US005 : Alerte en cas de dépassement de budget

## 📋 Description

**En tant que** responsable d'équipe  
**Je veux** être alerté quand le budget de la commande est dépassé  
**Afin de** contrôler les dépenses et éviter les dépassements non autorisés

## 🎯 Critères d'acceptation

### AC1 : Détection de dépassement
- [ ] Le système détecte automatiquement quand le budget est dépassé
- [ ] L'alerte se déclenche dès que le total dépasse le budget maximum
- [ ] Le calcul inclut tous les articles ajoutés par tous les participants
- [ ] L'alerte persiste tant que le dépassement n'est pas résolu

### AC2 : Alertes visuelles
- [ ] Une bannière rouge s'affiche en haut de la page
- [ ] Le compteur de budget passe en rouge et clignote
- [ ] Un icône d'alerte (⚠️) apparaît à côté du budget
- [ ] La bannière reste visible même lors du scroll

### AC3 : Alertes sonores
- [ ] Un son d'alerte se déclenche lors du dépassement
- [ ] Le son peut être désactivé par l'utilisateur
- [ ] Un volume modéré est utilisé pour ne pas déranger
- [ ] Le son ne se répète pas en boucle

### AC4 : Notifications push
- [ ] Une notification push s'affiche sur le navigateur
- [ ] La notification contient le montant du dépassement
- [ ] La notification est cliquable et redirige vers la commande
- [ ] Les notifications peuvent être désactivées

### AC5 : Actions correctives
- [ ] Un bouton "Ajuster le budget" permet d'augmenter le budget
- [ ] Un bouton "Supprimer des articles" permet de retirer des items
- [ ] Un bouton "Ignorer l'alerte" permet de continuer malgré le dépassement
- [ ] L'historique des alertes est conservé

### AC6 : Gestion des seuils
- [ ] Une alerte préventive s'affiche à 80% du budget
- [ ] Une alerte critique s'affiche à 100% du budget
- [ ] Une alerte d'urgence s'affiche à 120% du budget
- [ ] Les seuils sont configurables par l'utilisateur

## 🧪 Tests

### Tests unitaires
```javascript
describe('BudgetAlert Component', () => {
  test('should detect budget overflow', () => {
    // Vérifier la détection de dépassement
  });
  
  test('should show visual alerts', () => {
    // Vérifier les alertes visuelles
  });
  
  test('should trigger sound alerts', () => {
    // Vérifier les alertes sonores
  });
  
  test('should handle threshold alerts', () => {
    // Vérifier les alertes de seuil
  });
});
```

### Tests d'intégration
```javascript
describe('Budget Alert Integration', () => {
  test('should integrate with order calculation', () => {
    // Vérifier l'intégration avec le calcul
  });
  
  test('should send push notifications', () => {
    // Vérifier les notifications push
  });
  
  test('should persist alert history', () => {
    // Vérifier l'historique des alertes
  });
});
```

### Tests end-to-end
```javascript
describe('Budget Alert E2E', () => {
  test('should alert on budget overflow', () => {
    // Vérifier le flux complet d'alerte
  });
  
  test('should allow corrective actions', () => {
    // Vérifier les actions correctives
  });
});
```

## 📊 Données d'exemple

```json
{
  "budgetAlert": {
    "orderId": "order_123",
    "budget": 150.00,
    "currentTotal": 165.50,
    "overflow": 15.50,
    "percentage": 110.33,
    "thresholds": {
      "warning": 80,
      "critical": 100,
      "emergency": 120
    },
    "alerts": [
      {
        "id": "alert_1",
        "type": "critical",
        "message": "Budget dépassé de 15.50€",
        "timestamp": "2025-01-15T12:30:00Z",
        "acknowledged": false
      }
    ],
    "settings": {
      "soundEnabled": true,
      "pushEnabled": true,
      "customThresholds": false
    }
  }
}
```

## 🏷️ Labels GitHub
- `feature`
- `frontend`
- `backend`
- `priority:medium`

## 📝 Notes techniques

### Dépendances
- US003 : Créer une commande d'équipe

### Composants à créer
- `BudgetAlert` : Composant principal d'alerte
- `AlertBanner` : Bannière d'alerte
- `BudgetCounter` : Compteur de budget avec alerte
- `AlertSound` : Gestionnaire de sons d'alerte
- `PushNotification` : Gestionnaire de notifications
- `AlertHistory` : Historique des alertes

### Services
- `AlertService` : Service de gestion des alertes
- `NotificationService` : Service de notifications
- `SoundService` : Service de gestion des sons

### API Endpoints
- `GET /api/orders/:id/alerts` : Récupérer les alertes
- `POST /api/orders/:id/alerts/:alertId/acknowledge` : Marquer une alerte comme lue
- `PUT /api/orders/:id/budget` : Ajuster le budget

## ✅ Definition of Ready (DoR)
- [x] Story claire et testable
- [x] Critères d'acceptation définis
- [x] Données d'exemple fournies
- [x] Dépendance identifiée (US003)
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
