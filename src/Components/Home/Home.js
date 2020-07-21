import React, { Component } from "react";
import fire from "../../Config/Fire";

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
        <h1>Hello You are logged in</h1>
        <button onClick={this.signOut}>LogOut</button>
      </div>
    );
  }
}
export default Home;
