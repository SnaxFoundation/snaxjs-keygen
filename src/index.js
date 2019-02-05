const Keystore = require('./keystore')
const Keygen = require('./keygen')

const ecc = require('snaxjs-ecc')

module.exports = {
  Keystore,
  Keygen,
  modules: {
    ecc
  }
}