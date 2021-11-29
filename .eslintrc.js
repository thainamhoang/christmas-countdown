module.exports = {
    env: {
        browser: true,
        node: true,
        es6: true,
    },
    parser: 'babel-eslint',
    parserOptions: {
        sourceType: 'module',
        allowImportExportEverywhere: true,
    },
    plugins: ['react'],
    ecmaFeatures: {
        arrowFunctions: true,
        binaryLiterals: true,
        blockBindings: true,
        classes: true,
        defaultParams: true,
        destructuring: true,
        forOf: true,
        generators: true,
        modules: true,
        objectLiteralComputedProperties: true,
        objectLiteralDuplicateProperties: true,
        objectLiteralShorthandMethods: true,
        objectLiteralShorthandProperties: true,
        octalLiterals: true,
        regexUFlag: true,
        regexYFlag: true,
        spread: true,
        superInFunctions: true,
        templateStrings: true,
        unicodeCodePointEscapes: true,
        globalReturn: true,
        jsx: true,
    },
    settings: {
        'import/resolver': {
            alias: {
                map: [
                    // And all your import aliases
                    ['@colors', './src/colors'],
                    ['@components/*', './src/components/*'],
                    ['@constants', './src/constants'],
                    ['@hooks', './src/hooks'],
                    ['@images', './src/images'],
                    ['@layouts/*', './src/layouts/*'],
                ],
                extensions: ['.ts', '.js', '.jsx', '.json'],
            },
        },
    },
};
