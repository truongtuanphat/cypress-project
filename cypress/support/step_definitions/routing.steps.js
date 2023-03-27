import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

const baseUrl = Cypress.env('baseUrl')
const baseApi = Cypress.env('baseApi')

Then('I am on the {string} page', (path) => {
  cy.url().should('contain', path)
})

Given('I navigate to the {string} page', (path) => {
  cy.intercept('POST', `${baseApi}/user/get/info`).as('authentication')
  cy.visit(`${baseUrl}/sit/#/${path}`)
  cy.wait('@authentication').its('response.statusCode').then(value => {
    if (value === 401) {
      Cypress.session.clearAllSavedSessions()
      // assert.fail('Session expired\nCleared all saved sessions automatically\nJust retry')
      document.getElementsByClassName('clear-sessions').click()
    }
  })
})