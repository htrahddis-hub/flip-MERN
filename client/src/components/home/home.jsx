import React from "react";
import { useLocation } from "react-router-dom";
import Navbar from '../partials/navbar';
import Product from '../products/products'

const Home= (props)=>{
  return (
    <div>
      <Navbar path={useLocation()} user={props.user} setUser={props.setUser}/>
      <Product />
    </div>
    )
}

export default Home;