const { defineConfig } = require("cypress");

module.exports = {
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    env: {
      BASE_URL: "https://www.saucedemo.com/", 
      USER_NAME: "standard_user", 
      USER_PASSWORD: "secret_sauce"
    },
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
    // baseUrl: process.env.BASE_URL,
    chromeWebSecurity: false
  }
}

