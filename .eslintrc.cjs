module.exports = {
  root: true,
  env: { node: true, browser: true, es2024: true },
  extends: [
    'eslint:recommended',
    'plugin:import/recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    'plugin:react-redux/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:prettier/recommended',
    'stylelint',
    'prettier',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: {
    parser: ['@babel/eslint-parser'],
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  settings: {
    react: { version: '18.2' },
    'import/resolver': { node: true },
    'import/extensions': ['.js', '.jsx'],
    'import/ignore': ['.scss', '.less', '.css'],
  },
  plugins: ['react-refresh', 'jsx-a11y', 'react-redux'],
  rules: {
    'no-console': 0,
    'react/prop-types': 0,
    'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
    'react/jsx-filename-extension': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'sort-imports': [
      'error',
      {
        ignoreCase: true,
        ignoreDeclarationSort: true,
      },
    ],
    'no-unused-vars': 'off',
    'import/order': [
      'error',
      {
        'newlines-between': 'always',
        groups: [
          'builtin',
          'external',
          'internal',
          ['parent', 'sibling', 'index', 'object', 'type', 'unknown'],
        ],
        pathGroups: [
          {
            pattern: 'components',
            group: 'internal',
          },
          {
            pattern: 'common',
            group: 'internal',
          },
          {
            pattern: 'routes/ **',
            group: 'internal',
          },
          {
            pattern: 'assets/**',
            group: 'internal',
            position: 'after',
          },
        ],
        pathGroupsExcludedImportTypes: ['internal'],
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
  },
  globals: {
    getApp: false,
    Page: false,
    wx: false,
    App: false,
    getCurrentPages: false,
    Component: false,
  },
};
