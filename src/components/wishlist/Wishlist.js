import React, { Component } from "react";
import { connect } from "react-redux";
import WishlistItem from "./WishlistItem";
import { AddCartFromBooks } from "../../actions/cartAction";
import { DeleteWishlist } from "../../actions/wishlistAction";
import EmptryWishlist from "./EmptyWishlist";
import Header from "../layout/Header";
// import { AddCount, DecreaseCount, DeleteCart } from "../../actions/cartAction";
import imageNotFound from "../image/ImageNotFound.png";

class Wishlist extends Component {
  handleAddCart = id => {
    this.props.AddCartFromBooks(id);
  };
  handleDeleteClick = id => {
    this.props.DeleteWishlist(id);
  };
  render() {
    const { wishlist } = this.props;
    return (
      <>
        <div className="header">
          <Header />
        </div>
        <div className="container">
          <div className="collection-title-3">Wishlist</div>

          {Array.isArray(wishlist) ? (
            wishlist.length !== 0 ? (
              <>
                <div className="checkout-table container">
                  {wishlist.map((item, i) => (
                    <WishlistItem
                      AddCart={this.handleAddCart.bind(this, item.id)}
                      onDeleteClick={this.handleDeleteClick.bind(this, item.id)}
                      image={
                        item.volumeInfo.hasOwnProperty("imageLinks")
                          ? item.volumeInfo.imageLinks.smallThumbnail
                          : imageNotFound
                      }
                      title={item.volumeInfo.title}
                      industryIdentifiers={
                        item.volumeInfo.hasOwnProperty("industryIdentifiers")
                          ? item.volumeInfo.industryIdentifiers[0].identifier
                          : "Unknown ISBN"
                      }
                      subject={
                        item.volumeInfo.hasOwnProperty("categories")
                          ? item.volumeInfo.categories[0]
                          : "Uncategorized"
                      }
                      authors={
                        item.volumeInfo.hasOwnProperty("authors")
                          ? item.volumeInfo.authors
                          : null
                      }
                      price={
                        item.saleInfo.hasOwnProperty("listPrice")
                          ? parseFloat(
                              Math.round(item.saleInfo.listPrice.amount * 100) /
                                100
                            ).toFixed(2)
                          : 0
                      }
                      stock={
                        item.saleInfo.hasOwnProperty("saleability")
                          ? item.saleInfo.saleability === "NOT_FOR_SALE"
                            ? item.saleInfo.saleability.replace(
                                "NOT_FOR_SALE",
                                "Out Of Stock"
                              )
                            : item.saleInfo.saleability.replace(
                                "FOR_SALE",
                                "In Stock"
                              )
                          : "Unknown Sale State"
                      }
                      publisher={
                        item.volumeInfo.hasOwnProperty("publisher")
                          ? item.volumeInfo.publisher
                          : "Unknown publisher"
                      }
                      key={item.id}
                      id={item.id}
                    />
                  ))}
                </div>
              </>
            ) : (
              <EmptryWishlist />
            )
          ) : (
            <EmptryWishlist />
          )}
        </div>
      </>
    );
  }
}
const mapStateToProps = state => ({
  wishlist: state.book.wishlist
});
export default connect(
  mapStateToProps,
  { AddCartFromBooks, DeleteWishlist }
)(Wishlist);
