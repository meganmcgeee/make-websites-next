module.exports = {
  extends: [
    'airbnb',
    'makeapps',
  ],
  env: {
    browser: true,
  },
  rules: {
    'fp/no-mutation': ['error', {
      commonjs: true,
      exceptions: [
        { property: 'propTypes' },
      ],
    }],
    'react/jsx-filename-extension': ['error', { extensions: ['.js', '.jsx'] }],
    'import/no-extraneous-dependencies': 0,
  }
};