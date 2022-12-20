const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "http://lojaebac.ebaconline.art.br/",
    viewportHeight: 1000,
    viewportWidth: 1500,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
