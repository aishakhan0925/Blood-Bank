import React, { Component } from "react";
import MainComponent from "./Components/MainComponent";
import { BrowserRouter } from "react-router-dom";
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <MainComponent />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
