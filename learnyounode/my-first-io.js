const fs=require('fs')
const fil=fs.readFileSync(process.argv[2])
let lines=fil.toString().split('\n').length-1;
console.log(lines);
