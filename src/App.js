import React, { Component } from "react";
import store from "./store";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import MainHome from "./components/webpage/MainHome";
import MainBook from "./components/webpage/MainBook";
import MainResult from "./components/webpage/MainResult";
import NotFound from "./components/webpage/NotFound";
class App extends Component {
  render() {
    return (
      <Router>
        <Provider store={store}>
          <div className="App">
            <Switch>
              <Route exact path="/" component={MainHome} />
              <Route exact path={`/book/:id`} component={MainBook} />
              <Route exact path={`/search/:keyword`} component={MainResult} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </Provider>
      </Router>
    );
  }
}

export default App;
