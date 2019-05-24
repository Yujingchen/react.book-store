import React, { Component } from "react";
import "./App.css";
import Main from "./components/layout/Main";
import { Provider } from "react-redux";
import store from "./store";
import "bootstrap/dist/css/bootstrap.min.css";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Book from "./components/layout/Book";

class App extends Component {
  render() {
    return (
      <Router>
        <Provider store={store}>
          <div className="App">
            <Switch>
              <Route exact path="/" component={Main} />
              {/* <Route exact path="/book/search/:key" component={Main} /> */}
              <Route exact path={`/book/:id`} component={Book} />
            </Switch>
          </div>
        </Provider>
      </Router>
    );
  }
}

export default App;
