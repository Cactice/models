const isProd = process.env.NODE_ENV === 'production';
module.exports = {
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.node = {
        fs: 'empty',
      };
    }
    return config;
  },
  basePath: isProd ? '/models' : '',
  assetPrefix: isProd ? '/models/' : '',
  parser: '@typescript-eslint/parser',
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
  ],
  plugins: ['@typescript-eslint', 'react'],
  rules: {
    'react/react-in-jsx-scope': 'off',
  },
  globals: {
    React: 'writable',
  },
};
