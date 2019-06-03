import React, { Component } from "react";
import { Link } from "react-router-dom";
export default class Empty extends Component {
  render() {
    return (
      <div className="empty-cart">
        {" "}
        <div className="font-title">
          <span>
            You don't have any items in your cart. Let's get shopping!
          </span>
        </div>
        <div className="actions">
          <Link
            to="/"
            className="start-shopping-btn"
            style={{ backgroundColor: "#24292e", color: "#fff" }}
          >
            <i className="fas fa-shopping-cart" /> Start shopping
          </Link>{" "}
        </div>
      </div>
    );
  }
}
