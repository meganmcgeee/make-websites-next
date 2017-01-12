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
    'react/jsx-sort-props': [2, {
      shorthandLast: true,
    }],
    'react/sort-prop-types': [2, {
      requiredFirst: true,
    }],
    'import/no-extraneous-dependencies': 0,
  }
};