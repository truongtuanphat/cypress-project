import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

const defaultEmail = Cypress.env('email')
const defaultPassword = Cypress.env('password')

Given('I log in to portal with default user', () => {
  cy.logInToPortal(defaultEmail, defaultPassword)
})