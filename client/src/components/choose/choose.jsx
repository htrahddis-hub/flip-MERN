import React from "react";
import "./choose.css";
import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
  Collapse,
} from "reactstrap";
import { useNavigate } from "react-router-dom";

const Choose = () => {
  const navigate = useNavigate();

  const handleClickUser = () => {
    navigate("/");
  };

  const handleClickSeller = () => {
    navigate("/seller");
  };

  return (
    <div>
      <Navbar color="dark" dark expand="md" fixed="top" className="changewhole">
        <NavbarBrand className="change" href="/">
          E-comm
        </NavbarBrand>
        <NavbarToggler onClick={function noRefCheck() {}} />
        <Collapse navbar>
          <Nav className="ms-auto" navbar>
            <NavItem>
              <NavLink className="changep" href="/">
                Logout
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
      <div
        className="mx-5 d-flex flex-column align-items-center"
        style={{ marginTop: "10%" }}
      >
        <div className="h2" style={{ marginBottom: "60px" }}>
          Login As
        </div>
        <div className="d-flex justify-content-center my-4">
          <div
            className="border border-info bg-info p-5 classhover"
            style={{ marginRight: "100px", cursor: "pointer" }}
            onClick={handleClickUser}
          >
            <h1 className="text-light">User</h1>
          </div>
          <div
            className="border border-primary bg-primary p-5 classhover"
            style={{ cursor: "pointer" }}
            onClick={handleClickSeller}
          >
            <h1 className="text-light">Seller</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Choose;
