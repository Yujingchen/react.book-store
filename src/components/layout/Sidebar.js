import React, { Component } from "react";

class Sidebar extends Component {
  render() {
    return (
      <div id="mySidenav" class="sidenav">
        <a href="/">About</a>
        <a href="/">Services</a>
        <a href="/">Clients</a>
        <a href="/">Contact</a>
      </div>
    );
  }
}
export default Sidebar;
