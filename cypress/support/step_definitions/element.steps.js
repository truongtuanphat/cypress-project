import { When, Then, Given } from "@badeball/cypress-cucumber-preprocessor";

When('I click element with text {string}', (text) => {
  cy.contains(text).click()
})