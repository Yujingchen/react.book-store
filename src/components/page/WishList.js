import React, { Component } from "react";
import { connect } from "react-redux";
import Wishlist from "../wishlist/Wishlist";
import Sidebar from "../layout/Sidebar";

class WishList extends Component {
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
          <Wishlist />
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
)(WishList);
