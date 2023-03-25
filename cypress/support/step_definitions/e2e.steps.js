import { When, Then, Given } from "@badeball/cypress-cucumber-preprocessor";

const defaultEmail = Cypress.env('email')
const defaultPassword = Cypress.env('password')

Given('I login into portal with default user', () => {
  cy.loginIntoPortal(defaultEmail, defaultPassword)
})