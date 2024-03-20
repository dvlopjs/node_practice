import fs from "node:fs/promises";

console.log("Doing some stuff!!!");
console.log("--------");
const text1 = await fs.readFile("./archivo1.txt", "utf-8");

console.log(text1);

const text2 = await fs.readFile("./archivo2.txt", "utf-8");

console.log(text2);
