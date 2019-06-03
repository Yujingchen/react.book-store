import React, { Component } from "react";

export default class EmptyWishlist extends Component {
  render() {
    return (
      <div className="empty-wishlist-conatiner">
        <div className="empty-wishlist">
          <i className="far fa-heart empty-wishlist-icon fa-3x" />
          <h3>You have no items in your Wishlist.</h3>
          <span>
            Start adding items to your Watchlist today! Simply tap ‘Add to
            Wishlist next to the item you want to keep a close eye on.
          </span>
        </div>
      </div>
    );
  }
}
