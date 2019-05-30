import React, { Component } from "react";

class Item extends Component {
  state = {
    quantity: 1,
    price: parseFloat(this.props.price).toFixed(2)
  };

  handleQuantityChange(e) {
    this.setState({
      quantity: e.target.value
    });
  }

  render() {
    let subtotal = (this.state.quantity * this.state.price).toFixed(2);
    return (
      <tr>
        <td>
          <div className="cart-product">
            <div>
              <img
                className="cart-img"
                src={this.props.image}
                alt={this.props.title}
              />
            </div>
            <div>
              <ul className="cart-info-list">
                <li>{this.props.industryIdentifiers}</li>
                <li>Subject: {this.props.subject}</li>
                <li>
                  Authors:{" "}
                  {this.props.authors !== null
                    ? this.props.authors[0]
                    : "Unknown Author"}
                </li>
                <li>Publisher: {this.props.publisher}</li>
                <li>{this.props.stock}</li>
              </ul>
            </div>
          </div>
        </td>
        <td>
          <input
            className="quantityInput"
            type="number"
            name="quantity"
            title="quantity"
            value={this.state.quantity}
            onChange={this.handleQuantityChange.bind(this)}
          />
        </td>
        <td>{this.state.price}€</td>
        <td>{subtotal}€</td>
        <td>
          <i className="fas fa-trash-alt" />
        </td>
      </tr>
    );
  }
}

export default Item;
