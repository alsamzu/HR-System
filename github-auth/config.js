var config = {
  development: {
    client_id: '78faf56f4801083f007d',
    redirect_uri: 'http://127.0.0.1:9966',
    gatekeeper: 'http://127.0.0.1:9999'
  },
  production: {}
}

module.exports = config[process.env.NODE_ENV]
