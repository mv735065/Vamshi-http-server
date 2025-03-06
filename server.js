const { randomUUID } = require("crypto");
const http = require("http");

let server = http.createServer((req, res) => {
    let url = req.url.split("/");

    if (req.url === "/favicon.ico") {
        res.statusCode = 204; 
        res.end();
        return; 
    }

    if (req.method == "GET") {
        if (!url[1]) {
            res.statusCode = 400;
            res.end(JSON.stringify({ error: "Invalid URL path" }));
            return;
        }
        
        if (url[1] === "html") {
            res.writeHead(200, { "Content-Type": "text/html" });
            res.statusCode = 200;

            res.end(`
                <!DOCTYPE html>
                <html>
                  <head></head>
                  <body>
                      <h1>Any fool can write code that a computer can understand. Good programmers write code that humans can understand.</h1>
                      <p> - Martin Fowler</p>
                  </body>
                </html>
              `);
        } else if (url[1] === "json") {
            res.writeHead(200, { "Content-Type": "application/json" });
            res.statusCode = 200;

            let data = {
                slideshow: {
                    author: "Yours Truly",
                    date: "date of publication",
                    slides: [
                        {
                            title: "Wake up to WonderWidgets!",
                            type: "all",
                        },
                        {
                            items: [
                                "Why <em>WonderWidgets</em> are great",
                                "Who <em>buys</em> WonderWidgets",
                            ],
                            title: "Overview",
                            type: "all",
                        },
                    ],
                    title: "Sample Slide Show",
                },
            };

            res.end(JSON.stringify(data));
        } else if (url[1] === "uuid") {
            let uid = randomUUID();
            res.statusCode = 200;
            res.end(`Random uuid is ${uid}`);
        } else if (url[1] === "status") {
            const statusCode = parseInt(url[2], 10);
            if (isNaN(statusCode)) {
                res.statusCode = 400;
                res.end("Invalid status code or empty");
                return;
            }
            else {
              
                res.statusCode = statusCode;
                res.end(`Response Code status is ${res.statusCode}`);
            }
        } else if (url[1] === "delay") {
            const delay = parseInt(url[2], 10);
            if (isNaN(delay)){
                res.end("Invalid delay or empty");
                res.statusCode = 400;
            } else {
               
                res.statusCode = 200;

                setTimeout(() => {
                    res.end(`Delay is ${delay} seconds`);
                }, delay * 1000);
            }
        } else {
            res.statusCode = 400;
            res.end("The method is not provided");
        }
    } else {
        res.statusCode = 400;
        res.end("The method is not 'GET' , the user is calling by something else");
    }
});

server.listen(3000, () => {
    console.log("Server running at http://localhost:3000/html");
});
