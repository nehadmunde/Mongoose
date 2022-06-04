const express = require("express");
require('./config');
const Product=require('./products');
const port=4000;

const app=express();
app.use(express.json());

app.get('/search/:key',async(req,res)=>{
    console.log(req.params.key);
    let data=await Product.find(
        {
            "$or":[
                {"name":{$regex:req.params.key}},
                {"brand":{$regex:req.params.key}},
                {"category":{$regex:req.params.key}}
                // {"price":{$regex:req.params.key}} // not working for price because its number
               
            ]
        }
    );
    res.send(data);
})

//pass data like this in postman or thunder ==>  http://localhost:4000/search/25 

app.listen(port,()=>{
    console.log(`Server listening on port=${port}`);
})

