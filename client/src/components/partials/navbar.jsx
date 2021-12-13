import React from 'react';
import "./navbar.css";
//import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, NavbarBrand,NavbarToggler,Nav,NavItem,NavLink,Collapse } from 'reactstrap';


const NavBar =(props)=>{
  const path=props.path.pathname;
  return(
    <div>
  <Navbar
    color="dark"
    dark
    expand="md"
    fixed=""
    className="changewhole"
  >
    <NavbarBrand className='change' href="/">
      Flipkart
    </NavbarBrand>
    <NavbarToggler onClick={function noRefCheck(){}} />
    <Collapse navbar>
      <Nav
        className="ms-auto"
        navbar
      >
        <NavItem>
          <NavLink className={ path==="/" ? 'highlight' : 'changep' } href="/">
            <b>Home</b>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink className={ path==="/Login" ? 'highlight' : 'changep' } href="/Login">
            Login
          </NavLink>
        </NavItem>
      </Nav>
    </Collapse>
  </Navbar>
</div>

  );
}

export default NavBar;