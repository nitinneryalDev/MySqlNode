const mongoose = require('mongoose')

const  main = async () => {
      await mongoose.connect('mongodb://localhost:27017/E-comm')
      const productsSchemas = new mongoose.Schema( {
        name:String ,
        price:Number , 
        brand:String,
        category:String
      } );

const productsModel = mongoose.model('products' , productsSchemas);
let data = new productsModel({name:"m8" , price:1000 , brand:"Max" , category:'Mobile' });
let result = await data.save();
console.log(result)


// READING  THE ITEMS IN The database
const findInDb = async () => {
  const Products = mongoose.model('products', productsSchemas);
  let data = await Products.find({name:"mpoll8"})
  console.log(data) 
}
findInDb()
}


// POST API'S with mongoose




main()