import fs from "node:fs";

// MIENTRAS SE EJECUTA EL CALLBACK TODO LO DEMAS SIGUE EJECUTANDOSE, NO ES BLOQUEANTE

console.log("Primero"); //1st to execute

fs.readFile("./archivo1.txt", "utf-8", (error, text) => {
  setTimeout(() => `Primer archivo: ${console.log(text)}`, 3000);
}); //five to execute

console.log("Segundo"); //2nd to execute

console.log("Tercero"); //3rd to execute

fs.readFile("./archivo2.txt", "utf-8", (error, text) => {
  setTimeout(() => `Segundo archivo: ${console.log(text)}`, 2000);
}); // four to execute
