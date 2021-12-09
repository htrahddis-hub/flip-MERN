import React from "react";
import "./login.css";
import { Form,FormGroup,Input,Label,Button } from 'reactstrap';
import axios from 'axios';
import Navbar from '../partials/navbar';
import { useLocation } from "react-router-dom";


const Login= () =>{

	const [user, setUser]=React.useState({
		email:"",
		password:""
	});
	const [unauth,setUnauth] =React.useState(true);
	
	const handleChange=(event)=>{
		setUnauth(true);
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
			console.log(res);
			}).catch(function (error) {
			console.log(error);
			setUnauth(false);
		  });
		event.preventDefault();
		setUser({
			email:'',
			password:''
		});
	}
  return(
    <div >
			<Navbar path={useLocation()}/>
			{/* <Navbar/> */}
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
				{unauth || <p className="unauth">*wrongpassword/id</p>}
    			<Button onClick={handleSubmit} >
      			Login
    			</Button>
					<Button className="pads" href="/Signup">
      			New User
    			</Button>
  			</Form>
			</div>
    </div>
  )
}

export default Login;