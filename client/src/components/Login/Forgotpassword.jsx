import React from "react";
import "./Forgotpassword.css";
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
    			<Button onClick={handleSubmit} >
      			Send OTP
    			</Button>
          <p className="err"><a href='/login'>Back to login page</a></p>
  			</Form>
			</div>
    </div>
  )
}

export default Signup;