const express= require('express');
const app= express();
const joi=require("joi");

app.use(express.json());

const custs = [
    {id:1, name:'Pearl'},
    {id:2, name:'Diamond'},
    {id:3, name:'Gold'},
    {id:4, name:'Silver'},
    {id:5, name:'Bronze'}
] 

app.get('/',(req,res)=>{
    res.send('This is from express. Now it is changed for testing nodeman..');
    res.end();
});

app.get('/api/customer',(req,res)=>{
    res.send(JSON.stringify(custs));
    res.end();
});

app.get('/api/customer/:id',(req,res)=>{
    const cust=custs.find(c=>c.id===parseInt(req.params.id));
    if(!cust) res.status(404).send(`The customer with this id:${req.params.id} is not available.`);
    res.send(cust);
});

app.get ('/api/customer/:year/:month',(req,res)=>{
    res.send(req.query);
});

app.post('/api/customer', (req,res)=>{
    
    const {error} = validateCust(req.body);

    //console.log(result);
    if(error){
        let errMsg='';
        
        if((error)!==null){
            errMsg=error.details[0].message;
            res.status(400).send(errMsg);   
            return;  
        }
    }
    const cust= {
        id: custs.length+1,
        name: req.body.name
    };
    console.log(cust);
    custs.push(cust);
    res.send(cust);
});

app.put('/api/customer/:id',(req,res)=>{
    const cust= custs.find(c=> c.id === parseInt(req.params.id));
    if(!cust) res.status(404).send(`ID: ${req.params.id} not found in customer`);
    console.log(`ID: ${req.params.id} is found`);
    
    const {error} = validateCust(req.body);
    console.log(`Error Details:-${error}`);
  
    if(error){
        res.status(400).send(error.details[0].message);
        return;
        // let errMsg= '';
        // if(error!==null){
        //     errMsg= error;
        //     res.status(400).send(errMsg);
        //     return;
        // }
    }
    cust.name= req.body.name;
    res.send(cust);
});

function validateCust(cust)
{
    console.log(`In Validation: ${cust.name}`);
    const schema= {
        name: joi.string().required().min(3)
    }
    return joi.validate(cust,schema);
}

function SetEnv(){
    process.env['PORT']=2020;
}


SetEnv();
const port=process.env.PORT;
app.listen(port);
console.log(`Listening Port - ${port}`);
