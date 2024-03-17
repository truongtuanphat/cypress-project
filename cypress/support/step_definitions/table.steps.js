import { When, Then } from '@badeball/cypress-cucumber-preprocessor';

// When('I click the cell in row {int} and column {string}', (rowIndex, columnName) => {
// 	cy.contains('th', columnName)
// 		.invoke('index')
// 		.then((columnIndex) => {
// 			cy.get('tr')
// 				.eq(rowIndex + 1)
// 				.find('td')
// 				.eq(columnIndex)
// 				.should('be.visible')
// 				.click();
// 		});
// });

Then('I wait for the table to show', () => {
	cy.intercept(`/api/now/ui/page_timing/*`).as('completedLoadingTable');
	cy.wait('@completedLoadingTable', { timeout: 60000 });
	cy.get(`button[aria-label="Response Time"]`).should('exist');
});
