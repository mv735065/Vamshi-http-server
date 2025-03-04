const http=require('http');

let server=http.createServer((req,res)=>{
 console.log(req.method);
   
    if(req.method==='GET' && req.url==='/json'){
        // res.writeHead(200,{ 'Content-Type': 'text/json' });
        let data={
            "slideshow": {
              "author": "Yours Truly",
              "date": "date of publication",
              "slides": [
                {
                  "title": "Wake up to WonderWidgets!",
                  "type": "all"
                },
                {
                  "items": [
                    "Why <em>WonderWidgets</em> are great",
                    "Who <em>buys</em> WonderWidgets"
                  ],
                  "title": "Overview",
                  "type": "all"
                }
              ],
              "title": "Sample Slide Show"
            }
          }
        res.end(JSON.stringify(data));
    }
    else{
        res.writeHead(400, { 'Content-Type': 'text/plain' });
        res.end('Something else other then json')
    }
      
    
})


server.listen(8081,()=>{
    console.log('Server running at http://localhost:8081');

    
})