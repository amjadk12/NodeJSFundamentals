const http= require('http');

const server= http.createServer((req,res)=>{
    if(req.url==='/'){
        res.write('Hello Amjad responded by req....');
        res.end();
    }
});

server.listen(2020);
console.log('listening port::2020');
