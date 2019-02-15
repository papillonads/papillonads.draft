const path = require('path')

const modulesPath = path.resolve(__dirname, '../packages/client/src')

module.exports = (config, env) => {
  if (env !== 'development') {
    config.plugins = config.plugins.filter(plugin => plugin.constructor.name !== 'UglifyJsPlugin')
  }

  const rules = config.module.rules

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

  return config
}
