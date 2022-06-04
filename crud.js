const mongoose =require('mongoose');
console.log("Mongosoe CRUD Started");

// connection code
   mongoose.connect('mongodb://localhost:27017/e-comm');
  const ProductSchema=new mongoose.Schema({
      name:String ,//it will restric user to enter only name
      price:Number,
  });

  //Create Code
  const saveInDB=async()=>{
  const ProductModel=mongoose.model('products',ProductSchema);
  let data=new ProductModel({
    name:'MI 295',
    price:290000,
    brand:'MI',
    category:'mobile'
  }); //new data entered into the database product collection
  let result=await data.save(); //to save data
  console.log(result);
}

 //saveInDB()

 //Update Code
const updateInDB=async()=>{
    const Product=mongoose.model('products',ProductSchema);
    let data=await Product.updateOne(
        {name:"MI 295"},
        {
            $set:{price:960000,name:"MI-35"}
        }
    )
    console.log(data,'\n \n Updation sucessfull');
}

//updateInDB()

//dekete Code
const deleteInDB=async()=>{
  const Product=mongoose.model('products',ProductSchema);
  let data=await Product.deleteOne({name:"MI 295"});
  console.log(data,"\n \n Deletion Sucessfull");
}
//deleteInDB()

//find(Search) Code
const findDB=async()=>{
  const Product=mongoose.model('products',ProductSchema);
  let data=await Product.find({name:"Galaxy- SG 2"});
  console.log(data);
}

findDB()