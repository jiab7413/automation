const commander = require('commander')
const fs = require('fs')
const packageVersion = require('../package').version
module.exports = class Serve {
  constructor() {
    initInstruction()
    // reInstruction()
  }
  run(argv = []) {
    commander.parse(argv, { from: 'user' })
  }
}
// 初始化
const initInstruction = () => {
  commander
    .version(packageVersion, '-v, --version', '输出当前版本号')
    .helpOption('-h, --help', '获取帮助')
}
// 注册
// const reInstruction = () => {
//   const commandsPath = `${__dirname}/commands`
//   console.log(commandsPath)
//   fs.readdirSync(`${commandsPath}`)
// }
