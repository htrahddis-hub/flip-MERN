import React from "react";
import Products from './product/productCard';
import './products.css';

var products=[
  {
  name:"fans",
  price:200,
  comapny:"havells",
  imgLink:"https://m.media-amazon.com/images/I/61fnSm36NpL._SL1500_.jpg"
    },
  {
    name:"fans",
    price:200,
    comapny:"havells",
    imgLink:"https://m.media-amazon.com/images/I/61fnSm36NpL._SL1500_.jpg"
    },
  {
  name:"fans",
  price:200,
  comapny:"havells",
  imgLink:"https://m.media-amazon.com/images/I/61fnSm36NpL._SL1500_.jpg"
   }
];

const Product= ()=>{
  return (
    <div>
      <div className="productGrid">  
        <Products product={products[0]}/>
        <Products product={products[0]}/>
        <Products product={products[0]}/>
      </div>
    </div>
    )
}

export default Product;