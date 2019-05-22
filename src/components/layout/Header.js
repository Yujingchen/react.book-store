import React, { Component } from "react";
import Sidebar from "./Sidebar";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebarToggled: false
    };
    this.toggleSidebar = this.toggleSidebar.bind(this);
  }

  toggleSidebar() {
    this.setState(state => ({
      sidebarToggled: !state.sidebarToggled
    }));
  }

  render() {
    const sidebarToggled = this.state.sidebarToggled;
    let mainStyle = {};
    sidebarToggled
      ? (mainStyle = {
          marginLeft: "250px"
        })
      : (mainStyle = { marginLeft: "0px" });
    return (
      <div>
        <nav className="navbar navbar-dark bg-dark" style={mainStyle}>
          <button
            className="btn"
            type="button"
            data-toggle="collapse"
            data-target="#demo"
            aria-controls="demo"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={this.toggleSidebar}
          >
            <span className="navbar-toggler-icon" />
          </button>
          <ul className="navbar-nav list-group list-group-horizontal">
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

        {sidebarToggled ? (
          <div className="onSidebar">
            <ul className="list-group">
              <li className="list-item">Menu</li>
              <li className="list-item">Category</li>
              <li className="list-item">My orders</li>
              <li className="list-item">Profile</li>
              <li className="list-item">Gift Cards</li>
              <li className="list-item">Wish list</li>
            </ul>
          </div>
        ) : (
          <div className="offSidebar" />
        )}
      </div>
    );
  }
}

export default Header;
