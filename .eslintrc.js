module.exports = {
  root: true,
  env: {
    browser: false,
    es2021: true,
    node: true,
    'react-native/react-native': true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:react/jsx-runtime',
    'plugin:@typescript-eslint/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['react', 'react-native', '@typescript-eslint', 'simple-import-sort', 'import', 'unused-import'],
  globals: {
    JSX: true,
  },
  rules: {
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-explicit-any': ['error'],
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        ignoreRestSiblings: true,
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
        args: 'after-used',
      },
    ],
    'import/first': 'warn',
    'import/newline-after-import': 'warn',
    'import/no-duplicates': 'error',
    'no-console': 'warn',
    'prefer-arrow-callback': ['warn', { allowNamedFunctions: true }],
    'react/display-name': 'off',
    'react-native/no-inline-styles': 'off',
    'react/jsx-indent-props': [2, 2],
    'react/jsx-max-props-per-line': [1, { maximum: 2 }],
    'react/no-array-index-key': 'warn',
    'react/prop-types': 0,
    semi: ['warn', 'always', { omitLastInOneLineBlock: true }],
    'simple-import-sort/exports': 'warn',
    'simple-import-sort/imports': 'warn',
    'unused-imports/no-unused-imports': 'error',
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.ts', '.tsx'],
      },
    },
    react: {
      version: 'detect',
    },
  },
};
