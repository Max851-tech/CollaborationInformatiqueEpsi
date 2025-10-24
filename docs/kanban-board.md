# Board Kanban - Projet Liverooo

## Configuration du board

### Colonnes

1. **Backlog** 
   - Description : Idées et demandes non priorisées
   - Limite WIP : Aucune
   - Couleur : 🔵 Bleu

2. **To Do**
   - Description : User stories prêtes (DoR validée)
   - Limite WIP : Aucune
   - Couleur : 🟡 Jaune

3. **In Progress**
   - Description : En cours de développement
   - Limite WIP : **2** (limite stricte)
   - Couleur : 🟠 Orange

4. **Review**
   - Description : En attente de review
   - Limite WIP : 3
   - Couleur : 🟣 Violet

5. **Done**
   - Description : Terminé et déployé (DoD validée)
   - Limite WIP : Aucune
   - Couleur : 🟢 Vert

## User Stories initiales

### Backlog
- [ ] US006 : Gestion des profils utilisateurs
- [ ] US007 : Historique des commandes
- [ ] US008 : Notifications push
- [ ] US009 : Système de paiement
- [ ] US010 : Gestion des allergies alimentaires

### To Do (Prêtes pour le développement)
- [ ] **US001** : Consulter la liste des restaurants disponibles
- [ ] **US002** : Filtrer par type de cuisine et délai moyen
- [ ] **US003** : Créer une commande d'équipe (budget + deadline)
- [ ] **US004** : Filtrer côté interface
- [ ] **US005** : Alerte en cas de dépassement de budget

### In Progress (Limite : 2)
- [ ] *Aucune user story en cours actuellement*

### Review
- [ ] *Aucune user story en review actuellement*

### Done
- [ ] *Aucune user story terminée actuellement*

## Règles de déplacement

### Backlog → To Do
- ✅ DoR validée
- ✅ Critères d'acceptation définis
- ✅ Données d'exemple fournies
- ✅ Labels appropriés ajoutés

### To Do → In Progress
- ✅ Un développeur s'assigne à la story
- ✅ Vérification de la limite WIP (max 2)
- ✅ Création d'une branche feature

### In Progress → Review
- ✅ Code développé et testé
- ✅ Tests unitaires passent
- ✅ Pull Request créée
- ✅ Code review demandée

### Review → Done
- ✅ Code review approuvée
- ✅ DoD validée
- ✅ Tests d'intégration passent
- ✅ Documentation mise à jour
- ✅ Issue fermée

## Métriques du board

### Vélocité actuelle
- **Sprint 1** : 0 story points
- **Sprint 2** : 0 story points
- **Sprint 3** : 0 story points

### Lead Time moyen
- **Actuel** : N/A (aucune story terminée)
- **Objectif** : < 3 jours

### Cycle Time moyen
- **Actuel** : N/A (aucune story terminée)
- **Objectif** : < 1 jour

### Taux de blocage
- **Actuel** : 0%
- **Objectif** : < 10%

## Indicateurs visuels

### Couleurs des cartes
- 🔴 **Rouge** : Bloquée ou en retard
- 🟡 **Jaune** : Attention requise
- 🟢 **Vert** : Tout va bien
- 🔵 **Bleu** : Information

### Labels GitHub
- `priority:high` : Priorité élevée
- `priority:medium` : Priorité moyenne
- `priority:low` : Priorité faible
- `feature` : Nouvelle fonctionnalité
- `bug` : Correction de bug
- `frontend` : Travail sur l'interface
- `backend` : Travail sur l'API
- `documentation` : Mise à jour de la doc

## Règles de gestion des blocages

### Types de blocages
1. **Technique** : Problème de code ou d'architecture
2. **Fonctionnel** : Clarification métier nécessaire
3. **Externe** : Dépendance externe non disponible
4. **Ressource** : Manque de compétences ou de temps

### Processus de résolution
1. **Identification** : Marquer la carte comme bloquée
2. **Escalade** : Notifier le Scrum Master
3. **Résolution** : Action corrective dans les 24h
4. **Suivi** : Mise à jour quotidienne du statut

## Réunions liées au board

### Daily Standup (15 min)
- Qu'est-ce qui a été fait hier ?
- Qu'est-ce qui sera fait aujourd'hui ?
- Y a-t-il des blocages ?

### Sprint Planning (1h)
- Sélection des user stories pour le sprint
- Estimation des story points
- Attribution des responsabilités

### Sprint Review (30 min)
- Présentation des fonctionnalités terminées
- Feedback des utilisateurs
- Mise à jour du backlog

### Rétrospective (30 min)
- Ce qui a bien fonctionné
- Ce qui peut être amélioré
- Actions d'amélioration

## Outils de suivi

### GitHub Projects
- Board Kanban intégré
- Synchronisation automatique avec les issues
- Métriques et rapports

### Tableaux de bord
- Vélocité par sprint
- Burndown chart
- Lead time et cycle time
- Taux de blocage

---

*Board Kanban créé pour le projet Liverooo - Atelier collaboration EPSI*
*Dernière mise à jour : Janvier 2025*
