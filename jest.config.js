// https://facebook.github.io/jest/docs/en/configuration.html

'use strict'; // eslint-disable-line

const preset = require('@wearegenki/test/jest-preset'); // eslint-disable-line import/no-extraneous-dependencies

module.exports = {
  preset: '@wearegenki/test',
  coverageThreshold: {
    global: {
      branches: 0,
      functions: 0,
      lines: 0,
      statements: 0,
    },
  },
  projects: [
    // XXX: Manually list each package until they all have tests then use a glob to match
    // '<rootDir>/packages/*',
    '<rootDir>/packages/test',
    '<rootDir>/packages/test-vue',

    {
      displayName: 'global',

      testPathIgnorePatterns: [
        ...preset.testPathIgnorePatterns,
        '<rootDir>/packages/*',
      ],
    },
  ],
};
