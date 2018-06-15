const config = {
  all: {
    env: process.env.NODE_ENV || 'development',
    isDev: process.env.NODE_ENV !== 'production',
    host: process.env.HOST || 'localhost',
    port: process.env.PORT || 3000,
    isBrowser: typeof window !== 'undefined',
    isServer: typeof window === 'undefined',
    apiUrl: {
      v1: 'http://localhost:3000',
    },
  },
  test: {},
  development: {
    host: process.env.HOST || 'localhost',
    port: process.env.PORT || 3000,
  },
  staging: {},
  production: {
    host: process.env.HOST || 'localhost',
    port: process.env.PORT || 3000,
    apiUrl: {
      v1: 'https://api.watcode.net',
    },
  },
}

const combinedConfig = { ...config.all, ...config[config.all.env] }

Object.keys(combinedConfig).forEach((name) => {
  module.exports[name] = combinedConfig[name]
})
