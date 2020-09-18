const color = require('colors')
module.exports = {
  log: function (text) {
    console.log(text.yellow)
  },
  logB: function (text) {
    console.log(text.black)
  },
  info: function (text) {
    console.log(text.blue)
  },
  success: function (text) {
    console.log(text.green)
  },
  error: function (text) {
    console.log(text.red)
  },
  underline: function (text) {
    return text.underline
  }
}
