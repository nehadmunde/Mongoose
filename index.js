const mongoose =require('mongoose');
console.log("Mongosoe Started");

const main=async()=>{
  await mongoose.connect('mongodb://localhost:27017/e-comm');
  const ProductSchema=new mongoose.Schema({
      name:String ,//it will restric user to enter only name
      price:Number,
      brand:String,
      category:String
  });
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

main()
