import fs from "node:fs/promises"


// PROMISES

console.log("1ST") // 1st to exec
console.log("2ND") // 2nd to exec
fs.readFile("./archivo1.txt", 'utf-8').then((t)=> setTimeout(()=> `Primer texto: ${console.log(t)}`, 2000)) //5th to exec
console.log("3RD") // 3rd to exect 
fs.readFile('./archivo2.txt', 'utf-8').then(t => setTimeout(() => `Segundo texto: ${console.log(t)}`,1500)) //4th to exec 