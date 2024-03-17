import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

Given('I login to system with default user', () => {
	cy.logInToItilWithDefaultUser();
});
