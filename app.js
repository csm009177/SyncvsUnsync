import http from "http";
import fs from "fs";
const port = 3218;
const htmlPath = "./index.html";
import mysql from "mysql";

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "0177",
  database: "shop",
});

const serv = http.createServer((req, res) => {
  if (req.method === "GET" && req.url === "/") {
    // Read the join.html file
    fs.readFile(htmlPath, "utf8", (err, data) => {
      // Set response header and send the file content
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(data);
    });
  } else if (req.method === "POST" && req.url === "/mariaDB") {
    // 'product' 테이블에서 모든 상품 조회 SQL 쿼리
    const query = "SELECT * FROM product";

    // SQL 쿼리 실행
    connection.query(query, (error, results) => {
      if (error) {
        res.writeHead(500, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ error: "Internal Server Error" }));
      } else {
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify(results)); // 상품 목록을 JSON 형식으로 반환
      }
    });
  }
});

serv.listen(port, () => {
  console.log(`
http://localhost:${port}
  `);
});
