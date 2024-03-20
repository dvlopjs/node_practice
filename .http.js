const http = require("node:http");
const fs = require("node:fs");
// createServer(callback)

const server = http.createServer((req, res) => {
  const url = req.url;
  res.setHeader("Content-Type", "text-plain; charset=utf-8");
  if (url === "/") {
    res.end("MAIN PAGE");
  } else if (req.url === "/contact") {
    res.end("CONTACT PAGE");
  } else if (url === "/image") {
    fs.readFile("./yo.jpg", (err, data) => {
      if (err) {
        res.end("Internal error 500");
      } else {
        res.setHeader("Content-Type", "image/jpg");
        res.end(data);
      }
    });
  } else {
    res.statusCode = 404;
    res.end("ERROR 404");
  }
});

server.listen(3000, () => {
  console.log(
    `Server is listening on port http://localhost:${server.address().port}`
  );
});

// server.listen(0, () => {
//   console.log(
//     `server listening on port: http://localhost:${server.address().port}`
//   );
// });
