const req = require.context('.', false, /^((?!index).)*\.js$/)

req.keys().forEach((key) => {
  const wrapperName = key.replace(/^\.\/([^.]+)\.js$/, '$1')
  module.exports[wrapperName] = req(key).default
})
