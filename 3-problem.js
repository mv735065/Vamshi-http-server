const { randomUUID } = require('crypto');
const http=require('http');

let server=http.createServer((req,res)=>{
    if(req.method==='GET' && req.url==='/uuid'){
        let uid=randomUUID();
        res.end(`Random uuid is a ,${uid}`);
        res.statusCode = 500
        console.log(res.statusCode);
        
    }
})

server.listen(3000,()=>{
    console.log("listeing");
    
})