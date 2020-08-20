import React, { Component } from "react";
import fire from "../../Config/Fire";
import { Grid, Typography, Button } from "@material-ui/core";
import style from "./Home.module.css";
import { Link } from "react-router-dom";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";

class Home extends Component {
  constructor(props) {
    super(props);
    this.signOut = this.signOut.bind(this);
  }
  signOut(e) {
    fire.auth().signOut();
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
        <div className="row p-5 bg-purple align-content-between justify-content-center">
          <Link to="/donor">
            <Button className={style.btn}>Donate</Button>
          </Link>
          <Link to="/needy">
            <Button className={style.btn}>Want</Button>
          </Link>
        </div>
        <div className="row mt-5">
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
          <div className={style.benifits} xs={12}>
            <div className="row">
              <div>
                <Typography color="dark">
                  <h1 className="mt-4">Benifits of Blood Donation</h1>
                </Typography>
                <div className="container">
                  <div className={style.icons} xs={4}>
                    <span className="fa fa-user-nurse fa-lg "></span>
                    <h3>Reduce Stress</h3>
                    <Typography>
                      Donating blood has benefits for your emotional and
                      physical health. According to a report by the Mental
                      Health Foundation, helping others can: reduce stress.
                      improve your emotional well-being.
                    </Typography>
                  </div>
                  <div className={style.icons} xs={4}>
                    <span className="fas fa-hand-holding-heart"></span>
                    <h3>Emotional WELL-BEING</h3>
                    <Typography>
                      Donating blood can also improve your emotional health.
                      According to the Mental Health Foundation, doing good for
                      others is also good for your psyche. Among the many
                      emotional benefits are: Reducing stress.
                    </Typography>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <button onClick={this.signOut}>LogOut</button>
      </div>
    );
  }
}
export default Home;
