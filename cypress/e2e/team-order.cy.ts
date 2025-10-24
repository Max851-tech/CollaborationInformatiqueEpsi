describe('Team Order Page', () => {
  beforeEach(() => {
    cy.visit('/team-order');
  });

  it('should display the team order form', () => {
    cy.contains('Créer une commande d\'équipe').should('be.visible');
    cy.get('form').should('be.visible');
  });

  it('should create a team order with valid data', () => {
    cy.get('input[name="name"]').type('Déjeuner équipe Dev');
    cy.get('input[name="budget"]').type('150');
    cy.get('input[name="deadline"]').type('2025-12-31T14:00');
    
    cy.get('input[placeholder="Participant 1"]').type('Alice');
    
    cy.get('button[type="submit"]').click();
    
    cy.contains('Commande créée avec succès').should('be.visible');
  });

  it('should validate required fields', () => {
    cy.get('button[type="submit"]').click();
    
    cy.contains('Le nom de la commande est requis').should('be.visible');
    cy.contains('Le budget est requis').should('be.visible');
    cy.contains('La deadline est requise').should('be.visible');
  });

  it('should validate budget constraints', () => {
    cy.get('input[name="budget"]').type('10');
    cy.get('button[type="submit"]').click();
    
    cy.contains('Le budget minimum est de 20€').should('be.visible');
  });

  it('should add and remove participants', () => {
    cy.get('input[placeholder="Participant 1"]').type('Alice');
    
    cy.contains('Ajouter un participant').click();
    cy.get('input[placeholder="Participant 2"]').type('Bob');
    
    cy.get('button').contains('Minus').click();
    cy.get('input[placeholder="Participant 2"]').should('not.exist');
  });

  it('should display budget summary', () => {
    cy.get('input[name="budget"]').type('100');
    cy.get('input[placeholder="Participant 1"]').type('Alice');
    cy.get('input[placeholder="Participant 2"]').type('Bob');
    
    cy.contains('Budget maximum: 100€').should('be.visible');
    cy.contains('Participants: 2').should('be.visible');
    cy.contains('Budget par personne: 50.00€').should('be.visible');
  });
});
