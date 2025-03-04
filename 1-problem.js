
let http=require('http');

let server=http.createServer((req,res)=>{
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
    console.log('Server running at http://localhost:3000');
  });