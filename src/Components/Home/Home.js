import React, { Component } from "react";
import { Grid, Typography, Button } from "@material-ui/core";
import style from "./Home.module.css";
import { Link } from "react-router-dom";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";

class Home extends Component {
  constructor(props) {
    super(props);
    // this.signOut = this.signOut.bind(this);
  }

  render() {
    return (
      <div>
        <div className="container p-5">
          <Breadcrumb>
            <BreadcrumbItem active>
              <Link to="/home">Home</Link>
            </BreadcrumbItem>
          </Breadcrumb>
        </div>
        <div className="row align-content-between justify-content-center">
          <Link to="/donor">
            <Button>
              <img
                src="Assets/Images/donate.png"
                alt="DONATE"
                className={style.btn}
              />
            </Button>
          </Link>
        </div>
        <div className="row mt-5 p-5">
          <Grid item xs={12} md={6}>
            <img src="./Assets/Images/img6.png" alt="Image" />
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography color="dark">
              <h1 className="text-align-center p-5">Donate Your Blood</h1>
              <h4>
                A blood donation occurs when a person voluntarily has blood
                drawn and used for transfusions and/or made into
                biopharmaceutical medications by a process called fractionation.
                Donation may be of whole blood, or of specific components
                directly. However, in the United States, AB-negative is
                considered to be the rarest blood type, and O-positive the most
                common. The Stanford School of Medicine Blood Center ranks blood
                types in the United States from rarest to most common as
                follows: AB-negative
              </h4>
            </Typography>
          </Grid>
        </div>
        <div className="row mt-5 p-5">
          <Grid item xs={12} md={4}>
            <img src="./Assets/Images/img5.png" alt="Image" />
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography color="dark">
              <h1 className="text-align-center p-5">Save your Life</h1>
              <h4>
                A blood donation occurs when a person voluntarily has blood
                drawn and used for transfusions and/or made into
                biopharmaceutical medications by a process called fractionation.
                Donation may be of whole blood, or of specific components
                directly. However, in the United States, AB-negative is
                considered to be the rarest blood type, and O-positive the most
                common. The Stanford School of Medicine Blood Center ranks blood
                types in the United States from rarest to most common as
                follows: AB-negative
              </h4>
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <img src="./Assets/Images/img7.png" alt="Image" />
          </Grid>
        </div>
        <div className="row mt-5 text-center p-5">
          <Grid item xs={12} md={12}>
            <Typography color="dark">
              <h1 className="text-align-center p-5">
                Benifits of Blood Donation
              </h1>
              <h4>
                A blood donation occurs when a person voluntarily has blood
                drawn and used for transfusions and/or made into
                biopharmaceutical medications by a process called fractionation.
                Donation may be of whole blood, or of specific components
                directly. However, in the United States, AB-negative is
                considered to be the rarest blood type, and O-positive the most
                common. The Stanford School of Medicine Blood Center ranks blood
                types in the United States from rarest to most common as
                follows: AB-negative A blood donation occurs when a person
                voluntarily has blood drawn and used for transfusions and/or
                made into biopharmaceutical medications by a process called
                fractionation. Donation may be of whole blood, or of specific
                components directly. However, in the United States, AB-negative
                is considered to be the rarest blood type, and O-positive the
                most common. The Stanford School of Medicine Blood Center ranks
                blood types in the United States from rarest to most common as
                follows: AB-negative
              </h4>
            </Typography>
          </Grid>
        </div>
        <div className="row p-3 align-content-between justify-content-center">
          <Link to="/donor">
            <Button>
              <img
                src="Assets/Images/donate2.png"
                alt="DONATE"
                style={{ width: "400px", height: "200px" }}
              />
            </Button>
          </Link>
        </div>
      </div>
    );
  }
}
export default Home;
