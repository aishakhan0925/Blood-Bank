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
import {
  TextField,
  FormControlLabel,
  Checkbox,
  Select,
  MenuItem,
  InputLabel,
} from "@material-ui/core";
import { Link } from "react-router-dom";
const required = (val) => val && val.length;
const maxLength = (len) => (val) => !val || val.length <= len;
const minLength = (len) => (val) => val && val.length >= len;
const isNumber = (val) => !isNaN(Number(val));
const validEmail = (val) =>
  /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);
class Needy extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      telnum: "",
      bloodGroup: "",
      country: "",
      city: "",
      age: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit() {
    alert(
      "current Value is : " +
        this.state.name +
        this.state.telnum +
        this.state.email +
        this.state.bloodGroup +
        this.state.city +
        this.state.country +
        this.state.age
    );
  }
  render() {
    return (
      <div className="container p-5">
        <Breadcrumb>
          <BreadcrumbItem>
            <Link to="/home">Home</Link>
          </BreadcrumbItem>
          <BreadcrumbItem active>Book Now</BreadcrumbItem>
        </Breadcrumb>
        <div className="row">
          <div className="col-12 col-md-9">
            <Form>
              <Row className="form-group">
                <Label
                  htmlFor="name"
                  md={2}
                  className="font-weight-bold text-muted"
                >
                  Name
                </Label>
                <Col md={10}>
                  <TextField
                    value={this.state.name}
                    id="name"
                    label="Name"
                    placeholder="Enter Your Name"
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
                    onChange={(e) => this.setState({ name: e.target.value })}
                    required
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
                    id="telnum"
                    name="telnum"
                    helperText="E.g: 12345678910"
                    placeholder="Tel. Number"
                    fullWidth
                    margin="normal"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    required
                    onChange={(e) => this.setState({ telnum: e.target.value })}
                    validators={{
                      required,
                      minLength: minLength(3),
                      maxLength: maxLength(15),
                      isNumber,
                    }}
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
                    id="email"
                    name="email"
                    placeholder="Enter Your Email"
                    helperText="E.g: John@seena.com"
                    fullWidth
                    required
                    onChange={(e) => this.setState({ email: e.target.value })}
                    margin="normal"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    validators={{
                      required,
                      validEmail,
                    }}
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
                    id="country"
                    name="country"
                    placeholder="Enter Your Country"
                    helperText="E.g: Pakistan"
                    fullWidth
                    required
                    onChange={(e) => this.setState({ country: e.target.value })}
                    margin="normal"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    validators={{
                      required,
                      validEmail,
                    }}
                  />
                </Col>
              </Row>
              <Row className="form-group">
                <Label
                  htmlFor="bloodGroup"
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
                    placeholder="Select your Blood Group"
                    helperText="E.g: Pakistan"
                    fullWidth
                    required
                    onChange={(e) =>
                      this.setState({ bloodGroup: e.target.value })
                    }
                    margin="normal"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    validators={{
                      required,
                      validEmail,
                    }}
                  >
                    <MenuItem>Blood Type</MenuItem>
                    <MenuItem value={"A+"}> A+</MenuItem>
                    <MenuItem value={"B+"}>B+</MenuItem>
                    <MenuItem value={"AB+"}>AB+</MenuItem>
                    <MenuItem value={"A-"}>A-</MenuItem>
                    <MenuItem value={"B-"}>B-</MenuItem>
                    <MenuItem value={"AB-"}>AB-</MenuItem>
                    <MenuItem value={"O+"}>O+</MenuItem>
                    <MenuItem value={"O-"}>O-</MenuItem>
                  </Select>
                </Col>
              </Row>
              <Row className="form-group">
                <Label
                  htmlFor="city"
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
                    required
                    onChange={(e) => this.setState({ city: e.target.value })}
                    margin="normal"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    validators={{
                      required,
                      validEmail,
                    }}
                  />
                </Col>
              </Row>
              <Row className="form-group">
                <Label
                  htmlFor="age"
                  md={2}
                  className="font-weight-bold text-muted"
                >
                  Age
                </Label>
                <Col md={10}>
                  <TextField
                    value={this.state.age}
                    id="age"
                    name="age"
                    placeholder="Enter Your Age"
                    helperText="E.g: 18"
                    fullWidth
                    required
                    onChange={(e) => this.setState({ age: e.target.value })}
                    margin="normal"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    validators={{
                      required,
                      validEmail,
                    }}
                  />
                </Col>
              </Row>
              <Row className="form-group">
                <Col md={{ size: 12, offset: 5 }}>
                  <Button
                    type="submit"
                    color="primary"
                    onClick={(values) => this.handleSubmit(values)}
                  >
                    Send Us
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
export default Needy;
