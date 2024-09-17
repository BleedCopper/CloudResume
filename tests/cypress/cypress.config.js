const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://aws.rissaquindoza.com",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
