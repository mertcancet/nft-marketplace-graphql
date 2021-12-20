module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
    node: true,
  },
  plugins: ['prettier'],
  extends: ['next', 'next/core-web-vitals', 'prettier'],
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    'jsx-a11y/alt-text': 'off',
    'import/no-anonymous-default-export': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/display-name': 'off',
    'react/prop-types': 'off',
    'react-hooks/exhaustive-deps': 'warn',
    'no-unused-expressions': 'warn',
    'no-unused-labels': 'warn',
    'no-unused-vars': 'warn',
    'react/self-closing-comp': 'error',
    '@next/next/no-img-element': 'off',
    'no-undef': 'error',
    'prettier/prettier': 'error',
  },
}
