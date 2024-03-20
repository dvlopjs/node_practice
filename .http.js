const http = require("node:http");
const { findAvaiblePort } = require("./free-port");

// createServer(callback)

const server = http.createServer((err, res) => {
  res.end("Server is up.");
});

findAvaiblePort(3000).then((port) => {
  server.listen(port, () => {
    console.log(`Server is listening on port http://localhost:${port}`);
  });
});

// server.listen(0, () => {
//   console.log(
//     `server listening on port: http://localhost:${server.address().port}`
//   );
// });
