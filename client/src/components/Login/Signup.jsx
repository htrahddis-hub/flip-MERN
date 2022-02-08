import React from "react";
import "./Signup.css";
import { Form,FormGroup,Input,Label,Button } from 'reactstrap';
import { useLocation } from "react-router-dom";
import Navbar from '../partials/navbar';
import {signup} from '../../api';

const Signup= () =>{

	const [user, setUser]=React.useState({
		email:"",
		password:"",
		confirmPassword:""
	});
	const [err,setErr] =React.useState(' ');
	const [log,setLog] =React.useState(true);
	const handleChange=(event)=>{
		setErr(true);
		const {name,value}=event.target;
		setUser((prevUser)=>{
			return{
				...prevUser,
				[name] :value
			}
		});
	}

	const handleSubmit= async (event)=>{
		if(user.password===user.confirmPassword)
		{
		event.preventDefault();
    const flag= await signup({email:user.email,password:user.password});
		if(flag=='ok')
			setLog(false);
		else
			setErr('This E-mail id is already registered');
		setUser({
			email:'',
			password:'',
			confirmPassword:''
		});
	}
	else{
		setErr('Passwords must match');
	}
	}
  return(
    <div >
			<Navbar path={useLocation()}/>
			<div className="box">
  			<Form inline >
    			<FormGroup floating>
      			<Input
        			id="exampleEmail"
        			name="email"
        			placeholder="Email"
        			type="email"
							value={user.email}
							onChange={handleChange}
      			/>
      			<Label for="exampleEmail">
        			Email
      			</Label>
    			</FormGroup>
    			<FormGroup floating>
      			<Input
        			id="examplePassword"
        			name="password"
        			placeholder="Password"
        			type="password"
							value={user.password}
							onChange={handleChange}
      			/>
      			<Label for="examplePassword">
        			Password
      			</Label>
    			</FormGroup>
					<FormGroup floating>
      			<Input
        			id="confirmPassword"
        			name="confirmPassword"
        			placeholder="Confirm Password"
        			type="password"
							value={user.confirmPassword}
							onChange={handleChange}
      			/>
      			<Label for="confirmPassword">
        			Confirm Password
      			</Label>
    			</FormGroup>
					{log || <p className="error">Thanks for signing up!! login <a href="/Login">here</a></p>}
					{err==' ' || <p className="error">{err}</p>}
    			<Button onClick={handleSubmit} >
      			Signup
    			</Button>
					<p className="acc">Have an account? <a href="/Login">login</a></p>
  			</Form>
			</div>
    </div>
  )
}

export default Signup;