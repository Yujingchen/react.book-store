import React, { Component } from "react";
class Card extends Component {
  render() {
    return (
      <div className="container">
        <div className="card mb-3">
          <div className="carImage">
            <a href="/">
              <img
                className="card-img-top"
                src={this.props.imgUrl}
                alt={this.props.title}
              />
            </a>
          </div>

          <div className="card-body">
            <div className="cardTitle">
              <a href="/" alt={this.props.title} title={this.props.title}>
                <p className="card-title">{this.props.title}</p>
              </a>
            </div>
            <div className="cardText">
              <a href="/" alt={this.props.authors[0]}>
                {this.props.authors !== null ? (
                  <p className="card-text">
                    {this.props.authors.map(author => author + "\n")}
                  </p>
                ) : (
                  <p className="card-text">{"Unknown Author"}</p>
                )}
              </a>
            </div>

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
