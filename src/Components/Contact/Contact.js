import React, { Component } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  Col,
  Label,
  Row,
  Button,
  Form,
} from "reactstrap";
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
        <div className="row">
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
              src="https://goo.gl/maps/mdJtdNHCGNJB3FYa6"
              title="Blood Bank"
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
        <div className="row row-content">
          <div className="col-12">
            <h3>Send us your Feedback</h3>
          </div>
          <div className="col-12 col-md-9"></div>
        </div>
      </div>
    );
  }
}

export default Contact;
