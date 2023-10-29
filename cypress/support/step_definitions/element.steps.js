import { When, Then } from '@badeball/cypress-cucumber-preprocessor';

When('I click element with text {string}', (text) => {
	cy.contains(text).click();
});

When('I click search button', () => {
	cy.get('.anticon-search').click();
});
