import React, { Component } from "react";
import fire from "../Config/Fire";
import {
  Navigation,
  Home,
  About,
  Contact,
  Welcome,
  Login,
  FooterPage,
  Donor,
  Needy,
  OurDonors,
} from "./";
import { Route, Switch, Redirect, withRouter } from "react-router-dom";
// import { connect } from "react-redux";
// import { AddDonor } from "../store/ActionCreators";
// ============================================Redux Code==================================

// const mapStateToProps = (state) => {
//   return {
//     AddDonor: state.AddDonor,
//   };
// };
// const mapDispatchToProps = (dispatch) => ({
//   AddDonor: (
//     id,
//     firstname,
//     lastname,
//     email,
//     telnum,
//     age,
//     city,
//     country,
//     bloodGroup
//   ) =>
//     dispatch(
//       AddDonor(
//         id,
//         firstname,
//         lastname,
//         email,
//         telnum,
//         age,
//         city,
//         country,
//         bloodGroup
//       )
//     ),
// });

class MainComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
    };
  }

  authListner() {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user });
      } else {
        this.setState({ user: null });
      }
    });
  }
  componentDidMount() {
    this.authListner();
  }
  routes() {
    return (
      <>
        <Switch>
          <Route exact path="/home" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route
            exact
            path="/donor"
            component={() => <Donor AddDonor={this.props.AddDonor} />}
          />
          <Route exact path="/needy" component={Needy} />
          <Route exact path="/donors" component={OurDonors} />
          <Redirect to="/home" />
        </Switch>
      </>
    );
  }
  render() {
    return (
      <div>
        <Navigation />

        {this.state.user ? this.routes() : <Login />}
        <FooterPage />
      </div>
    );
  }
}

export default MainComponent;
// export default withRouter(
//   connect(mapStateToProps, mapDispatchToProps)(MainComponent)
// );
