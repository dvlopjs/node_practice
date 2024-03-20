const net = require("node:net");

function findAvaiblePort(desiredPort) {
  return new Promise((resolve, reject) => {
    const server = net.createServer();

    server.listen(desiredPort, () => {
      const { port } = server.address();
      server.close(() => {
        resolve(port);
      });
    });

    server.on("error", async (err) => {
      if (err) {
        const avaiblePort = await findAvaiblePort(0);
        resolve(avaiblePort);
      } else {
        reject(err);
      }
    });
  });
}

module.exports = { findAvaiblePort };
