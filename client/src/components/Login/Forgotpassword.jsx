import React from "react";
import "./Forgotpassword.css";
import { Form, FormGroup, Input, Label, Button } from "reactstrap";
import { useLocation } from "react-router-dom";
import Navbar from "../partials/navbar";
import { useDispatch, useSelector } from "react-redux";
import { forgotPassword, resetPassword } from "../../actions/auth";
import { getUser } from "../../reducers/user";

const Signup = () => {
  const dispatch = useDispatch();
  const User = useSelector(getUser);
  const [data, setData] = React.useState({
    email: "",
    otp: "",
    password: "",
    confirmPassword: "",
  });

  const [flag, setFlag] = React.useState({
    send: true,
    match: true,
    success: false,
    err: false,
  });

  const [message, setMessage] = React.useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setMessage();
    if (name === "email") {
      setFlag((prevUser) => {
        return {
          ...prevUser,
          send: true,
        };
      });
      setData((prevUser) => {
        return {
          ...prevUser,
          password: "",
        };
      });
    }
    setData((prevUser) => {
      return {
        ...prevUser,
        [name]: value,
      };
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const res=await dispatch(forgotPassword({ email: data.email }));
    if(res.payload.auth){
      setFlag((prevUser) => {
        return {
          ...prevUser,
          send: false,
        };
      });
    }
    else{
      console.log("bye");
      
    }
    
  };

  const handleResetPassword = async (event) => {
    event.preventDefault();
    if (data.password === data.confirmPassword) {
      dispatch(
        resetPassword({
          password: data.password,
          otp: data.otp,
          email: data.email,
        })
      );
    } else {
      setFlag((prevUser) => {
        return {
          ...prevUser,
          match: false,
        };
      });
      
    }
  };
  return (
    <div>
      <Navbar path={useLocation()} />
      <div className="box">
        <Form inline>
          <FormGroup floating>
            <Input
              id="exampleEmail"
              name="email"
              placeholder="Email"
              type="email"
              value={data.email}
              onChange={handleChange}
            />
            <Label for="exampleEmail">Email</Label>
          </FormGroup>
          {!User.otpSend && <p className="logina">{message}</p>}
          {flag.send ? (
            <div className="d-grid gap-2 ">
              <Button color="primary" className="space" onClick={handleSubmit}>
                Send OTP
              </Button>
            </div>
          ) : (
            <>
              {User.otpSend && (
                <p className="text-primary text-center">
                  OTP Send and is valid for 5 minutes
                </p>
              )}
              <div className="d-grid gap-2 ">
                <Button
                  color="primary"
                  className="space"
                  onClick={handleSubmit}
                >
                  Resend OTP
                </Button>
              </div>

              <FormGroup floating>
                <Input
                  id="exampleEmail"
                  name="otp"
                  placeholder="Enter OTP"
                  type="number"
                  value={data.otp}
                  onChange={handleChange}
                />
                <Label for="exampleEmail">Enter OTP</Label>
              </FormGroup>
              <FormGroup floating>
                <Input
                  id="examplePassword"
                  name="password"
                  placeholder="New-Password"
                  type="password"
                  value={data.password}
                  onChange={handleChange}
                />
                <Label for="examplePassword">New-Password</Label>
              </FormGroup>
              <FormGroup floating>
                <Input
                  id="confirmPassword"
                  name="confirmPassword"
                  placeholder="Confirm New-Password"
                  type="password"
                  value={data.confirmPassword}
                  onChange={handleChange}
                />
                <Label for="confirmPassword">Confirm New-Password</Label>
              </FormGroup>
              <div className="d-grid gap-2 ">
                <Button
                  color="primary"
                  className="space"
                  onClick={handleResetPassword}
                >
                  Verify
                </Button>
              </div>
              {!flag.match && <p className="logina">Passwords do not match</p>}
              {User.isReset && (
                <p className="loginb">Password Successfully changed</p>
              )}
            </>
          )}

          <p className="login">
            Back to <a href="/login">login</a> page
          </p>
        </Form>
      </div>
    </div>
  );
};

export default Signup;
