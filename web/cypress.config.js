const { defineConfig } = require("cypress");

module.exports = defineConfig({
  retries:{ "runMode": 2, "openMode": 1},
  videoUploadOnPasses:true,
  video:true,
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    reportPageTitle: 'Drata Web Test',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: true,
  },
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      // implement node event listeners here
    },
  },
});
