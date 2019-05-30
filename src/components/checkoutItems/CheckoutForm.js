import React, { Component } from "react";

class CheckoutForm extends Component {
  continueShop = () => {
    this.props.history.push("/");
  };
  render() {
    return (
      <div className="cart-checkout">
        <table className="table table-borderless ">
          <tbody>
            <tr>
              <td>Item(1)</td>
              <td>10€</td>
            </tr>
            <tr>
              <td className="line-row">Shipping estimate</td>
              <td className="line-row">5€</td>
            </tr>

            <tr>
              <td>
                <b>Total</b>{" "}
              </td>
              <td>15€</td>
            </tr>
            <tr>
              <td>
                <button
                  className="myBotton btn-danger"
                  style={{ backgroundColor: "#CE2B87", color: "#fff" }}
                  onClick={this.continueShop.bind(this)}
                >
                  <i className="fas fa-shopping-cart" /> Continue Shopping
                </button>
              </td>
              <td>
                {" "}
                <button
                  className="myBotton btn-success"
                  style={{ backgroundColor: "#019569", color: "#fff" }}
                >
                  Checkout <i className="fas fa-caret-right fa-lg" />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default CheckoutForm;
