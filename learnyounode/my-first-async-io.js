const fs=require('fs')
let file=process.argv[2]
fs.readFile(file,(err,filread)=>{
    let lines=filread.toString().split('\n').length-1;
    console.log(lines)
});