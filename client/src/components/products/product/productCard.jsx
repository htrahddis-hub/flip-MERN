import React from "react";
  
const Example = (prop) => {
  const props=prop.product;
  return (
    <div class="col-3 ">
      <div class="card text-black m-1">
        <img src={props.imgLink} class="card-img-top" alt="Apple Computer"/>
        <div class="card-body">
          <div class="text-center">
            <h5 class="card-title">Believing is seeing</h5>
            <p class="text-muted mb-1">{props.name}</p>
          </div>
          <div class="d-flex justify-content-between total font-weight-bold mb-4">
            <span>Total</span><span>${props.price}</span>
          </div>
          <button type="button" class="btn btn-success flex-fill ms-1">Buy now</button>
        </div>
      </div>
    </div>
    );
  };

  export default Example;