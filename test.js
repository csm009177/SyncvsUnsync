import http from "http";
import fs from "fs";
const port = 3218;

const serv = http.createServer((req, res) => {
  if (req.method === "GET") {
    res.end("hellow");
  }
});

serv.listen(port, () => {
  console.log(`
http://localhost:${port}
  `);
});
