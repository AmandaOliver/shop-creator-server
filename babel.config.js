const presets = [
  [
    '@babel/env',
    {
      targets: {
        browsers: ['Chrome >= 52', 'FireFox >= 44', 'Safari >= 7', 'Explorer 11', 'last 4 Edge versions'],
      },
    },
  ],
  '@babel/react',
  '@babel/flow',
]

const plugins = [
  '@babel/plugin-proposal-class-properties',
  '@babel/plugin-proposal-object-rest-spread',
  '@babel/plugin-proposal-export-default-from',
  '@babel/plugin-transform-runtime',
  'lodash',
]

const babelrcRoots = [
  '.', // Keep the root as a root
  './packages/*', // Also consider monorepo packages "root" and load their .babelrc files.
]

module.exports = { presets, plugins, babelrcRoots }
