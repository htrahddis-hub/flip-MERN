import React from "react";
import "./login.css";
import { Form, FormGroup, Input, Label } from "reactstrap";
import Navbar from "../partials/navbar";
import { useLocation,Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../actions/auth";
import { getUser } from "../../reducers/user";

const Login = (props) => {
  const dispatch = useDispatch();
  const User = useSelector(getUser);
  const [user, setUser] = React.useState({
    email: "",
    password: "",
  });
  const [unauth, setUnauth] = React.useState(true);

  const handleChange = (event) => {
    setUnauth(false);
    const { name, value } = event.target;
    setUser((prevUser) => {
      return {
        ...prevUser,
        [name]: value,
      };
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    dispatch(login(user));
    if (!User.auth) {
      setUnauth(true);
    }
    setUser((prevUser) => {
      return {
        ...prevUser,
        password: "",
      };
    });
  };
  return (
    <div>
      <Navbar path={useLocation()} />
      <div className="box pb-3">
        <Form
          inline
          onKeyPress={(event) => {
            if (event.key === "Enter") {
              handleSubmit(event);
            }
          }}
        >
          <FormGroup floating>
            <Input
              id="exampleEmail"
              name="email"
              placeholder="Email"
              type="email"
              value={user.email}
              onChange={handleChange}
            />
            <Label htmlFor="exampleEmail">Email</Label>
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
            <Label htmlFor="examplePassword">Password</Label>
          </FormGroup>
          {unauth ? <p className="unauth">{User.message}</p> : <p></p>}
          <div className="row mb-4">
            <div className="col d-flex justify-content-center">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="form2Example34"
                />
                <label className="form-check-label" htmlFor="form2Example34">
                  {" "}
                  Remember me{" "}
                </label>
              </div>
            </div>

            <div className="col">
              <Link to='/forgotpassword'>Forgot password?</Link>
            </div>
          </div>
          <div className="d-grid gap-2">
            <button
              type="submit"
              className="btn btn-primary btn-block mb-4"
              onClick={handleSubmit}
            >
              Login
            </button>
          </div>

          <div className="text-center ">
            <p>
              New User? <Link to="/signup">Register</Link>
            </p>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Login;
