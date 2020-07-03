module.exports = {
  root: true,
  env: {
    node: true,
  },
  globals: {
      d3: true
  },
  'extends': [
    'plugin:vue/essential',
    'eslint:recommended'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-unused-vars': 'off', // 定义但是未使用
    // 'no-undef': 'error', // undefined 检查
    'no-constant-condition': 'off'
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
