import React from "react";
  
const Example = (prop) => {
  const props=prop.product;
  return (
    <div class="col-lg-3 col-md-4 col-sm-4 col-6" >
      <div class="card text-black m-1" style={{maxHeight:"400px"}}>
        <img src={props.imgLink} class="card-img-top" alt="Apple Computer" height='150px' width='80px'/>
        <div class="card-body">
          <div class="text-center">
            <p class="text-muted ">{props.name}</p>
          </div>
          <div class="d-flex justify-content-between total font-weight-bold mb-2">
            <span>Total</span><span>${props.price}</span>
          </div>
          <button type="button" class="btn btn-success flex-fill ">{"Buy now"+prop.num}</button>
        </div>
      </div>
    </div>
    );
  };

  export default Example;