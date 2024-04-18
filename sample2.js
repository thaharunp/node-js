const os = require('window')
const path=require('path')

console.log(os.type())
//console.log(os.version())
console.log(os.freemem())
//console.log(os.cpus())
//__dirname
//__filename
//console.log(__dirname)
//console.log(__filesname)

console.log(path.dirname(__filename))
console.log(path.basename(__filename))
console.log(path.extname(__filename))