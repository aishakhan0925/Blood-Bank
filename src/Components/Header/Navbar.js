import React, { Component } from "react";
import {
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  NavItem,
  Button,
} from "reactstrap";
import { NavLink } from "react-router-dom";
import style from "./Navbar.module.css";
import Header from "./Header";
import fire from "../../Config/Fire";
class Navigation extends Component {
  constructor(props) {
    super(props);
    this.toggleNav = this.toggleNav.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.state = {
      isNavOpen: false,
      isModalOpen: false,
    };
  }

  toggleNav() {
    this.setState({
      isNavOpen: !this.state.isNavOpen,
    });
  }
  handleLogin() {
    console.log("login");
  }

  render() {
    return (
      <div>
        <Navbar dark expand="md" className={style.nav} fixed="top">
          <div className="container">
            <NavbarBrand className="mr-1 ">
              Blood Bank
              {/* <img src="Assets/Images/logo.png" alt="Logo" height="50px" /> */}
            </NavbarBrand>

            <NavbarToggler onClick={this.toggleNav} />
            <Collapse isOpen={this.state.isNavOpen} navbar>
              <Nav navbar p-5>
                <NavItem>
                  <NavLink className="nav-link" to="/home">
                    <span className="fa fa-home fa-lg"></span> Home
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/about">
                    <span className="fa fa-info fa-lg"></span> About Us
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/donors">
                    <span className="fa fa-give fa-lg"></span> our Donors
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/contact">
                    <span className="fa fa-address-card fa-lg"></span> Contact
                    Us
                  </NavLink>
                </NavItem>
              </Nav>
              {/* <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink to="/">
                    <Button outline onClick={this.handleLogin}>
                      <span className="fa fa-sign-in fa-lg"></span> Login
                    </Button>
                  </NavLink>
                </NavItem>
              </Nav> */}
            </Collapse>
          </div>
        </Navbar>
        <Header />
      </div>
    );
  }
}
export default Navigation;
