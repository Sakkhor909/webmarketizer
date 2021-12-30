'use strict';

module.exports = function (environment) {
  let ENV = {
    modulePrefix: 'web-marketizer',
    environment,
    contentSecurityPolicy: {
      'script-src': "'self' 'unsafe-eval' apis.google.com",
      'frame-src': "'self' https://*.firebaseapp.com",
      'connect-src': "'self' wss://*.firebaseio.com https://*.googleapis.com",
    },
    rootURL: '/',
    locationType: 'auto',
    // firebase: 'https://YOUR-FIREBASE-NAME.firebaseio.com/',
    // firebase: {
    //   apiKey: 'AIzaSyC5JwEyipD3VOY8e6AMnE1DvFkNz_d44Yo',
    //   authDomain: 'https://web-marketizer.firebaseio.com',
    //   databaseURL:
    //     'https://web-marketizer-default-rtdb.asia-southeast1.firebasedatabase.app',
    //   projectId: 'web-marketizer',
    //   storageBucket: 'web-marketizer.appspot.com',
    //   messagingSenderId: '674296547873',
    //   appId: '1:674296547873:web:2999c2cfb64de038ec3160',
    //   measurementId: 'G-XC2EF96PQY',
    // },
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. EMBER_NATIVE_DECORATOR_SUPPORT: true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false,
      },
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    },
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
    ENV.APP.autoboot = false;
  }

  if (environment === 'production') {
    // here you can enable a production-specific feature
  }

  return ENV;
};
