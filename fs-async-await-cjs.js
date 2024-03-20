const { readFile } = require('node:fs/promises');

(async () => {
       console.log("STARTING EXECUTE...");
  const archivo1 = await readFile("./archivo1.txt", "utf-8");
  console.log(archivo1);
  console.log("DOIND ANOTHER STUFF...");
  const archivo2 = await readFile("./archivo2.txt", "utf-8");
  console.log(archivo2);
  console.log("DOIND ANOTHER STUFF...");
})();
