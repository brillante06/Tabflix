module.exports = {
    parser: '@typescript-eslint/parser', // Specifies the ESLint parser
    extends: [
        'airbnb-base',
        // 'plugin:react/recommended',  // Uses the recommended rules from @eslint-plugin-react
        'plugin:@typescript-eslint/recommended', // Uses the recommended rules from @typescript-eslint/eslint-plugin
        // 'plugin:prettier/recommended',  // Enables eslint-plugin-prettier and displays prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
        'plugin:import/typescript',
        'plugin:react/recommended',
        'prettier',
    ],
    parserOptions: {
        ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
        sourceType: 'module', // Allows for the use of imports
        ecmaFeatures: {
            jsx: true, // Allows for the parsing of JSX
        },
    },
    rules: {
        'linebreak-style': 0,
        '@typescript-eslint/ban-types': 'off',
        'max-len': 0,
        'no-use-before-define': 'off',
        '@typescript-eslint/no-use-before-define': ['error'],
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        'no-console': 0,
        'import/prefer-default-export': 'off',
        'no-shadow': 'off',
        'comma-dangle': [
            'error',
            {
                arrays: 'always-multiline',
                objects: 'always-multiline',
                imports: 'always-multiline',
                exports: 'always-multiline',
                functions: 'ignore',
            },
        ],
        'comma-style': ['error', 'last'],
        'no-trailing-spaces': 'error',
        'object-property-newline': [
            'error',
            {
                allowAllPropertiesOnSameLine: false,
            },
        ],
        'no-unused-vars': 'off',
        'no-multiple-empty-lines': ['error', { max: 1, maxEOF: 1 }],
        'no-empty-function': 'error',
        'sort-imports': [
            'error',
            {
                ignoreCase: true,
                ignoreDeclarationSort: true,
                ignoreMemberSort: false,
                memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
            },
        ],
        'no-duplicate-imports': 'error',
        'no-nested-ternary': 'off',
        'object-curly-newline': [
            'error',
            {
                multiline: true,
                consistent: true,
            },
        ],
        'object-property-newline': 'error',
        'react/prop-types': 0,
        '@typescript-eslint/explicit-function-return-type': 0,
        'import/no-extraneous-dependencies': 0,
        semi: 0,
        'array-callback-return': 'warn',
        'import/extensions': [
            'off',
            'ignorePackages',
            {
                js: 'never',
                jsx: 'never',
                ts: 'never',
                tsx: 'never',
            },
        ],

        'eol-last': ['error', 'always'],
        'import/no-unresolved': 'off',
        '@typescript-eslint/member-delimiter-style': 0,
        '@typescript-eslint/no-unused-vars': 0,
        'import/no-cycle': 0,
        'no-console': ['error', { allow: ['warn', 'error'] }],
        'linebreak-style': 0,
        'max-len': 0,
        camelcase: 'off',
    },
    settings: {
        react: {
            version: 'detect', // Tells eslint-plugin-react to automatically detect the version of React to use
        },
        'import/resolver': {
            node: {
                paths: ['src'],
            },
        },
    },
    env: {
        browser: true,
        jest: true,
    },
};
