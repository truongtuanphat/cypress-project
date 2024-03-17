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

import './commands';
import 'cypress-iframe';

const baseUrl = Cypress.env('baseUrl');
const defaultUsername = Cypress.env('username');
const defaultPassword = Cypress.env('password');

Cypress.Commands.add('logInToItilWithDefaultUser', () => {
	cy.visit(baseUrl);
	cy.intercept('GET', `/api/now/ui/polaris/menu`).as('completedLoadingPage');
	cy.login(defaultUsername, defaultPassword);
	cy.wait('@completedLoadingPage', { timeout: 60000 });
});
