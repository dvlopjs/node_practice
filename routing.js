const http = require("node:http");
const dittoJSON = require("./ditto.json");

const processRequest = (req, res) => {
  const { url, method } = req;

  switch (method) {
    case "GET":
      switch (url) {
        case "/pokemon/ditto/":
          res.setHeader("Content-Type", "application/json; charset=utf-8");
          res.end(JSON.stringify(dittoJSON));
          break;
        default:
          res.setHeader("Content-Type", "text/plain; charset=utf-8");
          res.statusCode = 404;
          res.end("404 Not found");
      }
      break;
    case "POST":
      switch (url) {
        case "/pokemon":
          {
            let body = "";

            req.on("data", (chunk) => {
              body += chunk.toString();
            });

            req.on("end", () => {
              res.writeHead(201, {
                "Content-Type": "application/json; charset=utf-8",
              });
              const data = JSON.stringify(body);

              res.end(JSON.parse(data));
            });
          }
          break;
        default:
          res.setHeader("Content-Type", "text/plain; charset=utf-8");
          res.end("404 Not Found.");
      }
  }
};

const server = http.createServer(processRequest);

server.listen(3000, () => {
  console.log(
    `Server running in port http://localhost:${server.address().port}`
  );
});
