'use strict';

const {
  DEFAULT_IGNORED_PROPERTIES,
} = require('eslint-plugin-ember/lib/rules/avoid-leaking-state-in-ember-objects');

module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      legacyDecorators: true,
    },
  },
  plugins: ['ember', 'prettier'],
  extends: [
    'eslint:recommended',
    'plugin:ember/recommended',
    'plugin:prettier/recommended',
    'prettier',
  ],
  env: {
    browser: true,
  },
  rules: {
    'prettier/prettier': ['error', { endOfLine: 'auto' }],
    'ember/avoid-leaking-state-in-ember-objects': [
      'error',
      [
        ...DEFAULT_IGNORED_PROPERTIES,
        'array',
        'of',
        'ignored',
        'properties',
        'persistenceSettings',
      ],
    ],
  },
  overrides: [
    // node files
    {
      files: [
        './.eslintrc.js',
        './.prettierrc.js',
        './.template-lintrc.js',
        './ember-cli-build.js',
        './testem.js',
        './blueprints/*/index.js',
        './config/**/*.js',
        './lib/*/index.js',
        './server/**/*.js',
      ],
      parserOptions: {
        sourceType: 'script',
      },
      env: {
        browser: false,
        node: true,
      },
      plugins: ['node'],
      extends: ['plugin:node/recommended'],
      rules: {
        // this can be removed once the following is fixed
        // https://github.com/mysticatea/eslint-plugin-node/issues/77
        'node/no-unpublished-require': 'off',
        'ember/avoid-leaking-state-in-ember-objects': [
          'error',
          [
            ...DEFAULT_IGNORED_PROPERTIES,
            'array',
            'of',
            'ignored',
            'properties',
            'persistenceSettings',
          ],
        ],
      },
    },
    {
      // test files
      files: ['tests/**/*-test.{js,ts}'],
      extends: ['plugin:qunit/recommended'],
    },
  ],
};
