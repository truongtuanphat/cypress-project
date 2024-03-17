import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

const baseUrl = Cypress.env('baseUrl');
const baseApi = Cypress.env('baseApi');

Then('I am on the {string} page', (path) => {
	cy.url().should('contain', path);
});
