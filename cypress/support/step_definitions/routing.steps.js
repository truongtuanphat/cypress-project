import { When, Then, Given } from "@badeball/cypress-cucumber-preprocessor";

Given('I login with default user', () => {
  cy.visit(Cypress.env('baseUrl'))
  cy.login(Cypress.env('email'),Cypress.env('password'))
})