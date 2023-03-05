const { defineConfig } = require("cypress");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const browserify = require("@badeball/cypress-cucumber-preprocessor/browserify");

async function setupNodeEvents(on, config) {
  // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
  await preprocessor.addCucumberPreprocessorPlugin(on, config);
  on("file:preprocessor", browserify.default(config));
  return config;
}

module.exports = defineConfig({
  projectId: 'c8ue4u',
  // Config cypress here
  watchForFileChanges: false,

  env:{
    baseUrl: 'https://gtoportal-uat.capitaland.com/#/user/login/tenant',
    email: 'auto-sit@yopmail.com',
    password: '12351235T@m'
  },
  
  e2e:
  {
    setupNodeEvents,
    specPattern: 'cypress/e2e/*.feature'
  }
})
