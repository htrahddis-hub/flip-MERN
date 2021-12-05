const express = require("express");
const mongoose = require('mongoose');
const app= express();
require('dotenv').config();


mongoose.connect("mongodb+srv://admin-siddharth:"+process.env.MONGODB_PASSWORD+"@cluster0.ziuav.mongodb.net/app?retryWrites=true&w=majority");

const itemSchema= {
    name:String
};

const Item=mongoose.model("Item",itemSchema);

const item = new Item({ name: 'Zildjian' });
item.save().then(() => console.log('meow'));

app.get('/',(req,res)=>{
    res.send("hello world");
})

app.listen(3000, ()=>{
    console.log("the app is live at port 3000");
})