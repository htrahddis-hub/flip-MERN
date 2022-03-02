import React from "react";
import Products from './product/productCard';

var products=[
  {
  name:"Apple pro display XDR",
  price:7197.00,
  comapny:"Apple",
  imgLink:"https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/3.webp"
    },
  {
    name:"Apple pro display XDR",
    price:7197.00,
    comapny:"Apple",
    imgLink:"https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/3.webp"
    },
  {
  name:"Apple pro display XDR",
  price:7197.00,
  comapny:"Apple",
  imgLink:"https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/3.webp"
   }
];

const Product= ()=>{
  return (
    <div class='container-fluid bg-light'>
      <div class="container py-5 row justify-content-center px-0 mx-auto">  
        <Products product={products[0]}/>
        <Products product={products[1]}/>
        <Products product={products[2]}/>
        <Products product={products[2]}/>
        <Products product={products[0]}/>
        <Products product={products[1]}/>
        <Products product={products[2]}/>
        <Products product={products[2]}/>
      </div>
      
    </div>
    )
}

export default Product;