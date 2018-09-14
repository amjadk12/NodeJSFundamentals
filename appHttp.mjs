const http= require("http");

const server= http.createServer((req,res)=>{
    if(req.url==='/'){
        res.write('Hello Amjad!!');
        res.end();
    }

    if(req.url==='/api/arr'){
        res.write(JSON.stringify([1,2,3,4,5]));
        res.end();
    }
});

// server.on('connection',(socket)=>{
//     console.log('Connection established!!');
// });

server.listen('5050');

console.log("Listening the port 5050");
