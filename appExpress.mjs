const express= require('express');
const app= express();

app.get('/',(req,res)=>{
    res.send('This is from express. Now it is changed for testing nodeman..');
    res.end();
});

app.get('/api/customer',(req,res)=>{
    res.send(JSON.stringify([1,2,3,4,5,6,'Heena','Khan']));
    res.end();
});

const port=process.env.PORT;

app.listen(port);
console.log(`Listening Port - ${port}`);
