const EventEmitter= require('events');

const emitter= new EventEmitter();

//Register a listener - MessageLogged
emitter.on('MessageLogged',(msg)=>{
    console.log(`Message:${msg}`);
});

//Register a listener - http
emitter.on('http',(arg)=>{
    console.log(`http listener called!!::${arg.url}`);
});


//Raised an event
emitter.emit('MessageLogged',"This is call for Listener!!");

//Raised an event of http
emitter.emit('http',{id:"1",url:"https://google.com"});