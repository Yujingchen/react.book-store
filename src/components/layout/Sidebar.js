import React, { Component } from "react";
import { Link } from "react-router-dom";

import { connect } from "react-redux";
class Sidebar extends Component {
  render() {
    return (
      <div className="container">
        {this.props.sidebarToggled ? (
          <div className="onSidebar sidebar-list">
            <ul className="list-group ">
              <li className="list-item">Menu</li>
              <li className="list-item">           <Link to="/category">Category list</Link></li>
              <li className="list-item">My orders</li>
              <li className="list-item">Profile</li>
              <li className="list-item">Gift Cards</li>
              <li className="list-item">
                <Link to="/wishlist">Wish list</Link>
              </li>
            </ul>
          </div>
        ) : (
          <div className="offSidebar" />
        )}
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
)(Sidebar);
