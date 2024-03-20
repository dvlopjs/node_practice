import {readFile} from "node:fs/promises"

console.log("EXECUTING.")
Promise.all([
    readFile('./archivo1.txt', 'utf-8'),
    readFile('./archivo2.txt', 'utf-8')
]).then(([text1, text2]) => [console.log("Primer archivo:", text1), console.log("Segundo archivo:", text2)])
console.log("DOING ANOTHER STUFF")