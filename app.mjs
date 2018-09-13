
let os= require('os');
// console.log(`File total size: ${os.totalmem}`);
// console.log(`File free size: ${os.freemem}`);

let fs= require('fs');

let event= require('./appEvent.mjs');


// const files= fs.readdirSync('./');

// console.log(`Files are: ${files}`);


const files2= fs.readdir('./',(err,files)=>{
    if(err){
        console.log(`Error: ${err}`);
    }
    else{
    files.forEach(item=>{
        console.log(`file2: ${item}`);
    })
}
})
