import React, { Component } from "react";
import fire from "../Config/Fire";
import { Home, About, Contact, Welcome, Login, Navigation } from "./";
import { Route, Switch, Redirect } from "react-router-dom";
// import { BrowserRouter, Route } from "react-router-dom";
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

  render() {
    return (
      <div>
        <Navigation />
        {/* <Welcome /> */}
        <Switch>
          {/* {this.state.user ? <Home /> : <Login />} */}

          <Route path="/" component={Welcome} />
          <Route path="/login" component={Login} />
          <Route path="/home" component={Home} />
          <Route path="/aboutus" component={About} />
          <Route path="/contact" component={Contact} />
        </Switch>
        <Redirect to="/home" />
      </div>
    );
  }
}
export default MainComponent;
