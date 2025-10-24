// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************

// Custom command to wait for API calls
Cypress.Commands.add('waitForApi', (alias) => {
  cy.wait(alias);
});

// Custom command to mock API responses
Cypress.Commands.add('mockApi', (method, url, response) => {
  cy.intercept(method, url, response).as('mockApi');
});

// Custom command to clear all filters
Cypress.Commands.add('clearFilters', () => {
  cy.get('input[type="text"]').clear();
  cy.get('select').first().select('Toutes les cuisines');
  cy.get('select').eq(1).select('Tous les délais');
});

// Custom command to check if element is visible and contains text
Cypress.Commands.add('shouldBeVisibleAndContain', (selector, text) => {
  cy.get(selector).should('be.visible').and('contain', text);
});

// Custom command to fill form with data
Cypress.Commands.add('fillForm', (formData) => {
  Object.keys(formData).forEach(key => {
    cy.get(`[name="${key}"]`).type(formData[key]);
  });
});

// Custom command to check responsive design
Cypress.Commands.add('checkResponsive', (width, height) => {
  cy.viewport(width, height);
  cy.get('body').should('be.visible');
});

// Custom command to simulate slow network
Cypress.Commands.add('simulateSlowNetwork', () => {
  cy.intercept('**', (req) => {
    req.reply((res) => {
      res.delay(2000);
    });
  });
});
