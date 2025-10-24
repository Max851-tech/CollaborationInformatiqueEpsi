# Règles d'équipe – Projet Liverooo!

## Definition of Ready (DoR)

Une user story est considérée comme prête à être développée si :

- ✅ La story est claire, petite (≤ ½ journée de développement) et testable
- ✅ Le contexte métier et les critères d'acceptation (AC) sont bien définis
- ✅ Des données d'exemple sont fournies (JSON ou texte simple)
- ✅ Les dépendances éventuelles sont identifiées
- ✅ La story est placée dans la colonne "To do" avec un label approprié (feature, backend, frontend)

### Checklist DoR

Avant de commencer le développement d'une user story, vérifier :

- [ ] **Clarté** : La story est-elle compréhensible par tous les membres de l'équipe ?
- [ ] **Taille** : Peut-elle être développée en moins de 4 heures ?
- [ ] **Testabilité** : Peut-on écrire des tests automatisés ?
- [ ] **Critères d'acceptation** : Sont-ils spécifiques et mesurables ?
- [ ] **Données** : Y a-t-il des exemples de données pour tester ?
- [ ] **Dépendances** : Les dépendances sont-elles clairement identifiées ?
- [ ] **Labels** : La story a-t-elle les bons labels GitHub ?

## Definition of Done (DoD)

Une user story est considérée comme terminée si :

- ✅ Le code et les tests passent en local et en CI
- ✅ Le linting et le formatage du code sont conformes
- ✅ La documentation est mise à jour (README, ADR si nécessaire)
- ✅ La PR/MR est relue et approuvée par au moins un membre de l'équipe
- ✅ L'issue est fermée
- ✅ La fonctionnalité est déployable sans dette technique et répond aux AC définis

### Checklist DoD

Avant de fermer une user story, vérifier :

- [ ] **Code** : Le code fonctionne-t-il en local ?
- [ ] **Tests** : Tous les tests passent-ils (unitaires + intégration) ?
- [ ] **CI/CD** : La pipeline CI/CD est-elle verte ?
- [ ] **Linting** : Le code respecte-t-il les standards de qualité ?
- [ ] **Documentation** : La documentation est-elle à jour ?
- [ ] **Review** : La PR a-t-elle été approuvée par un collègue ?
- [ ] **Issue** : L'issue GitHub est-elle fermée ?
- [ ] **Déploiement** : La fonctionnalité est-elle déployable ?
- [ ] **Critères d'acceptation** : Tous les AC sont-ils validés ?

## Règles de collaboration

### Communication

- **Daily Standup** : Chaque jour à 9h00 (15 min max)
- **Sprint Planning** : Début de sprint (1h)
- **Sprint Review** : Fin de sprint (30 min)
- **Rétrospective** : Fin de sprint (30 min)

### Gestion du code

- **Branches** : Une branche par user story (`feature/US001-consulter-restaurants`)
- **Commits** : Messages clairs et descriptifs
- **Pull Requests** : Obligatoires, avec au moins 1 reviewer
- **Merge** : Squash and merge pour garder l'historique propre

### Standards de code

- **TypeScript** : Utilisation obligatoire pour le typage
- **ESLint** : Configuration partagée pour la cohérence
- **Prettier** : Formatage automatique du code
- **Tests** : Couverture minimale de 80%

### Gestion des issues

- **Labels** : Utilisation systématique des labels GitHub
  - `feature` : Nouvelle fonctionnalité
  - `bug` : Correction de bug
  - `frontend` : Travail sur l'interface
  - `backend` : Travail sur l'API
  - `documentation` : Mise à jour de la doc
  - `priority:high` : Priorité élevée
  - `priority:medium` : Priorité moyenne
  - `priority:low` : Priorité faible

- **Milestones** : Regroupement par sprint
- **Assignees** : Attribution claire des responsabilités

## Workflow Kanban

### Colonnes du board

1. **Backlog** : Idées et demandes non priorisées
2. **To Do** : User stories prêtes (DoR validée)
3. **In Progress** : En cours de développement (limite WIP : 2)
4. **Review** : En attente de review
5. **Done** : Terminé et déployé (DoD validée)

### Limite WIP (Work In Progress)

- **In Progress** : Maximum 2 user stories simultanément
- **Review** : Maximum 3 user stories en attente de review

### Règles de déplacement

- **Backlog → To Do** : Après validation DoR
- **To Do → In Progress** : Quand un développeur s'assigne
- **In Progress → Review** : Quand le code est prêt
- **Review → Done** : Après validation DoD

## Métriques de suivi

### Vélocité

- Mesure du nombre de story points terminés par sprint
- Objectif : Amélioration continue de la vélocité

### Lead Time

- Temps entre le début et la fin d'une user story
- Objectif : Réduction du lead time

### Cycle Time

- Temps passé en "In Progress"
- Objectif : Optimisation du temps de développement

## Outils utilisés

- **GitHub** : Gestion du code et des issues
- **GitHub Projects** : Board Kanban
- **Slack/Discord** : Communication quotidienne
- **Figma** : Design et maquettes
- **Jest** : Tests unitaires
- **Cypress** : Tests end-to-end

## Escalade et résolution de conflits

### Processus d'escalade

1. **Niveau 1** : Discussion entre les membres de l'équipe
2. **Niveau 2** : Intervention du Scrum Master
3. **Niveau 3** : Escalade vers le Product Owner
4. **Niveau 4** : Intervention du management

### Résolution de conflits

- **Principe** : Focus sur le problème, pas sur les personnes
- **Méthode** : Discussion ouverte et respectueuse
- **Décision** : Consensus ou vote majoritaire si nécessaire

---

*Document créé par l'équipe Liverooo - Atelier collaboration EPSI*
*Dernière mise à jour : Janvier 2025*
