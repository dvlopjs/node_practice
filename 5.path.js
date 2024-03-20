const path = require('node:path')

// unir rutas con path.join

// `./content/subfolder/test.txt` // ==> ESTO NUNCA SE DEBE HACER POR INCOMPATIBILIDAD DE SO.🚫

console.log(path.sep) //Barra separadora de carpetas segun SO.