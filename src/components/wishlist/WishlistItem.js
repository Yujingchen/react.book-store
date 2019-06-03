import React, { Component } from "react";
import { Link } from "react-router-dom";
export default class WishlistItem extends Component {
  render() {
    return (
      <div className="wishlist-item">
        <div className="wishlist-item-img">
          {" "}
          <img
            className="wishlist-img"
            src={this.props.image}
            alt={this.props.title}
          />
        </div>
        <div className="wishlist-item-container">
          <div className="wishlist-item-title">{this.props.title}</div>
          <div className="wishlist-item-note">
            <span className="item-note"> Stock: {this.props.stock}</span>{" "}
          </div>
          <div className="wishlist-item-info">
            {" "}
            <ul className="wishlist-info-list">
              <li className="wishlist-price-info">
                <div className="item-price-colmn">
                  <span className="info-label">List Price:</span>{" "}
                  <span className="list-item-info">{this.props.price} </span>{" "}
                </div>
              </li>
              <li className="wishlist-author-list">
                <div className="item-colmn">
                  <span className="info-label"> Author:</span>
                  <span className="list-item-info">{this.props.authors}</span>
                  <span className="info-label">
                    {this.props.industryIdentifiers}
                  </span>
                </div>
              </li>

              <li className="wishlist-subject-list">
                <div className="item-colmn">
                  <span className="info-label"> Subject:</span>
                  <span className="list-item-info">{this.props.subject}</span>
                  <span className="info-label">
                    {this.props.industryIdentifiers}
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="wishlist-item-action">
          <div className="wishlist-action">
            <Link
              to="/cart"
              className="btn btn-primary wishlist-btn"
              onClick={this.props.AddCart}
              style={{ backgroundColor: "#3665f3", color: "#fff" }}
            >
              Add to Cart
            </Link>
          </div>
          <div className="wishlist-action">
            <Link
              to="/wishlist"
              className="btn btn-danger wishlist-btn"
              onClick={this.props.onDeleteClick}
            >
              Delete
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
