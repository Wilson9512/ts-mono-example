module.exports = {
  root: true,
  extends: '@react-native',
  parser: '@babel/eslint-parser',
  parserOptions: {
    requireConfigFile: false,
  },
  plugins: ['react'],
  rules: {
    '@typescript-eslint/no-shadow': 'off',
    'no-shadow': 'off',
    'no-undef': 'off',
    'react/react-in-jsx-scope': 'off',
    'react-native/no-inline-styles': 'off',
    'react-hooks/exhaustive-deps': 0,
    'react/no-unstable-nested-components': 'off',
  },
};
