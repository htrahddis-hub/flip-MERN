import React from "react";
import './producCards.css';


 // import { Card, CardTitle, CardBody, CardImg, CardText,Button } from 'reactstrap';
  
  const Example = (prop) => {
    const props=prop.product;
    return (
      <div class="card" >
        <img class="card-img-top" src={props.imgLink} alt="not found" />
        <div class="card-body">
          <h5 class="card-title">{props.name}</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    );
  };
  
  export default Example;