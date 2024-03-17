import { When, Then } from '@badeball/cypress-cucumber-preprocessor';

When('I click the {string} element', (element) => {
	cy.get(`[data-id="${element}"]`).click();
});

When('The {string} element should {string}', (element, assertion) => {
	cy.get(`[data-id="${element}"]`).should(assertion.replaceAll('.', ''));
});
