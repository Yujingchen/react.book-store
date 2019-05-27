import React, { Component } from "react";
import { connect } from "react-redux";
import Item from "./Item";
import Header from "../layout/Header";
import { AddToCart } from "../../actions/cartAction";
import imageNotFound from "../image/ImageNotFound.png";

class Items extends Component {
  render() {
    const { carts } = this.props;
    return (
      <>
        <div className="header">
          <Header />
        </div>
        <div className="checkout-table container">
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col-4">Product</th>
                <th scope="col-2">Quantity</th>
                <th scope="col-2">Price</th>
                <th scope="col-2">Total</th>
                <th scope="col-2" />
              </tr>
            </thead>
            <tbody>
              {carts.length !== 0 ? (
                <div className=" main-content">
                  <div className="row">
                    {carts.map((cart, i) => (
                      <div className="col-xm" key={cart.id}>
                        <Item
                          addCart={this.handleAddCart.bind(this, cart.id)}
                          imgUrl={
                            cart.volumeInfo.hasOwnProperty("imageLinks")
                              ? cart.volumeInfo.imageLinks.smallThumbnail
                              : imageNotFound
                          }
                          title={cart.volumeInfo.title}
                          authors={
                            cart.volumeInfo.hasOwnProperty("authors")
                              ? cart.volumeInfo.authors
                              : null
                          }
                          price={
                            cart.saleInfo.hasOwnProperty("listPrice")
                              ? cart.saleInfo.listPrice.amount === 0
                                ? "Free"
                                : cart.saleInfo.listPrice.amount + "€"
                              : "Unknown"
                          }
                          id={cart.id}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              ) : null}
            </tbody>
          </table>
        </div>
      </>
    );
  }
}
const mapStateToProps = state => ({
  carts: state.book.carts
});
export default connect(
  mapStateToProps,
  { AddToCart }
)(Items);
