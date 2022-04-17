const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  brand: {
    type: String,
    required: true
  },
  description: {
    type:String,
    required: true
  },
  price: {
    type:String,
    required:true
  },
  author: {
    type:String
  },
  productImage:{
    type: Array,
    required:true
  }
});

const ProductModel = mongoose.model('product', ProductSchema);

module.exports = ProductModel;