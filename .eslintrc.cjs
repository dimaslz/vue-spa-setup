module.exports = {
	env: {
		browser: true,
		node: true,
		"vue/setup-compiler-macros": true,
	},
	root: true,
	parser: "vue-eslint-parser",
	parserOptions: {
		parser: "@typescript-eslint/parser",
	},
	extends: [
		"plugin:vue/strongly-recommended",
		"eslint:recommended",
		"plugin:tailwindcss/recommended",
		"@vue/typescript/recommended",
		"plugin:vue/vue3-recommended",
		"plugin:vue/base",
		"prettier",
	],
	plugins: ["@typescript-eslint", "prettier", "simple-import-sort"],
	rules: {
		"prettier/prettier": "error",
		// not needed for vue 3
		"vue/no-multiple-template-root": "off",
		"vue/multi-word-component-names": "off",
		"vue/script-setup-uses-vars": "error",
		"@typescript-eslint/no-explicit-any": "warn",

		"simple-import-sort/imports": "error",
		"simple-import-sort/exports": "error",

		"tailwindcss/no-custom-classname": [
			"warn",
			{
				// "callees": Array<string>,
				// "config": <string>|<object>,
				// "cssFiles": Array<string>,
				// "cssFilesRefreshRate": <number>,
				// "skipClassAttribute": <boolean>,
				// "tags": Array<string>,
				// "whitelist": Array<string>,
				whitelist: ["text-.*", "bg-.*"],
			},
		],
	},
};
