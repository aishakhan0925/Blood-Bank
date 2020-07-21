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
import { Link } from "react-router-dom";
import style from "./Navbar.module.css";
import fire from "../../Config/Fire";

// import { NavLink } from "react-router-dom";

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
        <Navbar dark expand="md" className={style.nav}>
          <div className="container">
            <Link to="/">
              <NavbarBrand className="mr-auto ">
                <i class="fas fa-hand-holding-water"></i> Blood Bank
              </NavbarBrand>
            </Link>
            <NavbarToggler onClick={this.toggleNav} />

            <Collapse isOpen={this.state.isNavOpen} navbar>
              <Nav navbar p-5>
                <Link to="/home">
                  <NavItem>
                    <span className="nav-link" to="/home">
                      <span className="fa fa-home fa-lg"></span> Home
                    </span>
                  </NavItem>
                </Link>
                <Link to="/aboutus">
                  <NavItem>
                    <Link className="nav-link" to="/aboutus">
                      <span className="fa fa-info fa-lg"></span> About Us
                    </Link>
                  </NavItem>
                </Link>
                {/*                 
                <NavItem>
                  <span className="nav-link" to="/menu">
                    <span className="fa fa-list fa-lg"></span> Menu
                  </span>
                </NavItem> */}
                <Link to="/contact">
                  <NavItem>
                    <span className="nav-link" to="/contactus">
                      <span className="fa fa-address-card fa-lg"></span> Contact
                      Us
                    </span>
                  </NavItem>
                </Link>
              </Nav>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <Link to="/login">
                    <Button outline onClick={this.handleLogin}>
                      <span className="fa fa-sign-in fa-lg"></span> Login
                    </Button>
                  </Link>
                </NavItem>
              </Nav>
            </Collapse>
          </div>
        </Navbar>
      </div>
    );
  }
}
export default Navigation;
