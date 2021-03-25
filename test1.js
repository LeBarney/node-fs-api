const fs = require('fs')

let stats = fs.statSync('./poem.txt')
console.log(`taille du fichier: ${stats.size}`)
console.log(`is directory ? ${stats.isDirectory()}`)
console.log(`is file ? ${stats.isFile()}`)