//GET /status/{status_code} - Should return a response with a status code as specified in the request.

const http = require("http");

let server = http.createServer((req, res) => {
  
   let url=req.url.split('/');

  if (req.method === "GET" && url[1]==='status') {

    const statusCode = parseInt(url[2], 10);
    res.statusCode=statusCode;
    res.end(`Response Code status is ${res.statusCode}`);
  } 
  else {
    res.end(`Response Code some error `);
    res.statusCode = 400;

  }
});

server.listen(3000, () => {
  console.log('Server running at http://localhost:3000/status/200');
});
