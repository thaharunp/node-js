

read DataTransfer.txt and write data in user text-using syncBuiltinESMExports

import fs from 'fs'
let data=fs.readFileSync('data'.'txt','utf-8')
console.log(data)
fs.writeFileSync('data'.'txt',data)
console.log("data written successfully")

