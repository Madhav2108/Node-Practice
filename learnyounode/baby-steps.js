let number=0
for(let i=2;i<process.argv.length;i++){
    number=number+Number(process.argv[i])
}
console.log(number)