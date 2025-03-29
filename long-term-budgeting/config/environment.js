module.exports = function(environment) {
  let ENV = {
    modulePrefix: 'long-term-budgeting',
    environment,
    rootURL: '/',
    locationType: 'auto',

    EmberENV: {
      EXTEND_PROTOTYPES: {
        Date: false
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
    }
  };

  if (environment === 'development') {
    // Enable debugging options in development
    ENV.APP.LOG_ACTIVE_GENERATION = true;
    ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Test-specific settings
    ENV.locationType = 'none';
    ENV.APP.rootElement = '#ember-testing';
    ENV.APP.autoboot = false;
  }

  if (environment === 'production') {
    // Production-specific settings
  }

  return ENV;
};