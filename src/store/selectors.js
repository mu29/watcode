const req = require.context('.', true, /\.\/.+\/selectors\.js$/)

req.keys().forEach((key) => {
  const selectors = req(key)

  Object.keys(selectors).forEach((name) => {
    module.exports[name] = selectors[name]
  })
})
