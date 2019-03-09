const path = require('path')
const DotEnvPlugin = require('dotenv-webpack')
const modulesPath = path.resolve(__dirname, '../packages/client/src')

module.exports = ({ config, mode }) => {
  if (mode !== 'DEVELOPMENT') {
    config.plugins = config.plugins.filter(plugin => plugin.constructor.name !== 'UglifyJsPlugin')
  }

  const rules = config.module.rules
  const plugins = config.plugins

  rules.push({
    test: /\.scss$/,
    loaders: [
      'style-loader',
      'css-loader',
      {
        loader: 'postcss-loader',
        options: {
          plugins: () => [require('postcss-cssnext')()],
        },
      },
      {
        loader: 'sass-loader',
        options: {
          includePaths: [modulesPath],
        },
      },
    ],
    include: modulesPath,
  })

  plugins.push(
    new DotEnvPlugin({
      path: path.resolve(__dirname, '../packages/client/.env.develop'),
    }),
  )

  return config
}
