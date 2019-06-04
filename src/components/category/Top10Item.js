import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class CategoryItem extends Component {
  render() {
    return (
      <li className="top10-list-product">
        <div className="top10-product">
          <Link to={`../book/${this.props.id}`}>
            <img
              className="top10-img"
              src={this.props.image}
              alt={this.props.title}
            />
          </Link>
          <div className="top10-product-detail">
            <div className="top10-product-info">
              <div className="top10-product-name-wrapper">
                <Link to={`../book/${this.props.id}`}>{this.props.title}</Link>
                <div className="top10-product-title-sideinfo-wrapper">
                  <span className="top10-product-title-sideinfo">
                    {this.props.authors}
                  </span>
                  <span className="top10-product-title-sideinfo">
                    {this.props.stock}
                  </span>
                  <span className="top10-product-title-sideinfo">
                    {this.props.publisher}
                  </span>
                </div>
              </div>
              <div className="top10-product-btn-wrapper">
                <div className="top10-product-price-wrapper">
                  {this.props.price}{" "}
                </div>
                <div className="top10-product-btn-inner-wrapprt">
                  <Link
                    to="/cart"
                    className="btn btn-danger addCard"
                    onClick={this.props.addCart}
                  >
                    <i className="fas fa-shopping-bag" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="top10-product-description"> Hello </div>
          </div>
        </div>
      </li>
    );
  }
}
