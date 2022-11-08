const mongoose = require('mongoose')
const Schema = mongoose.Schema

const newSchema = new Schema({
    title:String,
    price:String,
    area:String,
    locatio:String,
   purpose:String,
   category:String,
    image : String
})


const Product = mongoose.model('Product',newSchema)
module.exports = Product