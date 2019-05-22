import React, { Component } from "react";
import Card from "./Card";
class Cards extends Component {
  render() {
    return (
      <div className="container">
        <div class="row">
          {" "}
          <div class="col-sm">
            <Card />
          </div>
          <div class="col-sm">
            <Card />
          </div>
          <div class="col-sm">
            <Card />
          </div>
          <div class="col-sm">
            <Card />
          </div>
          <div class="col-sm">
            <Card />
          </div>
          <div class="col-sm">
            <Card />
          </div>
        </div>
      </div>
    );
  }
}

export default Cards;
