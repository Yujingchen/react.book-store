import React, { Component } from "react";
import store from "./store";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import Home from "./components/page/Home";
import BookDetail from "./components/page/BookDetail";
import SearchResult from "./components/page/SearchResult";
import NotFound from "./components/page/NotFound";
import CartDetail from "./components/page/CartDetail";
class App extends Component {
  render() {
    return (
      <Router>
        <Provider store={store}>
          <div className="App">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path={`/book/:id`} component={BookDetail} />
              <Route exact path={`/search/:keyword`} component={SearchResult} />
              <Route exact path={"/cart"} component={CartDetail} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </Provider>
      </Router>
    );
  }
}

export default App;
