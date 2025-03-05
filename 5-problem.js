// GET /delay/{delay_in_seconds} -
// Should return a success response but after the specified delay in the request.
// For example: If the request sent is GET /delay/3,
// then the server should wait for 3 seconds and only then send a response with 200 status code.

const http = require("http");

let server = http.createServer((req, res) => {
  let url = req.url.split("/");

  if (req.method === "GET" && url[1] === "delay") {
    const delay = parseInt(url[2], 10);
    res.statusCode = 200;

    setTimeout(() => {
      res.end(`Delay is ${delay} seconds`);
    }, delay * 1000);
  } else {
    res.statusCode = 400;
    res.end(`Response Code some error `);
  }
});

server.listen(3000, () => {
  console.log("Server running at http://localhost:3000/delay/3");
});
