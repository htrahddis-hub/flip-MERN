import React from "react";
import "./login.css";
import { Form,FormGroup,Input,Label,Button } from 'reactstrap';
import Navbar from '../partials/navbar';
import { useLocation,useNavigate } from "react-router-dom";
import {login} from '../../api';


const Login= (props) =>{
	let navigate = useNavigate();
	const [user, setUser]=React.useState({
		email:"",
		password:""
	});
	const [unauth,setUnauth] =React.useState();
	
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

	const handleSubmit= async (event)=>{
		event.preventDefault();
		console.log(user);
		const message=await login(user);
		if(message==='ok')
			props.setUser({...user,auth:true});
		setUnauth(message);
		setUser({
			email:'',
			password:''
		});
	}
  return(
    <div >
			<Navbar path={useLocation()}/>
			<div className="box">
  			<Form inline onKeyPress={event=>{if(event.key==="Enter") {handleSubmit(event)}}}>
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
				{unauth? <p className="unauth">{unauth}</p>:<p></p>}
				<p className="fpwd"><a href='/forgotpassword'>Forgot password?</a></p>
    			<Button onClick={handleSubmit} >
      			Login
    			</Button>
					<Button className="pads" href="/Signup">
      			New user?
    			</Button>
					
  			</Form>
			</div>
    </div>
  )
}

export default Login;