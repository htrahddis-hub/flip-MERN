import React from "react";
  
const Example = (prop) => {
  const props=prop.product;

  const handleClick= (event)=>{
    prop.callBack(props._id);
  };

  return (
    <div className="col-lg-3 col-md-4 col-sm-4 col-6 my-2" >
      <div className="card text-black m-1 h-100" style={{maxHeight:"500px"}}>
        <img src={props.productImage[0]} className="p-2" alt="Apple Computer" />
        <div className="p-2 mt-auto ">
          <div className="text-center">
            <p className="text h5 mb-1">{props.name}</p>
          </div>
          <p className="text-disabled text-center mb-3 mx-5">{props.description}</p>
          <div className="d-flex justify-content-between">
          <p className="h5 bg-light m-0 p-2 rounded">${props.price}</p>
            <button type="button" className="btn btn-success" onClick={handleClick}>Buy now</button>
          </div>
        </div>
      </div>
    </div>
    );
  };

  export default Example;