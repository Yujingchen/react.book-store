import React, { Component } from "react";
import { connect } from "react-redux";
import Item from "./Item";
import CheckoutForm from "../checkoutItems/CheckoutForm";
import Header from "../layout/Header";
import { AddCount, DecreaseCount } from "../../actions/cartAction";
import imageNotFound from "../image/ImageNotFound.png";

class Items extends Component {
  handleAddCount = id => {
    this.props.AddCount(id);
  };
  handleDecreaseCount = id => {
    this.props.DecreaseCount(id);
  };
  render() {
    const { carts } = this.props;
    return (
      <>
        <div className="header">
          <Header />
        </div>
        {Array.isArray(carts) ? (
          carts.length !== 0 ? (
            <>
              <div className="checkout-table container">
                <table className="table table-striped cart-table">
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
                    {carts.map((cart, i) => (
                      <Item
                        increment={this.handleAddCount.bind(this, cart.id)}
                        decrement={this.handleDecreaseCount.bind(this, cart.id)}
                        itemCount={cart.count}
                        //changed
                        image={
                          cart.volumeInfo.hasOwnProperty("imageLinks")
                            ? cart.volumeInfo.imageLinks.smallThumbnail
                            : imageNotFound
                        }
                        industryIdentifiers={
                          cart.volumeInfo.hasOwnProperty("industryIdentifiers")
                            ? cart.volumeInfo.industryIdentifiers[0].identifier
                            : "Unknown ISBN"
                        }
                        subject={
                          cart.volumeInfo.hasOwnProperty("categories")
                            ? cart.volumeInfo.categories[0]
                            : "Uncategorized"
                        }
                        authors={
                          cart.volumeInfo.hasOwnProperty("authors")
                            ? cart.volumeInfo.authors
                            : null
                        }
                        price={
                          cart.saleInfo.hasOwnProperty("listPrice")
                            ? parseFloat(
                                Math.round(
                                  cart.saleInfo.listPrice.amount * 100
                                ) / 100
                              ).toFixed(2)
                            : 0
                        }
                        subtotal={cart.total}
                        stock={
                          cart.saleInfo.hasOwnProperty("saleability")
                            ? cart.saleInfo.saleability === "NOT_FOR_SALE"
                              ? cart.saleInfo.saleability.replace(
                                  "NOT_FOR_SALE",
                                  "Out Of Stock"
                                )
                              : cart.saleInfo.saleability.replace(
                                  "FOR_SALE",
                                  "In Stock"
                                )
                            : "Unknown Sale State"
                        }
                        publisher={
                          cart.volumeInfo.hasOwnProperty("publisher")
                            ? cart.volumeInfo.publisher
                            : "Unknown publisher"
                        }
                        key={cart.id}
                        id={cart.id}
                      />
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="checkout-form container">
                <CheckoutForm history={this.props.history} />
              </div>
            </>
          ) : (
            "null"
          )
        ) : (
          "null"
        )}
      </>
    );
  }
}
const mapStateToProps = state => ({
  carts: state.book.carts
});
export default connect(
  mapStateToProps,
  { AddCount, DecreaseCount }
)(Items);
