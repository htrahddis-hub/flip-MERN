import React from "react";
import "./login.css";
import Navbar from "./partials/navbar.jsx";
import { Form,FormGroup,Input,Label,Button } from 'reactstrap';
import axios from 'axios';


const Login= (props) =>{

	const [user, setUser]=React.useState({
		email:"",
		password:""
	});

	const handleChange=(event)=>{
		const {name,value}=event.target;
		setUser((prevUser)=>{
			return{
				...prevUser,
				[name] :value
			}
		});
	}

	const handleSubmit= (event)=>{
		console.log(user);
    axios.post('http://localhost:5000/api/login',user).then((res)=> {
			console.log(res.data.token);
		})
		event.preventDefault();
		setUser({
			email:'',
			password:''
		});
	}
  return(
    <div >
			<Navbar/>
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
    			{' '}
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
    			{' '}
    			<Button onClick={handleSubmit} >
      			Submit
    			</Button>
  			</Form>
			</div>
    </div>
  )
}

export default Login;