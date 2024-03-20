const os = require('node:os')

console.log("Información del sistema opreativo:")
console.log("__________________________")
console.log("Plataforma:", os.platform())
console.log("Cpus:", os.cpus().length)
console.log("Hostname:", os.hostname())
console.log("Tiempo de encendido - HS:", os.uptime() / 3600)