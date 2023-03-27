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
  defaultCommandTimeout: 10000,
  watchForFileChanges: false,

  env:{
    baseUrl: 'https://gtoportal-uat.capitaland.com',
    subUrl: 'https://gtoplatformuat.b2clogin.com',
    baseApi: 'https://api-gto-uat.capitaland.com/sit/api',
    email: 'gto-auto-sit@mailsac.com',
    password: '12351235T@m',

    tempMailHost: 'https://mailsac.com',
    mailsacKey: 'k_f3ElHHF9ALb34FnNW3K52eDxyUelntWtVe'
  },
  
  e2e:
  {
    setupNodeEvents,
    specPattern: 'cypress/e2e/*.feature'
  }
})
