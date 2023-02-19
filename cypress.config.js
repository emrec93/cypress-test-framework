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
    CARD_NAME: "John Doe",
    CARD_EXP: "07/29",
    CARD_CVV: "123",
    EMAIL: "test@test.com",
    FIRST_NAME: "John",
    LAST_NAME: "Doe",
    ADDRESS: "Some Address",
    CITY: "London",
    POST_CODE: "SW20 ABC",
    PHONE_NO: "07777777777",
  },
});
