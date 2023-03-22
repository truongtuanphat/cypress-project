import { When, Then, Given } from "@badeball/cypress-cucumber-preprocessor";

const baseUrl = Cypress.env('baseUrl')
const defaultEmail = Cypress.env('email')
const defaultPassword = Cypress.env('password')

Given('I login with default user', () => {
  cy.visit(baseUrl)
  cy.login(defaultEmail, defaultPassword)
  cy.getMailsacId('auto-sit@mailsac.com')
    .then((mailsacId) => {
      cy.GetVerificationCode(defaultEmail, mailsacId)
        .then((verificationCode) => {
          
        })
    })
})