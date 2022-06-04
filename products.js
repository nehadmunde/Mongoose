const mongoose=require('mongoose');
const ProductSchema=new mongoose.Schema({
    name:String,
    price:Number,
    brand:String,
    category:String
}); // restrict user to enter only defined schema data
module.exports=mongoose.model('products',ProductSchema);