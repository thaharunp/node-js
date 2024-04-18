import fs from 'fs'

fs.readFile('data'.'txt','ult-8',(err,data)=>{
    if(err)throw err
    console.log(data)
})