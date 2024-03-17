import { When, Then } from '@badeball/cypress-cucumber-preprocessor';
import '../commands.js';

Then('The {string} table should {string}', (tableName, assertion) => {
	cy.waitForTableLoaded();
	cy.iframe().find(`table[data-list_id="${tableName}"]`).should(assertion.replaceAll(' ', '.'));
});

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
