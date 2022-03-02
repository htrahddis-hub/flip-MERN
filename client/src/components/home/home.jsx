import React from "react";
import Product from '../products/products';
import './home.css'

const Home= (props)=>{
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand mb-0 h1" href="#">Navbar</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active " aria-current="page" href="#">Home</a>
              </li>
            </ul>
            <form class="d-flex me-auto pe-5">
              <input class="form-control me-2 boxWid" type="search" placeholder="Search" aria-label="Search" />
              <button class="btn btn-outline-success " type="submit">Search</button>
            </form>
            <button class="btn btn-primary " type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
            <span class="navbar-toggler-icon"></span>
            </button>
          </div>
        </div>
      </nav>
      <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
        <div class="offcanvas-header">
          <h5 class="offcanvas-title" id="offcanvasExampleLabel">Shopping Cart</h5>
          <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
          <div>
            Some text as placeholder. In real life you can have the elements you have chosen. Like, text, images, lists, etc.
          </div>
        </div>
      </div>
      <Product />
    </div>
  )
}

export default Home;