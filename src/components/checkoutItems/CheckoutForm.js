import React, { Component } from "react";
import { connect } from "react-redux";

class CheckoutForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subtotal: 0,
      total: 0,
      shippingFee: 0,
      itemCount: 0
    };
    this.getSubtotal = this.getSubtotal.bind(this);
    this.continueShop = this.continueShop.bind(this);
    this.getItemCount = this.getItemCount.bind(this);
    this.getTotal = this.getTotal.bind(this);
  }
  componentDidMount() {
    this.getItemCount(this.props.carts);
    this.getSubtotal(this.props.carts);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.carts !== this.props.carts) {
      this.getItemCount(this.props.carts);
      this.getSubtotal(this.props.carts);
    }
  }
  addShippingFee = itemCount => {
    if (itemCount > 0) {
      this.setState(
        {
          shippingFee: 5
        },
        () => this.getTotal(this.state.subtotal, this.state.shippingFee)
      );
    } else
      this.setState(
        {
          shippingFee: 0
        },
        () => this.getTotal(this.state.subtotal, this.state.shippingFee)
      );
  };
  continueShop = () => {
    this.props.history.push("/");
  };

  getSubtotal = carts => {
    let subtotal = carts.reduce(
      (accumulator, currentValue) => accumulator + currentValue.total,
      0
    );
    this.setState(
      {
        subtotal: subtotal
      },
      () => this.getTotal(this.state.subtotal, this.state.shippingFee)
    );
  };
  //pass the getTotal callback to getSubtotal setState, get the value of subtotal after setState is done
  getTotal = (subtotal, shippingFee) => {
    let total = subtotal + shippingFee;
    this.setState({ total: total });
  };

  getItemCount = carts => {
    let itemCount = carts.reduce(
      (accumulator, currentValue) => accumulator + currentValue.count,
      0
    );
    this.setState(
      {
        itemCount: itemCount
      },
      () => this.addShippingFee(this.state.itemCount)
    );
  };

  render() {
    const { total, subtotal, itemCount, shippingFee } = this.state;
    return (
      <div className="cart-checkout">
        <table className="table table-borderless ">
          <tbody>
            <tr>
              <td>Items</td>
              <td>{itemCount}</td>
            </tr>
            <tr>
              <td>Subtotal</td>
              <td>{subtotal.toFixed(2)}€</td>
              {console.log(isNaN(subtotal))}
            </tr>
            <tr>
              <td className="line-row">Shipping estimate</td>
              <td className="line-row">{shippingFee}€</td>
            </tr>

            <tr>
              <td>
                <b>Total</b>
              </td>
              <td>{total.toFixed(2)}€</td>
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

const mapStateToProps = state => ({
  carts: state.book.carts
});
export default connect(
  mapStateToProps,
  null
)(CheckoutForm);
