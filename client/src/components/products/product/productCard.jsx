import React from "react";
import './producCards.css';


 // import { Card, CardTitle, CardBody, CardImg, CardText,Button } from 'reactstrap';
  
  const Example = (prop) => {
    const props=prop.product;
    return (
      <div className="card" >
        <img className="card-img-top" src={props.imgLink} alt="not found" />
        <div className="card-body">
          <h5 className="card-title">{props.name}</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a className="btn btn-primary" href='/'>Go somewhere</a>
        </div>
      </div>
    );
  };
  
  export default Example;