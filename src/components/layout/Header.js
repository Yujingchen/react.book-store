import React, { Component } from "react";
import { ToggleSidebar } from "../../actions/sidebarAction";
import { connect } from "react-redux";
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
              <a className="nav-link" href="/">
                Home
                <i className="fas fa-home" />
              </a>
            </li>
            <li className="nav-item listItem">
              <a className="nav-link" href="/">
                Cart
                <i className="fas fa-shopping-cart" />
              </a>
            </li>
            <li className="nav-item listItem">
              <a className="nav-link" href="/">
                About
                <i className="fas fa-info-circle" />
              </a>
            </li>
            <li className="nav-item listItem">
              <a className="nav-link" href="/">
                Userinfo
                <i className="fas fa-user" />
              </a>
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
