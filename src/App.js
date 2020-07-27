import React, { Component } from "react";
import MainComponent from "./Components/MainComponent";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import style from "./App.module.css";
import { store } from "./store/configureStore";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <MainComponent />
        </Router>
      </Provider>
    );
  }
}

export default App;
