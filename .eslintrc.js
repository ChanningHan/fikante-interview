module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: ['airbnb-base', 'plugin:prettier/recommended'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 12,
        sourceType: 'module',
    },
    plugins: ['@typescript-eslint'],
    rules: {
        'no-unused-vars': 'off',
        'no-console': 'off',
        'consistent-return': 'off',
        'no-plusplus': 'off',
        'no-unused-expressions': 'off',
        'no-param-reassign': 'off',
        'no-debugger': 'off',
        'no-bitwise': 'off',
        'no-continue': 'off',
        'prefer-const': 'off',
        'func-names': 'off',
        'no-shadow': 'off',
        'max-classes-per-file': 'off',
        'no-restricted-properties': 'off',
    },
};
