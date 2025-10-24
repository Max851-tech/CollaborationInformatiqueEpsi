# -liveroo-

projet liveroo _ atelier collaboration

# Projet Liverooo – Atelier de Collaboration

## 📌 Contexte

Liverooo! est une application web fictive qui permet à des équipes de bureau de commander leur déjeuner en groupe de façon simple et rapide.  
Ce projet est utilisé dans le cadre d'un atelier de collaboration pour mettre en place :

* Un _board Kanban_ clair pour le suivi des tâches
* Des _règles d'équipe (DoR & DoD)_
* Un _backlog initial de 5 user stories prêtes_

## 🎯 Objectifs pédagogiques

* Créer un board Kanban fonctionnel avec 4 colonnes et une limite WIP sur In progress
* Rédiger une _Definition of Ready (DoR)_ et une _Definition of Done (DoD)_
* Créer et documenter 5 issues (user stories) avec critères d'acceptation et tests

## Organisation

* _Kanban board_ : [Lien vers le board GitHub](https://github.com/users/Belvinabmc/projects/2/views/2)
* _Règles d'équipe_ : voir fichier [TEAMS_RULES.md](./TEAMS_RULES.md)
* _User stories_ : disponibles dans les [Issues du projet](https://github.com/Belvinabmc/-liveroo-/issues) (colonne To do)

## Fonctionnalités à développer (issues)

1. **Consulter la liste des restaurants disponibles**
   - Afficher la liste des restaurants avec leurs informations de base
   - Critères d'acceptation : voir Issue #1

2. **Filtrer par type de cuisine et délai moyen**
   - Permettre de filtrer les restaurants par type de cuisine
   - Permettre de filtrer par délai de livraison moyen
   - Critères d'acceptation : voir Issue #2

3. **Créer une commande d'équipe (budget + deadline)**
   - Interface pour créer une commande groupée
   - Définir un budget maximum et une deadline
   - Critères d'acceptation : voir Issue #3

4. **Filtrer côté interface**
   - Interface utilisateur pour appliquer les filtres
   - Affichage des résultats filtrés
   - Critères d'acceptation : voir Issue #4

5. **Alerte en cas de dépassement de budget**
   - Système d'alerte quand le budget est dépassé
   - Notifications visuelles et sonores
   - Critères d'acceptation : voir Issue #5

## Structure du projet

```
liveroo/
├── README.md
├── TEAMS_RULES.md
├── docs/
│   ├── user-stories/
│   │   ├── US001-consulter-restaurants.md
│   │   ├── US002-filtrer-cuisine-delai.md
│   │   ├── US003-creer-commande-equipe.md
│   │   ├── US004-filtrer-interface.md
│   │   └── US005-alerte-budget.md
│   └── kanban-board.md
├── src/
│   ├── components/
│   ├── pages/
│   ├── services/
│   └── utils/
├── tests/
└── package.json
```

## Technologies utilisées

- **Frontend** : React.js avec TypeScript
- **Styling** : CSS Modules ou Tailwind CSS
- **Tests** : Jest + React Testing Library
- **Gestion d'état** : Context API ou Redux Toolkit
- **API** : Mock API avec JSON Server

## Installation et démarrage

```bash
# Cloner le projet
git clone https://github.com/Belvinabmc/-liveroo-.git
cd liveroo

# Installer les dépendances
npm install

# Démarrer le serveur de développement
npm start

# Lancer les tests
npm test
```

## Équipe de développement

- **Product Owner** : Christiana
- **Scrum Master** : [À définir]
- **Développeurs** : [Équipe EPSI]

## Liens utiles

- [Board Kanban](https://github.com/users/Belvinabmc/projects/2/views/2)
- [Issues](https://github.com/Belvinabmc/-liveroo-/issues)
- [Règles d'équipe](./TEAMS_RULES.md)

---

✍️ _christiana_ : Équipe de projet Liverooo (atelier collaboration EPSI)
