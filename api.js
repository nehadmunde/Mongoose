const express = require("express");
require('./config');
const Product=require('./products');
const port=4000;

const app=express();
app.use(express.json());

//post method to send data
app.post('/create',async(req,res)=>{
    let data=new Product(req.body);
    let result= await data.save();
    console.log(result);
    res.send(result);
})

//get method to get data
app.get('/read',async(req,res)=>{
    let data=await Product.find();
    res.send(data);
})

//pass data like this in postman or thunder ==> http://localhost:4000/read

//delete method 
app.delete('/delete/:_id',async(req,res)=>{
  console.log(req.params);
  let data=await Product.deleteOne(req.params);
  res.send(data);
})

//pass data like this in postman or thunder ==>  http://localhost:4000/delete/629915a7ec568a6239929059

//put method
app.put('/update/:_id',async(req,res)=>{
    console.log(req.params);
    let data=await Product.updateOne(
        req.params,
        {
          $set:req.body
        }
    )
    res.send(data);
})
//pass data like this in postman or thunder ==>  http://localhost:4000/update/629915a7ec568a6239929059

app.listen(port,()=>{
    console.log(`Server listening on port=${port}`);
})

