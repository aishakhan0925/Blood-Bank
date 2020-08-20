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
import fire from "../../Config/Fire";
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
    this.ModalExample = this.ModalExample.bind(this);
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
      agree: this.state.agree,
    };
    console.log(newDonor);
    // Adding Data to firebase firestore
    // let newDonorData = fire
    //   .database()
    //   .ref("NewDonor")
    //   .orderByKey()
    //   .limitToLast(1000);
    // fire.database().ref("NewDonor").push(this.state.firstname);
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
    });
    ModalExample();
  }

  render() {
    const ModalExample = (props) => {
      const { buttonLabel, className } = props;

      const [modal, setModal] = useState(false);

      const toggle = () => setModal(!modal);

      return (
        <div>
          <Modal isOpen={modal} toggle={toggle} className={className}>
            <ModalHeader toggle={toggle}>Modal title</ModalHeader>
            <ModalBody>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </ModalBody>
            <ModalFooter>
              <Button color="primary" onClick={toggle}>
                Do Something
              </Button>{" "}
              <Button color="secondary" onClick={toggle}>
                Cancel
              </Button>
            </ModalFooter>
          </Modal>
        </div>
      );
    };
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
