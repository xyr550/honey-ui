module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:vue/essential',
    'airbnb-base'
  ],
  parserOptions: {
    ecmaVersion: 13,
    sourceType: 'module'
  },
  plugins: [
    'vue'
  ],
  rules: {
    'linebreak-style': ['off', 'windows'],
    semi: ['off'],
    'comma-dangle': [2, 'never'],
    'comma-spacing': [2, { before: false, after: true }],
    indent: ['error', 2],
    'vue/comment-directive': 'off'
  }
};
