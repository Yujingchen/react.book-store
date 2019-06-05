import React, { Component } from "react";
import { Link } from "react-router-dom";
import shoppingBag from "../image/shopping-bag.png";

export default class CategoryItem extends Component {
  render() {
    return (
      <li className="top10-list-product col-lg-6 col" key={this.props.listKey}>
        <div className="top10-product">
          <Link className="" to={`../book/${this.props.id}`}>
            <img
              className="top10-img"
              src={this.props.image}
              alt={this.props.title}
            />
          </Link>
          <div className="top10-product-detail">
            <div className="top10-product-info">
              <div className="top10-product-name-wrapper ">
                <div className="col col-xm-12">
                  <Link to={`../book/${this.props.id}`}>
                    {this.props.title}{" "}
                  </Link>
                </div>
                <div className="top10-product-title-sideinfo-wrapper col col-xm-12">
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
                  <span className="price-whole-part">
                    {this.props.priceWhole}
                  </span>
                  <span className="price-fractional-part">
                    {this.props.priceFractional}
                  </span>
                </div>
                <div className="top10-product-btn-inner-wrapprt">
                  <Link
                    to="/cart"
                    className=" circle-btn addCard"
                    onClick={this.props.AddCart}
                  >
                    <img
                      className="shopping-bag-icon"
                      src={shoppingBag}
                      title="Add cart"
                      alt="add cart button"
                    />
                  </Link>
                </div>
              </div>
            </div>
            <div className="top10-product-description">
              {" "}
              {this.props.description}
            </div>
          </div>
        </div>
      </li>
    );
  }
}
