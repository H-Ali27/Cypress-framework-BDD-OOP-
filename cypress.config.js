const { defineConfig } = require("cypress");

const addCucumberPreprocessorPlugin = require("@badeball/cypress-cucumber-preprocessor");
const browserify = require("@badeball/cypress-cucumber-preprocessor/browserify");

async function setupNodeEvents(on, config) {
  // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
  await addCucumberPreprocessorPlugin.addCucumberPreprocessorPlugin(on, config);

  on("file:preprocessor", browserify.default(config));

  // Make sure to return the config object as it might have been modified by the plugin.
  return config;
}
module.exports = defineConfig({
  defaultCommandTimeout: 7000,
  retries: {
    runMode: 0 //rerun the failed test one more time
    },
    video: true,
    videoCompression: true,
  env:{
    url: "https://rahulshettyacademy.com"
  },
  projectId: "t1gzhf",

  e2e: {
    setupNodeEvents,
    specPattern: 'cypress/integration/examples/BDD/*.feature',
  },

});
