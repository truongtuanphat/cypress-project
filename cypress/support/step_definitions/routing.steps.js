import { When, Then, Given } from "@badeball/cypress-cucumber-preprocessor";

When('I open web application', () => {
  cy.visit(Cypress.env('baseUrl'))
})
