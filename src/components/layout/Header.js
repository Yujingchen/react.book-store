import React, { Component } from "react";
import { userInfo } from "os";

class Header extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-dark bg-info d-print">
          <button
            className="btn"
            type="button"
            data-toggle="collapse"
            data-target="#demo"
            aria-controls="demo"
            aria-expanded="false"
            aria-label="Toggle navigation"
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
        <div id="demo" className="navbar-side sidenav collapse">
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#clients">Clients</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    );
  }
}

export default Header;
