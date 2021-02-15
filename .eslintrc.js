module.exports = {
  extends: ['airbnb-typescript', 'prettier', 'prettier/@typescript-eslint'],
  parserOptions: {
    project: ['./tsconfig.json'],
    tsconfigRootDir: __dirname,
    sourceType: 'module',
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
  },
  ignorePatterns: ['.eslintrc.js'],
}
