import React, { Component } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  Col,
  Label,
  Row,
  Button,
  Input,
} from "reactstrap";
import { Grid } from "@material-ui/core";

// import { Control, Form, Errors, actions } from "react-redux-form";
import { Link } from "react-router-dom";

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !val || val.length <= len;
const minLength = (len) => (val) => val && val.length >= len;
const isNumber = (val) => !isNaN(Number(val));
const validEmail = (val) =>
  /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: "",
      lastname: "",
      telnum: "",
      email: "",
      agree: false,
      contactType: "Tel.",
      message: "",
      touched: {
        firstname: false,
        lastname: false,
        telnum: false,
        email: false,
      },
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(values) {
    console.log("Current State is: " + JSON.stringify(values));
    alert("Current State is: " + JSON.stringify(values));
    this.props.resetFeedbackForm();
  }

  render() {
    return (
      <div className="container p-5">
        <Breadcrumb>
          <BreadcrumbItem>
            <Link to="/home">Home</Link>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <Link to="/about">About</Link>
          </BreadcrumbItem>
          <BreadcrumbItem active>Contact Us</BreadcrumbItem>
        </Breadcrumb>
        {/* <Grid item xs={12} md={4}>
          <img src="./Assets/Images/bank.png" alt="Image" height="100px" />
        </Grid> */}
        <div className="row p-5">
          <div className="col-12">
            <h1>Contact Us</h1>
            <hr />
          </div>
        </div>
        <div className="row row-content">
          <div className="col-12">
            <h3>Location Information</h3>
          </div>
          <div className="col-12 col-sm-4 offset-sm-1">
            <h5>Our Address</h5>
            <address>
              abc, Clear Water Bay Road
              <br />
              Clear Water Bay, Kowloon
              <br />
              Pakistan
              <br />
              <i className="fa fa-phone"></i>: +92 182 1299
              <br />
              <i className="fa fa-fax"></i>: +92 128 832333
              <br />
              <i className="fa fa-envelope"></i>:{" "}
              <a href="mailto:">abc@efg.com</a>
            </address>
          </div>
          <div className="col-12 col-sm-6 offset-sm-1">
            <h5>Map of our Location</h5>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14461.388947074873!2d67.0583741!3d25.022287450000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sca!4v1598022267052!5m2!1sen!2sca"
              width="300"
              height="250"
              frameborder="2"
              allowfullscreen="true"
              aria-hidden="false"
              tabindex="0"
            ></iframe>
          </div>
          <div className="col-12 col-sm-11 offset-sm-1">
            <div className="btn-group" role="group">
              <a
                role="button"
                className="btn btn-primary"
                href="tel:+85212345678"
              >
                <i className="fa fa-phone"></i> Call
              </a>
              <a role="button" className="btn btn-info">
                <i className="fa fa-skype"></i> Skype
              </a>
              <a
                role="button"
                className="btn btn-success"
                href="mailto:confusion@food.net"
              >
                <i className="fa fa-envelope-o"></i> Email
              </a>
            </div>
          </div>
        </div>
        <Row className="form-group p-5">
          <Col md={12}>
            <h1>Your Feedback</h1>
            <hr />
          </Col>

          <Col md={10}>
            <Input
              type="textarea"
              id="message"
              name="message"
              rows="12"
              className="form-control"
            />
          </Col>
        </Row>
        <Row className="form-group">
          <Col md={{ size: 10, offset: 8 }}>
            <Button type="submit" color="primary">
              Send Feedback
            </Button>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Contact;
