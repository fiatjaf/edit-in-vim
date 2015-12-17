var fs = require('fs')
var spawnSync = require('child_process').spawnSync
var tmp = require('tmp')

tmp.setGracefulCleanup()

module.exports = function (base) {
  base = base || ''

  var tmpname = tmp.tmpNameSync({ template: '/tmp/tmp-XXXXXX' })
  fs.writeFileSync(tmpname, base)
  spawnSync('editor', [tmpname], {
    stdio: 'inherit'
  })
  res = fs.readFileSync(tmpname, 'utf-8')

  return res.trim()
}
