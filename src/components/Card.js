import React, { Component } from "react";
class Card extends Component {
  render() {
    return (
      <div className="container">
        <div className="card mb-3">
          <img
            className="card-img-top"
            src={this.props.imgUrl}
            alt={this.props.title}
          />
          <div className="card-body">
            <h5 className="card-title">{this.props.title}</h5>
            {this.props.authors !== null ? (
              <p className="card-text">
                {this.props.authors.map(author => author + "\n")}
              </p>
            ) : (
              <p className="card-text">{"Unknown Author"}</p>
            )}

            <div className="row">
              <a href="/" className="btn btn-dark addCard">
                Add to Cart
              </a>
              <span className="priceTag">{this.props.price}</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
