import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import { Button } from "reactstrap";
import { Link, BrowserRouter as Router } from "react-router-dom";
import all from "../../Config/Fire";

const FooterPage = () => {
  const signOut = (e) => {
    all.fire.auth().signOut();
  };
  return (
    <MDBFooter
      style={{ backgroundColor: "#b8235a" }}
      className="font-small pt-5 mt-4"
      fixed="bottom"
    >
      <MDBContainer fluid className="text-center text-md-left p-5">
        <MDBRow>
          <MDBCol md="4">
            <h5 className="title">Who Can Give Blood?</h5>
            <p>
              {" "}
              You are eligible to donate blood if you are in good health, weigh
              at least 110 pounds and are 17 years or older. You are not
              eligible to donate blood if you: Have ever used self-injected
              drugs (non-prescription)
            </p>
          </MDBCol>
          <MDBCol md="2">
            <h5 className="title">Quick Access</h5>
            <ul>
              <li className="list-unstyled">
                <Link to="/">Home</Link>
              </li>
              <li className="list-unstyled">
                <Link to="/about">About</Link>
              </li>
              <li className="list-unstyled">
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </MDBCol>
          <MDBCol md="2">
            <h5 className="title ">Our Social</h5>
            <ul>
              <li className="list-unstyled">Facebook</li>
              <li className="list-unstyled">Youtube</li>
              <li className="list-unstyled">Twitter</li>
              <li className="list-unstyled">Instagram</li>
            </ul>
          </MDBCol>
          <MDBCol md="2">
            <Button onClick={signOut}>Logout</Button>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3 ">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright:{" "}
        </MDBContainer>
      </div>
    </MDBFooter>
  );
};

export default FooterPage;
