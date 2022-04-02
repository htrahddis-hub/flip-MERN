import React from "react";
import Products from "./product/productCard";

var products = [
  {
    name: "Apple pro display XDR",
    price: 7197.0,
    comapny: "Apple",
    imgLink:
      "https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/3.webp",
  },
  {
    name: "Apple pro display XDR",
    price: 7197.0,
    comapny: "Apple",
    imgLink:
      "https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/3.webp",
  },
  {
    name: "Apple pro display XDR",
    price: 7197.0,
    comapny: "Apple",
    imgLink:
      "https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/3.webp",
  },
];

const Product = () => {
  return (
    <div class="bg-light my-5">
      <div class="pt-5 row justify-content-center px-0 mx-md-5 mx-lg-5 ">
        <Products product={products[0]} num={1} />
        <Products product={products[1]} num={2} />
        <Products product={products[2]} num={3} />
        <Products product={products[2]} num={4} />
        {/* <button onClick={handleClick}>arrow</button> */}
      </div>
      <hr className="m-0 p-2 bg-light" />
      <div class=" row justify-content-center px-0 mx-md-5 mx-lg-5 ">
        <Products product={products[0]} num={5} />
        <Products product={products[1]} num={6} />
        <Products product={products[2]} num={7} />
        <Products product={products[2]} num={8} />
      </div>
      <hr className="m-0 p-2 bg-light" />
      <div class=" row justify-content-center px-0 mx-md-5 mx-lg-5 ">
        <Products product={products[0]} num={1} />
        <Products product={products[1]} num={1} />
        <Products product={products[2]} num={1} />
        <Products product={products[2]} num={1} />
      </div>
    </div>
  );
};

export default Product;
