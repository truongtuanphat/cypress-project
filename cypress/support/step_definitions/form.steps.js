import { When, Then } from "@badeball/cypress-cucumber-preprocessor";

When('I select option {string} in the {string} dropdown', (option, name) => {
  cy.fixture('combobox.json').then(result => {
    cy.get(`input[id$='${result[name.replace(/ /g, '_').toLowerCase()]}']`).click()
    cy.get('.ant-select-item-option-content:visible').contains(option).click()
    cy.wait(500)
  })
})