import React, { Component } from "react";
import download from "./download.svg";
class Card extends Component {
  render() {
    return (
      <div className="container">
        <div className="card" style={{ width: "300px" }}>
          <img
            className="card-img-top"
            src={download}
            alt="lol"
            style={{ width: "300px", margin: "auto", display: "block" }}
          />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              Some quick example text to build on the card titl
            </p>
            <a href="/" className="btn btn-dark">
              click
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
