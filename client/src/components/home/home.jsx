import React from "react";
import { useLocation } from "react-router-dom";
import Navbar from '../partials/navbar';
import Product from '../products/products'

const Home= ()=>{
  return (
    <div>
      <Navbar path={useLocation()}/>
      <Product />
			<h1>Hello, this website is under devlopment,signup now!! - for updates </h1>
    </div>
    )
}

export default Home;