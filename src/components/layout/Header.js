import React, { Component } from "react";
import { connect } from "react-redux";
import { ToggleSidebar } from "../../actions/sidebarAction";
import { Link } from "react-router-dom";
class Header extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-dark mb-3">
          <button
            className="btn"
            type="button"
            data-toggle="collapse"
            data-target="#demo"
            aria-controls="demo"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={this.props.ToggleSidebar}
          >
            <span className="navbar-toggler-icon" />
          </button>
          <ul className="navbar-nav">
            <li className="nav-item listItem">
              <Link className="nav-link" to="/">
                Home
                <i className="fas fa-home" />
              </Link>
            </li>
            <li className="nav-item listItem">
              <Link className="nav-link" to="/cart">
                Cart
                <i className="fas fa-shopping-cart" />
              </Link>
            </li>
            <li className="nav-item listItem">
              <Link className="nav-link" to="/">
                About
                <i className="fas fa-info-circle" />
              </Link>
            </li>
            <li className="nav-item listItem">
              <Link className="nav-link" to="/">
                Userinfo
                <i className="fas fa-user" />
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  sidebarToggled: state.book.sidebarToggled
});

export default connect(
  mapStateToProps,
  { ToggleSidebar }
)(Header);
