const fs = require('fs')

if(process.argv[2] === 'echo'){
//permet de lire le fichier indiqué en 4eme paramètre lorsqu'on met echo en 3eme paramètre
fs.writeFileSync(process.argv[3], process.argv[4])
}
if(process.argv[2] === 'cp'){
// permet de lire le copier indiqué en 4eme paramètre lorsqu'on met cp en 3eme paramètre
fs.copyFileSync(process.argv[3], process.argv[4])
}
if(process.argv[2] === 'mkdir'){
// permet de créer un dossier portant le nom donné en 4eme paramètre
mkdirSync(process.argv[3])
}