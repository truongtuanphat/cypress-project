import { When, Then } from '@badeball/cypress-cucumber-preprocessor';

When('I search for {string} in the menu', (value) => {
	cy.get(`input[data-id^="filter-input"]`)
		.clear()
		.type(value + '{enter}');
});
