module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'airbnb', 'prettier'],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  plugins: ['prettier', 'prefer-arrow-functions'],
  rules: {
    'prettier/prettier': 'error',
    'import/prefer-default-export': 'off',
    'no-await-in-loop': 'off',
    'no-continue': 'off',
    'no-restricted-syntax': 'off',
    'import/extensions': 'off',
    'no-plusplus': 'off',
    'react/react-in-jsx-scope': 'off',
    'jsx-a11y/html-has-lang': 'off',
    'react/no-unknown-property': 'off',
    'react/function-component-definition': 'off'
  }
};
