const req = require.context('.', true, /\.\/.+\/selectors\.js$/)

req.keys().forEach((key) => {
  const actions = req(key)

  Object.keys(actions).forEach((name) => {
    module.exports[name] = actions[name]
  })
})
