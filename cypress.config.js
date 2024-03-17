const { defineConfig } = require('cypress');
const preprocessor = require('@badeball/cypress-cucumber-preprocessor');
const browserify = require('@badeball/cypress-cucumber-preprocessor/browserify');

async function setupNodeEvents(on, config) {
	// This is required for the preprocessor to be able to generate JSON reports after each run, and more,
	await preprocessor.addCucumberPreprocessorPlugin(on, config);
	on('file:preprocessor', browserify.default(config));
	return config;
}

module.exports = defineConfig({
	projectId: 'c8ue4u',
	// Config cypress here
	defaultCommandTimeout: 10000,
	watchForFileChanges: false,
	viewportWidth: 1920,
	viewportHeight: 1080,
	defaultCommandTimeout: 10000,
	includeShadowDom: true,
	env: {
		baseUrl: 'https://cscdevqa.service-now.com',
		username: 'autotest.user@csc.com',
		password: 'Auto@1234',
	},

	e2e: {
		setupNodeEvents,
		specPattern: 'cypress/e2e/*/*.feature',
	},
});
