import { When, Then, Given } from "@badeball/cypress-cucumber-preprocessor";

Then('I am on the {string} page', (path) => {
  cy.url().should('contain', path)
})