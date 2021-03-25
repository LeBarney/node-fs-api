const fs = require('fs')

//check command line
if(process.argv.length !== 3) {
  console.log('usage: node ls.js foldername')
  process.exit(1)
}


let stats = fs.statSync(process.argv[2])
if (!stats.isDirectory()) {
  console.log(`Error: ${process.argv[2]} is not a directory`)
  process.exit(1)
}


// check si le dossier testé existe bien
if (!fs.existsSync(process.argv[2])) {
  console.log(`Error : ${process.argv[2]} does not exist`)
  process.exit(1)
}

let arbo = fs.readdirSync(process.argv[2])
let i = 0


while (i < arbo.length){
  console.log(arbo[i])
  i++;
}