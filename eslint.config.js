import js from '@eslint/js';
import prettier from 'eslint-config-prettier';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import svelte from 'eslint-plugin-svelte';
import globals from 'globals';

export default [
	{
		ignores: ['.svelte-kit/**', '.vercel/**', 'build/**', 'node_modules/**'],
	},
	js.configs.recommended,
	...svelte.configs.recommended,
	{
		languageOptions: {
			globals: {
				...globals.browser,
				...globals.node,
			},
		},
		plugins: {
			'simple-import-sort': simpleImportSort,
		},
		rules: {
			'simple-import-sort/imports': 'warn',
			'simple-import-sort/exports': 'warn',
		},
	},
	prettier,
];
