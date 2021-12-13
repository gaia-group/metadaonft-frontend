module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  globals: {
    $crisp: 'readonly',
  },
  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module',
    ecmaVersion: 2018,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended',
    'prettier',
  ],
  plugins: ['prettier'],
  settings: {
    react: {
      version: 'detect',
    },
  },
  ignorePatterns: [
    'app/javascript/packs/*.js',
    'spec/cypress/chrome-extensions/**',
    'public/**',
    'tmp/**',
    'node_modules/**',
    'vendor/**',
  ],
  rules: {
    'prettier/prettier': 'error',
    semi: ['error', 'never'],
    quotes: ['error', 'single', { avoidEscape: true }],
    'no-debugger': 'warn',
    'no-console': 'warn',
    'no-unused-vars': [
      'warn',
      { argsIgnorePattern: '^_', varsIgnorePattern: '^_' },
    ],
    'react/no-array-index-key': 'warn',
    'react/destructuring-assignment': 'warn',
    'prefer-destructuring': 'warn',
    'react/jsx-fragments': [1, 'syntax'],
    'react/jsx-curly-brace-presence': [
      'warn',
      { props: 'never', children: 'ignore' },
    ],
    'func-style': [2, 'declaration'],
  },
}
