import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import {defineConfig, globalIgnores} from 'eslint/config'
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";

export default defineConfig([
    globalIgnores(['dist']),
    {
        files: ['**/*.{js,ts,mts,cts,jsx,tsx}'],
        plugins: js,
        extends: [
            js.configs.recommended,
            reactHooks.configs['recommended-latest'],
            reactRefresh.configs.vite,
            tseslint.configs.recommended,
            pluginReact.configs.flat.recommended,
        ],
        settings: {react: {version: 'detect', jsxRuntime: 'automatic'}},
        languageOptions: {
            ecmaVersion: 2020,
            globals: globals.browser,
            parserOptions: {
                ecmaVersion: 'latest',
                ecmaFeatures: {jsx: true},
                sourceType: 'module',
            },
        },
        rules: {
            'no-unused-vars': ['warn', {varsIgnorePattern: '^[A-Z_]'}],
            'react/react-in-jsx-scope': 'off',
            'react-refresh/only-export-components': 'off',
        },
    },
])
