import React from "react";
import "./Forgotpassword.css";
import { Form,FormGroup,Input,Label,Button } from 'reactstrap';
import { useLocation } from "react-router-dom";
import Navbar from '../partials/navbar';
import {forgotPassword,resetPassword} from '../../api';

const Signup= () =>{

	const [email, setEmail]=React.useState();
	const [password,setPassword]=React.useState({password:'',confirmPassword:''});
	const [otp,setOtp] =React.useState('');
	const [otpsend,setOtpsend] =React.useState(true);
	const [pwd,setPwd] =React.useState('');
	const [pass,setPass]=React.useState(true);
	const [pass1,setPass1]=React.useState(true);
	const [pass2,setPass2]=React.useState('');
	const handleChange=(event)=>{
		setOtpsend(true);
		setPwd('');
		setEmail(event.target.value);
	}
	const handleChangeotp=(event)=>{
		setOtp(event.target.value);
	}
	const handleChangepass=(event)=>{
		setPass2('');
		setPass1(true);
		const {name,value}=event.target;
		setPassword((prevUser)=>{
			return{
				...prevUser,
				[name] :value
			}
		});
	}
	const handleSubmit= async (event)=>{
		event.preventDefault();
		const msg=await forgotPassword({email:email});
		setPwd(msg);
		if(msg==="OTP is send"){
			setOtpsend(false);
			setPassword({password:'',confirmPassword:''});
			setOtp('');
		}
	}
	const handleResetPassword= async (event)=>{
		event.preventDefault();
		if(password.password===password.confirmPassword)
		{
			const msg=await resetPassword({password:password.password,otp:otp,email:email});
			if(msg==='verfied')
				setPass(false);
			else{
				setPass2(msg);
				console.log(pass2);
			}
		}
		else
			setPass1(false);
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
							value={email}
							onChange={handleChange}
							required
      			/>
      			<Label for="exampleEmail">
        			Email
      			</Label>
    			</FormGroup>
					{pwd==='' || <p className={otpsend?'logina':'loginb'}>{pwd}</p>}
					{otpsend?<Button className="space" onClick={handleSubmit} >
      			Send OTP
    			</Button>:<Button className="space" onClick={handleSubmit} >
      			Resend OTP
    			</Button>}
					{!otpsend&&pass?<><FormGroup floating>
      			<Input
        			id="exampleEmail"
        			name="email"
        			placeholder="Enter OTP"
        			type="number"
							value={otp}
							onChange={handleChangeotp}
      			/>
      			<Label for="exampleEmail">
        			Enter OTP
      			</Label>
    			</FormGroup>
					<FormGroup floating>
      			<Input
        			id="examplePassword"
        			name="password"
        			placeholder="New-Password"
        			type="password"
							value={password.password}
							onChange={handleChangepass}
      			/>
      			<Label for="examplePassword">
        			New-Password
      			</Label>
    			</FormGroup>
					<FormGroup floating>
      			<Input
        			id="confirmPassword"
        			name="confirmPassword"
        			placeholder="Confirm New-Password"
        			type="password"
							value={password.confirmPassword}
							onChange={handleChangepass}
      			/>
      			<Label for="confirmPassword">
        			Confirm New-Password
      			</Label>
    			</FormGroup>
					{pass1||<p className="logina">Password donot match</p>}
					{pass2===''||<p className="logina">{pass2}</p>}
					<Button className="space" onClick={handleResetPassword} >
					Verify
				</Button></>:pass||<p className="loginb">Password Changed Succesfully</p>}
          <p className="login">Back to <a href='/login'>login</a> page</p>
  			</Form>
			</div>
    </div>
  )
}

export default Signup;