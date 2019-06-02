import React, { Component } from "react";
import { connect } from "react-redux";
import { UpdateQuantity } from "../../actions/cartAction";
import { FaChevronCircleUp, FaChevronCircleDown } from "react-icons/fa";

class Item extends Component {
  // state = {
  //   price: parseFloat(this.props.price).toFixed(2)
  // };

  // handleQuantityChange(id, targetValue) {
  //   this.props.UpdateQuantity(targetValue, id);
  // }

  render() {
    const { id } = this.props;
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
          <FaChevronCircleDown
            className="text-primary cart-icon"
            onClick={this.props.decrement}
          />
          <span>{this.props.itemCount}</span>
          <FaChevronCircleUp
            className="text-primary cart-icon"
            onClick={this.props.increment}
          />

          {/* 
          <input
            className="quantityInput"
            type="number"
            name="quantity"
            title="quantity"
            value={this.props.itemCount}
            // value={this.props.quantity}
            onChange={event => {
              this.handleQuantityChange(id, event.target.value);
            }}
          /> */}
        </td>
        <td>{this.props.price}€</td>
        <td>{this.props.subtotal}€</td>
        <td>
          <i className="fas fa-trash-alt" />
        </td>
      </tr>
    );
  }
}

// const mapStateToProps = state => ({
//   carts: state.book.carts,
//   quantity: state.book.quantity
// });

export default connect(
  null,
  { UpdateQuantity }
)(Item);

// export default Item;
