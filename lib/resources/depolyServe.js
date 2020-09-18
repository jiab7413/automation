// //连接服务
const { NodeSSH } = require('node-ssh')
const node_ssh = new NodeSSH();
const {
  log,
  success,
  info,
  error,
  underline
} = require('./operationTips');
const connectSSh =  async (serveInfo) => {
  try {
    info('ssh正在连接' + serveInfo.host)
    await node_ssh.connect(serveInfo)
    success('ssh连接' + serveInfo.host + '成功')
  }catch (e) {
    error('ssh连接' + serveInfo.host + '失败')
  }
};
const checkConnect = ( config, env) => {
  const connectKeylist = [
    'name',
    'host',
    'port',
    'username',
    'psaaword',
    'targetFile',
    'deployDir',
    'releaseDir',
  ]
  if (config) {
    connectKeylist.forEach( item => {
      if (!config[item] || !config[item] === '/') {
        error(`${underline(`${item}`)} ${underline(`${item}`)}  配置异常`)
      }
    })
  } else {
    error(`参数配置异常`)
  }
}
module.exports = checkConnect
