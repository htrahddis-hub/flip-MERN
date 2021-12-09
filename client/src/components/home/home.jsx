import React from "react";
import { useLocation } from "react-router-dom";
import Navbar from '../partials/navbar';

const Home= ()=>{
  return (
    <div>
      <Navbar path={useLocation()}/>
			<h1>Hello, this wesite is under devlopment,signup now!! - for updates </h1>
    </div>
    )
}

export default Home;