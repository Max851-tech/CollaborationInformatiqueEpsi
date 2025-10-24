// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands';

// Alternatively you can use CommonJS syntax:
// require('./commands')

// Hide fetch/XHR requests from command log
Cypress.on('window:before:load', (win) => {
  // Remove fetch from window to avoid network requests
  delete win.fetch;
});

// Add custom commands
Cypress.Commands.add('login', (email, password) => {
  cy.session([email, password], () => {
    cy.visit('/login');
    cy.get('input[name="email"]').type(email);
    cy.get('input[name="password"]').type(password);
    cy.get('button[type="submit"]').click();
    cy.url().should('not.include', '/login');
  });
});

Cypress.Commands.add('createTeamOrder', (orderData) => {
  cy.visit('/team-order');
  cy.get('input[name="name"]').type(orderData.name);
  cy.get('input[name="budget"]').type(orderData.budget);
  cy.get('input[name="deadline"]').type(orderData.deadline);
  
  if (orderData.participants) {
    orderData.participants.forEach((participant, index) => {
      if (index > 0) {
        cy.contains('Ajouter un participant').click();
      }
      cy.get(`input[placeholder="Participant ${index + 1}"]`).type(participant);
    });
  }
  
  cy.get('button[type="submit"]').click();
  cy.contains('Commande créée avec succès').should('be.visible');
});
