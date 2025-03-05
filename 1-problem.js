// GET /html - Should return the following HTML content. 
// Note when opened in the browser it should display the HTML page and not the HTML code.

let http=require('http');

let server=http.createServer((req,res)=>{
    console.log(req);
    
    if(req.method==='GET' && req.url==='/html'){
        res.writeHead(200, { 'Content-Type': 'text/html' });    
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
    }
    else{
        res.writeHead(400, { 'Content-Type': 'text/plain' });
    }
})


server.listen(3000, () => {
    console.log('Server running at http://localhost:3000/html');
  });