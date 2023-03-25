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

// Import commands.js using ES2015 syntax:
import './commands'

// Alternatively you can use CommonJS syntax:
// require('./commands')

const baseUrl = Cypress.env('baseUrl')
const defaultEmail = Cypress.env('email')
const defaultPassword = Cypress.env('password')

beforeEach(() => {
  cy.logInToPortalWithDefaultUserSession(defaultEmail, defaultPassword)
})

Cypress.Commands.add('logInToPortal', (email, password) => {
  cy.getAllMessageIds(email)
    .then(listId => {
      for (const id of listId) {
        cy.deleteAllMails(email, id)
      }
    })
  cy.visit(baseUrl + '/sit/#/user/login/tenant')
  cy.login(email, password)
  cy.getmessageId(email)
    .then(messageId => {
      cy.getVerificationCode(email, messageId)
        .then(verificationCode => {
          cy.enterInputInSubUrl('.verifyInput', verificationCode)
          cy.clickElementInSubUrl('.verifyButton')
          cy.wait(1000).clickElementInSubUrl('#continue')
          cy.url({ timeout: 30000 }).should('contain', '/sit/#/home-page')
        })
    })  
})

Cypress.Commands.add('logInToPortalWithDefaultUserSession', (email, password) => {
  cy.session([email, password], () => {
    cy.logInToPortal(email, password)
  })
})