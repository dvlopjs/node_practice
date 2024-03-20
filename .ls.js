const fs = require("node:fs/promises");
const path = require("node:path");
const folder = process.argv[2] ?? ".";

// readdir(folder) Función para recorrer el directorio en cuestión donde se encuentran los files.
// path.join(folder, file) Función para sacar el path de dicho file.
// fs.stat(filePath) Función encargada de sacar los datos del archivo en cuestión...
// fs.stat(filePath).isDirectory - Saber si es directorio o file.
// fs.stat(filePath).size - Saber el tamaño del archivo.
// fs.stat(filePath).mtime - última vez modificado.
async function ls(folder) {
  let files;
  try {
    files = await fs.readdir(folder);
  } catch (error) {
    console.log("No se ha podido encontrar el directorio.");
    process.exit(1);
  }
  console.log(files);
  const filesPromises = files.map(async (file) => {
    const filePath = path.join(folder, file);
    try {
      const stats = await fs.stat(filePath);
      const isDirectory = stats.isDirectory();
      const fileType = isDirectory ? "dir" : "file";
      const fileSize = stats.size.toString().padStart(20).padEnd(10);
      const lastTimeModified = stats.mtime.toLocaleString();

      return `${fileType} ${file.padEnd(20)} ${fileSize} ${lastTimeModified} `;
    } catch (error) {
      console.log(`No se ha podido leer los datos de ${file}`, error);
      process.exit(1);
    }
  });

  const filesInfo = await Promise.all(filesPromises);

  filesInfo.forEach((f) => console.log(f));
}
ls(folder);
