module.exports = (baseConfig, env, defaultConfig) => {
  defaultConfig.resolve.modules.push('node_modules')
  defaultConfig.module.rules.push({
    test: /\.jsx?$/,
    exclude: /node_modules/,
    use: 'babel-loader',
  })

  return defaultConfig
}
