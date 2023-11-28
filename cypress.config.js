const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl:('https://ej2.syncfusion.com/showcase/angular/appointmentplanner/#/dashboard')
  },
});
