import React, { Component } from "react";
import "./App.css";
import Main from "./components/layout/Main";
import { Provider } from "react-redux";
import store from "./store";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <Main />
        </div>
      </Provider>
    );
  }
}

export default App;
