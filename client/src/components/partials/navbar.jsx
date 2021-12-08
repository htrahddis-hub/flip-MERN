import React from 'react';
import "./navbar.css";
//import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, NavbarBrand,NavbarToggler,Nav,NavItem,NavLink,NavbarText,Collapse,DropdownItem,DropdownToggle,DropdownMenu,UncontrolledDropdown } from 'reactstrap';


const NavBar =()=>{
  return(
    <div>
  <Navbar
    color="dark"
    dark
    expand="md"
    fixed="top"
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
          <NavLink className='changep' href="/">
            Login
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink className='changep' href="/">
            Register
          </NavLink>
        </NavItem>
        {/* <UncontrolledDropdown
          inNavbar
          nav
        >
          <DropdownToggle
            caret
            nav
          >
            Options
          </DropdownToggle>
          <DropdownMenu right>
            <DropdownItem>
              Option 1
            </DropdownItem>
            <DropdownItem>
              Option 2
            </DropdownItem>
            <DropdownItem divider />
            <DropdownItem>
              Reset
            </DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown> */}
      </Nav>
      {/* <NavbarText>
        Simple Text
      </NavbarText> */}
    </Collapse>
  </Navbar>
</div>

  );
}

export default NavBar;