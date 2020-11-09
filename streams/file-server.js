const fs = require("fs");

const http = require("http");
const server = http.createServer();

server.on("request", (req, res) => {
  fs.readFile("./big", (err, data) => {
    if (err) {
      console.log("error", err);
    }

    res.end(data);
  });
});

server.listen(8000);
console.log("Servidor en la url http://localhost:8000");
