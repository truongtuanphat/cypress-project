import { When, Then, Given } from "@badeball/cypress-cucumber-preprocessor";

const baseUrl = Cypress.env('baseUrl')

Then('I am on the {string} page', (path) => {
  cy.url().should('contain', path)
})

Given('I navigate to the {string} page', (path) => {
  cy.visit(`${baseUrl}/sit/#/${path}`)
})