module.exports = {
  env: {
    commonjs: true,
    es6: true,
    node: true
  },
  extends: ['prettier', 'standard'],
  plugins: ['prettier'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parserOptions: {
    ecmaVersion: 2018
  },
  rules: {
    'prettier/prettier': 'error',
    semi: [2, 'always'],
    'no-unused-expressions': ['error', { allowTaggedTemplates: true }],
    'comma-dangle': ['error', 'never'],
    'arrow-parens': ['error', 'as-needed'],
    'no-confusing-arrow': ['error', { allowParens: false }]
  }
};
