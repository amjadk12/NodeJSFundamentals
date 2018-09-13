const EventEmitter= require('events');

const emitter= new EventEmitter();

//Register a listener - MessageLogged
emitter.on('MessageLogged',(msg)=>{
    console.log(`Message:${msg}`);
});

//Register a listener - http
emitter.on('http',()=>{
    console.log('http listener called!!');
});


//Raised an event
emitter.emit('MessageLogged',"Thanks!!");

//Raised an event of http
emitter.emit('http');