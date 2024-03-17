import { When, Then } from '@badeball/cypress-cucumber-preprocessor';

When('I search for {string} in the menu', (value) => {
	cy.get(`input[data-id^="filter-input"]`)
		.clear()
		.type(value + '{enter}');
});

When('The {string} table should {string}', (tableName, assertion) => {
	cy.get(`table[data-list_id="${tableName}"]`, { timeout: 60000 }).should(assertion.replaceAll(' ', '.'));
});
