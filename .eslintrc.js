module.exports = {
  extends: [
    'airbnb-typescript',
    'prettier',
    'prettier/@typescript-eslint',
    'prettier/react',
  ],

  parserOptions: {
    project: ['./tsconfig.json'],
    tsconfigRootDir: __dirname,
    sourceType: 'module',
    createDefaultProgram: true,
  },
  plugins: ['react-hooks'],
  rules: {
    'react/prop-types': 0,
    'react/jsx-props-no-spreading': [
      0,
      {
        custom: 'ignore',
      },
    ],
    'import/prefer-default-export': 0,
    'react/button-has-type': 0,
    '@typescript-eslint/naming-convention': 0,
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error',
    'import/extensions': 1,
    'no-underscore-dangle': [
      'error',
      {
        allowAfterThis: true,
        allow: ['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__', '__INITIAL_STATE__'],
      },
    ],
  },
  ignorePatterns: ['.eslintrc.js'],
  globals: {
    caches: false,
    fetch: false,
  },
}
