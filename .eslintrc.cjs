module.exports = {
	env: { browser: true, es2020: true, Node: true },
	extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'plugin:react-hooks/recommended'],
	parser: '@typescript-eslint/parser',
	parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
	plugins: ['react-refresh'],
	rules: {
		'react-refresh/only-export-components': 'warn',
		'comma-dangle': 'off',
		'@typescript-eslint/comma-dangle': 'off'
	}
};
