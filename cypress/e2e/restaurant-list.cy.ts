describe('Restaurant List Page', () => {
  beforeEach(() => {
    cy.visit('/restaurants');
  });

  it('should display the restaurant list page', () => {
    cy.contains('Restaurants disponibles').should('be.visible');
    cy.get('.restaurants-grid').should('be.visible');
  });

  it('should display restaurants', () => {
    cy.get('.restaurant-card').should('have.length.greaterThan', 0);
    cy.get('.restaurant-card').first().should('contain', 'Pizza Palace');
  });

  it('should filter restaurants by cuisine', () => {
    cy.get('select').first().select('Italien');
    cy.get('.restaurant-card').should('contain', 'Italien');
  });

  it('should filter restaurants by delivery time', () => {
    cy.get('select').eq(1).select('Rapide (< 15 min)');
    cy.get('.restaurant-card').should('have.length.greaterThan', 0);
  });

  it('should search restaurants', () => {
    cy.get('input[type="text"]').type('Pizza');
    cy.get('.restaurant-card').should('contain', 'Pizza');
  });

  it('should navigate to team order page', () => {
    cy.get('.restaurant-card').first().find('a').click();
    cy.url().should('include', '/team-order');
  });
});
