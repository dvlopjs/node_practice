import fs from "node:fs"


// FORMA SINCRONA
const text = fs.readFileSync('./archivo1.txt', 'utf-8')
console.log("Esto se ejecuta primero")

console.log("Esto se deberia ejecutar al ultimo.")
console.log(text)
