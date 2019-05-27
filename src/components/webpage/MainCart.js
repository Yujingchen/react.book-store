import React, { Component } from "react";
import { connect } from "react-redux";
import Sidebar from "../layout/Sidebar";
import Items from "../checkoutItems/Items";
import CheckoutForm from "../checkoutItems/CheckoutForm";

class MainCart extends Component {
  render() {
    let mainStyle = {};
    this.props.sidebarToggled
      ? (mainStyle = {
          marginLeft: "250px",
          transition: "0.5s"
        })
      : (mainStyle = { marginLeft: "0px", transition: "0.5s" });

    return (
      <div style={mainStyle}>
        <div className="main-content">
          <Items />

          <div className="checkout-form container">
            <CheckoutForm />
          </div>
        </div>

        <div className="side-bar">
          <Sidebar />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  sidebarToggled: state.book.sidebarToggled
});
export default connect(
  mapStateToProps,
  null
)(MainCart);
