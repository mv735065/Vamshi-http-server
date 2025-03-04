//GET /uuid - Should return a UUID4. For example:


const { randomUUID } = require('crypto');
const http=require('http');

let server=http.createServer((req,res)=>{
    if(req.method==='GET' && req.url==='/uuid'){
        let uid=randomUUID();
        res.end(`Random uuid is a ,${uid}`);
        res.statusCode = 200;
        console.log(res.statusCode);
        
    }
    else{
        res.end(`Url is not found & not uuid`);
        res.statusCode = 400;
    }
})

server.listen(3000,()=>{
    console.log("listeing");
    
})