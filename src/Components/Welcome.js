import React, { Component } from "react";
import { Link, BrowserRouter } from "react-router-dom";
class Welcome extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <h1>Welcome here</h1>
          <Link to="/login">
            <button>Donate</button>
          </Link>
          <Link to="/login">
            <button>Need</button>
          </Link>
        </div>
      </BrowserRouter>
    );
  }
}
export default Welcome;
