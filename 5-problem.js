// GET /delay/{delay_in_seconds} - 
// Should return a success response but after the specified delay in the request. 
// For example: If the request sent is GET /delay/3, 
// then the server should wait for 3 seconds and only then send a response with 200 status code.


const http = require("http");

let server = http.createServer((req, res) => {
  const statusRegex = /^\/delay\/(.*)/;
  console.log(req.url.match());
  

  const match = req.url.match(statusRegex);

  if (req.method === "GET" && match) {

    const delay = parseInt(match[1], 10);
    res.statusCode=200;
    setTimeout(()=>{
        res.end(`Delay is ${delay}`);
    },delay*1000)
   
  } 
  else {
    res.statusCode=400;
    res.end(`Response Code some error `);
  }
});

server.listen(3000, () => {
  console.log("listeing");
});
