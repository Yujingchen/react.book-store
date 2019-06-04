import React, { Component } from "react";
import { Link } from "react-router-dom";
class Card extends Component {
  render() {
    return (
      <div className="container">
        <div className="card mb-3">
          <div className="carImage">
            <Link to={`../book/${this.props.id}`}>
              <img
                className="card-img-top"
                src={this.props.imgUrl}
                alt={this.props.title}
              />
            </Link>
          </div>

          <div className="card-body">
            <div className="cardTitle">
              <span alt={this.props.title} title={this.props.title}>
                <p className="card-title">{this.props.title}</p>
              </span>
            </div>
            <div className="cardText">
              <span>
                {this.props.authors !== null ? (
                  <p className="card-text">
                    {this.props.authors.map(author => author + "\n")}
                  </p>
                ) : (
                  <p className="card-text">{"Unknown Author"}</p>
                )}
              </span>
            </div>

            <div className="row">
              <Link
                to="/cart"
                className="btn btn-danger addCard"
                onClick={this.props.addCart}
              >
                Add to Cart
                
              </Link>
              <span className="priceTag">{this.props.price}</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
