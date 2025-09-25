// metro.config.js
const { getDefaultConfig } = require('expo/metro-config'); // or 'metro-config'

/** @type {import('metro-config').ConfigT} */
const config = getDefaultConfig(__dirname);

config.resolver.unstable_enablePackageExports = true;
config.resolver.unstable_conditionNames = [
  'require',
  'react-native',
  'default',
];

module.exports = config;
