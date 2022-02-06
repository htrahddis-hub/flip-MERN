import React from "react";
import "./login.css";
import { Form,FormGroup,Input,Label,Button } from 'reactstrap';
import { useLocation } from "react-router-dom";
import Navbar from '../partials/navbar';
import {signup} from '../../api';

const Signup= () =>{

	const [user, setUser]=React.useState({
		email:"",
		password:""
	});
	const [err,setErr] =React.useState(true);
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
		event.preventDefault();
    const flag=signup(user);
		if(flag='ok')
			setLog(false);
		else
			setErr(false);
		setUser({
			email:'',
			password:''
		});
	}
  return(
    <div >
			<Navbar path={useLocation()}/>
			<div className="box">
  			<Form inline >
				{log || <p className="err">Thanks for signing up login <a href="/Login">here</a></p>}
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
					{err || <p className="err">*This E-mail id is already registered</p>}
    			<Button onClick={handleSubmit} >
      			    Signup
    			</Button>
  			</Form>
			</div>
    </div>
  )
}

export default Signup;