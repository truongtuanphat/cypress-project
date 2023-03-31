import { When, Then } from "@badeball/cypress-cucumber-preprocessor";

When('I click the cell in row {int} and column {string}', (rowIndex, columnName) => {
  cy.contains('th', columnName).invoke('index').then((columnIndex) => {
    cy.get('tr').eq(rowIndex + 1).find('td').eq(columnIndex).should('be.visible').click();
  });
})

Then('The row with text {string} in table should have below values:', (text, datatable) => {
  datatable.hashes().forEach(data => {
    cy.contains(`td[class='ant-table-cell']`, text).siblings().should('contain', data.value)
  });
})