import { defineConfig } from 'eslint-define-config';

export default defineConfig({
  languageOptions: {
    parser: '@typescript-eslint/parser', // Menentukan parser untuk TypeScript
    parserOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
      ecmaFeatures: {
        jsx: true,
      },
      project: './tsconfig.json', // Menyediakan tsconfig untuk TypeScript
    },
  },
  extends: [
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'eslint:recommended',
    'plugin:jsx-a11y/recommended',
    'airbnb',
    'airbnb-typescript',
    'plugin:import/recommended',
    'plugin:simple-import-sort/recommended',
    'plugin:tailwindcss/recommended',
  ],
  rules: {
    'prettier/prettier': [
      'error',
      { singleQuote: true, semi: false, endOfLine: 'auto' },
    ],
    '@typescript-eslint/no-unused-vars': 'warn',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    'no-console': 'warn',
    'react/jsx-filename-extension': ['warn', { extensions: ['.jsx', '.tsx'] }],
    'react/prop-types': 'off',
    'import/no-extraneous-dependencies': 'warn',
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    'react/jsx-no-constructed-context-values': 'off',
    'react/function-component-definition': 'off',
    'tailwindcss/no-custom-classname': 'off',
    'no-param-reassign': 'warn',
    'consistent-return': 'off',
    'no-unused-vars': 'warn',
  },
  settings: {
    react: {
      version: 'detect', // Secara otomatis mendeteksi versi React yang digunakan
    },
  },
});
