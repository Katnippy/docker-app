module.exports = {
  'env': {
    'browser': true,
    'es2021': true,
    'node': true,
  },
  'extends': 'eslint:recommended',
  'overrides': [
    {
      'env': {
        'node': true
      },
      'files': [
        '.eslintrc.{js,cjs}'
      ],
      'parserOptions': {
        'sourceType': 'script'
      }
    }
  ],
  'parserOptions': {
    'ecmaVersion': 'latest',
    'sourceType': 'module'
  },
  plugins: [
    '@stylistic'
  ],
  'rules': {
    'indent': [
      'error',
      2
    ],
    'linebreak-style': [
      'error',
      'unix'
    ],
    'quotes': [
      'error',
      'single'
    ],
    'semi': [
      'error',
      'always'
    ],
    'eqeqeq': 'error', // 1
    'no-trailing-spaces': 'error', // 2
    'object-curly-spacing': [ // 3
      'error',
      'always'
    ],
    'arrow-spacing': [ // 4
      'error',
      { 'before': true, 'after': true }
    ],
    'no-console': 0,
    '@stylistic/arrow-parens': 'error',
  }
};
