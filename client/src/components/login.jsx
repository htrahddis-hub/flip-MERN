import React from "react";
import "./login.css";
import Navbar from "./partials/navbar.jsx";
import { Form,FormGroup,Input,Label,Button } from 'reactstrap';


const Login= (props) =>{
  return(
    <div >
			<Navbar/>
			<div className="box">
  			<Form inline>
    			<FormGroup floating>
      			<Input
        			id="exampleEmail"
        			name="email"
        			placeholder="Email"
        			type="email"
      			/>
      			<Label for="exampleEmail">
        			Email
      			</Label>
    			</FormGroup>
    			{' '}
    			<FormGroup floating>
      			<Input
        			id="examplePassword"
        			name="password"
        			placeholder="Password"
        			type="password"
      			/>
      			<Label for="examplePassword">
        			Password
      			</Label>
    			</FormGroup>
    			{' '}
    			<Button >
      			Submit
    			</Button>
  			</Form>
			</div>
    </div>
  )
}

export default Login;