import { When, Then } from "@badeball/cypress-cucumber-preprocessor";

When('I click the cell in row {int} and column {string}', (rowIndex, columnName) => {
  cy.contains('th', columnName).invoke('index').then((columnIndex) => {
    cy.get('tr').eq(rowIndex + 1).find('td').eq(columnIndex).should('be.visible').click();
  });
  
  // cy.get('ant-table-thead tr th')
})