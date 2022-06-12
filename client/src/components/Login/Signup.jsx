import React from "react";
import "./Signup.css";
import { Form, FormGroup, Input, Label, Button } from "reactstrap";
import { useLocation } from "react-router-dom";
import Navbar from "../partials/navbar";
import { useDispatch, useSelector } from "react-redux";
import { signup } from "../../actions/auth";
import { getUser } from "../../reducers/user";

const Signup = () => {
  const dispatch = useDispatch();
  const User = useSelector(getUser);
  const [user, setUser] = React.useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [err, setErr] = React.useState("");

  const handleChange = (event) => {
    setErr(true);
    const { name, value } = event.target;
    setUser((prevUser) => {
      return {
        ...prevUser,
        [name]: value,
      };
    });
  };

  const handleSubmit = async (event) => {
    if (user.password === user.confirmPassword) {
      event.preventDefault();
      dispatch(signup({ email: user.email, password: user.password }));

      setUser({
        email: "",
        password: "",
        confirmPassword: "",
      });
    } else {
      setErr("Passwords must match");
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
              value={user.email}
              onChange={handleChange}
            />
            <Label for="exampleEmail">Email</Label>
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
            <Label for="examplePassword">Password</Label>
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
            <Label for="confirmPassword">Confirm Password</Label>
          </FormGroup>
          {User.isSignedin ? (
            <p className="error">
              Thanks for signing up!! login <a href="/Login">here</a>
            </p>
          ) : (
            <p className="error">{err}{User.user}{'\n'}{User.message}</p>
          )}
          <div className="d-grid gap-2 pt-3">
            <Button color="primary" onClick={handleSubmit}>
              Create an Account
            </Button>
          </div>
          <p className="acc">
            Have an account? <a href="/Login">login</a>
          </p>
        </Form>
      </div>
    </div>
  );
};

export default Signup;
