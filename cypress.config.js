const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "https://cornerstone-light-demo.mybigcommerce.com/",
    watchForFileChanges: false,
    video: false,
  },
  env: {
    CARD_NUMBER: "4111 1111 1111 1111",
  },
});
