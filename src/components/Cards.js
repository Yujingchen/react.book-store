import React, { Component } from "react";
import Card from "./Card";
import Header from "./layout/Header";
class Cards extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="container">
          <div className="row">
            <div className="col-sm">
              <Card />
            </div>
            <div className="col-sm">
              <Card />
            </div>
            <div className="col-sm">
              <Card />
            </div>
            <div className="col-sm">
              <Card />
            </div>
            <div className="col-sm">
              <Card />
            </div>
            <div className="col-sm">
              <Card />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Cards;
