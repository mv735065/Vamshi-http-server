//GET /status/{status_code} - Should return a response with a status code as specified in the request.

const http = require("http");

let server = http.createServer((req, res) => {
  const statusRegex = /^\/status\/(.*)/;

  const match = req.url.match(statusRegex);

  if (req.method === "GET" && match) {

    const statusCode = parseInt(match[1], 10);
    res.statusCode=statusCode;
    res.end(`Response Code status is ${res.statusCode}`);
  } 
  else {
    res.end(`Response Code some error `);
    res.statusCode = 400;

  }
});

server.listen(3000, () => {
  console.log("listeing");
});
