import React, { Component, useState } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  Col,
  Label,
  Row,
  Button,
  Form,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap";
import style from "./Donor.module.css";
import {
  TextField,
  FormControlLabel,
  Checkbox,
  MenuItem,
  Select,
} from "@material-ui/core";
import all from "../../Config/Fire";
import * as firebase from "firebase";
import Favorite from "@material-ui/icons/Favorite";
import FavoriteBorder from "@material-ui/icons/FavoriteBorder";
import { Link } from "react-router-dom";
// import { browserHistory } from "react-router";

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !val || val.length <= len;
const minLength = (len) => (val) => val && val.length >= len;
const isNumber = (val) => !isNaN(Number(val));
const validEmail = (val) =>
  /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);

class Donor extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstname: "",
      lastname: "",
      email: "",
      telnum: "",
      country: "",
      city: "",
      age: "",
      bloodGroup: "",
      agree: false,
      isModelOpen: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const newDonor = {
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      telnum: this.state.telnum,
      email: this.state.email,
      country: this.state.country,
      city: this.state.city,
      bloodGroup: this.state.bloodGroup,
    };
    // console.log(newDonor);
    // Adding Data to firebase firestore
    let newDonorData = all.db.ref("NewDonor").orderByKey().limitToLast(1000);
    all.db.ref("NewDonor").push(newDonor);
    // Input fields blank again
    this.setState({
      firstname: "",
      lastname: "",
      email: "",
      telnum: "",
      country: "",
      city: "",
      age: "",
      bloodGroup: "",
      agree: false,
      isModelOpen: true,
    });
  }

  render() {
    return (
      <div className="container p-5 ">
        <Breadcrumb>
          <BreadcrumbItem>
            <Link to="/home">Home</Link>
          </BreadcrumbItem>
          <BreadcrumbItem active>Donate Now</BreadcrumbItem>
        </Breadcrumb>
        <div className="row">
          <div className="col-12 col-md-9">
            <Form onSubmit={this.handleSubmit}>
              <Row className="form-group">
                <Label
                  htmlFor="firstname"
                  md={2}
                  className="font-weight-bold text-muted"
                >
                  First Name
                </Label>
                <Col md={10}>
                  <TextField
                    name="firstname"
                    value={this.state.fisrtname}
                    required="required"
                    id="firstname"
                    label="First Name"
                    placeholder="Enter Your First Name"
                    helperText="E.g: John"
                    fullWidth
                    margin="normal"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    validators={{
                      required,
                      minLength: minLength(3),
                      maxLength: maxLength(15),
                    }}
                    onChange={(e) =>
                      this.setState({ firstname: e.target.value })
                    }
                  />
                </Col>
              </Row>
              <Row className="form-group">
                <Label
                  htmlFor="lastname"
                  md={2}
                  className="font-weight-bold text-muted"
                >
                  Last Name
                </Label>
                <Col md={10}>
                  <TextField
                    value={this.state.lastname}
                    id="lastname"
                    placeholder="Enter Your Last Name"
                    helperText="E.g: Seena"
                    fullWidth
                    margin="normal"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    required="required"
                    validators={{
                      required,
                      minLength: minLength(3),
                      maxLength: maxLength(15),
                    }}
                    onChange={(e) =>
                      this.setState({ lastname: e.target.value })
                    }
                  />
                </Col>
              </Row>
              <Row className="form-group">
                <Label
                  htmlFor="telnum"
                  md={2}
                  className="font-weight-bold text-muted"
                >
                  Contact Tel.
                </Label>
                <Col md={10}>
                  <TextField
                    value={this.state.telnum}
                    type="number"
                    id="telnum"
                    name="telnum"
                    helperText="E.g: 12345678910"
                    placeholder="Tel. Number"
                    fullWidth
                    margin="normal"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    required="required"
                    validators={{
                      required,
                      minLength: minLength(3),
                      maxLength: maxLength(15),
                      isNumber,
                    }}
                    onChange={(e) => this.setState({ telnum: e.target.value })}
                  />
                </Col>
              </Row>
              <Row className="form-group">
                <Label
                  htmlFor="email"
                  md={2}
                  className="font-weight-bold text-muted"
                >
                  Email
                </Label>
                <Col md={10}>
                  <TextField
                    value={this.state.email}
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter Your Email"
                    helperText="E.g: John@seena.com"
                    fullWidth
                    required="required"
                    margin="normal"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    validators={{
                      required,
                      validEmail,
                    }}
                    onChange={(e) => this.setState({ email: e.target.value })}
                  />
                </Col>
              </Row>
              <Row className="form-group">
                <Label
                  htmlFor="country"
                  md={2}
                  className="font-weight-bold text-muted"
                >
                  Country
                </Label>
                <Col md={10}>
                  <TextField
                    value={this.state.country}
                    type="text"
                    id="country"
                    name="country"
                    placeholder="Enter Your Country"
                    helperText="E.g: Pakistan"
                    fullWidth
                    required="required"
                    margin="normal"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    validators={{
                      required,
                      validEmail,
                    }}
                    onChange={(e) => this.setState({ country: e.target.value })}
                  />
                </Col>
              </Row>
              <Row className="form-group">
                <Label
                  htmlFor="email"
                  md={2}
                  className="font-weight-bold text-muted"
                >
                  City
                </Label>
                <Col md={10}>
                  <TextField
                    value={this.state.city}
                    id="city"
                    name="city"
                    placeholder="Enter Your City"
                    helperText="E.g: Karachi"
                    fullWidth
                    required="required"
                    margin="normal"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    validators={{
                      required,
                      validEmail,
                    }}
                    onChange={(e) => this.setState({ city: e.target.value })}
                  />
                </Col>
              </Row>
              <Row className="form-group">
                <Label
                  htmlFor="email"
                  md={2}
                  className="font-weight-bold text-muted"
                >
                  Blood Group
                </Label>
                <Col md={10}>
                  <Select
                    value={this.state.bloodGroup}
                    id="bloodGroup"
                    name="bloodGroup"
                    fullWidth
                    required="required"
                    margin="normal"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    validators={{
                      required,
                      validEmail,
                    }}
                    onChange={(e) =>
                      this.setState({ bloodGroup: e.target.value })
                    }
                  >
                    <MenuItem disabled value={1} />
                    Blood Type
                    <MenuItem value={2}> A+</MenuItem>
                    <MenuItem value={3}>B+</MenuItem>
                    <MenuItem value={4}>AB+</MenuItem>
                    <MenuItem value={5}>A-</MenuItem>
                    <MenuItem value={6}>B-</MenuItem>
                    <MenuItem value={7}>AB-</MenuItem>
                    <MenuItem value={8}>O+</MenuItem>
                    <MenuItem value={9}>O-</MenuItem>
                  </Select>
                </Col>
              </Row>

              <Row className="form-group">
                <Col md={{ size: 6, offset: 2 }}>
                  <div className="form-check">
                    <Label check>
                      <strong>Are you Healthy?</strong>
                      <FormControlLabel
                        name="agree"
                        value={this.state.agree}
                        style={{ margin: "8px" }}
                        required
                        control={
                          <Checkbox
                            icon={<FavoriteBorder />}
                            checkedIcon={<Favorite />}
                            name="agree"
                          />
                        }
                      />
                    </Label>
                  </div>
                </Col>
              </Row>
              <Row className="form-group">
                <Col md={{ size: 12, offset: 5 }}>
                  <Button type="submit" color="red">
                    Donate Now
                  </Button>
                </Col>
              </Row>
            </Form>
          </div>
        </div>
      </div>
    );
  }
}

export default Donor;

// export default connect(mapStateToProps, mapDispatchToProps)(Donor);
